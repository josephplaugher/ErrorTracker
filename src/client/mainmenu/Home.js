import React from 'react'
import Ajax from 'Util/Ajax'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactTable from 'react-table'
import User from './User'
import ErrorDetails from './ErrorDetails'
import 'react-table/react-table.css'
import 'css/errorbody.scss'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errorList: [{ message: 'no errors found', id: '', time: '' }],
			details: {}
		}
		this.selectItem = this.selectItem.bind(this)
	}

	componentDidMount() {
		Ajax.get('/getAllErrors').then((resp) => {
			console.log('errors:', resp)
			this.setState({ errorList: resp.data.errorList })
		})
	}

	selectItem(item) {
		this.setState({ details: item })
	}

	render() {
		const columns = [
			{ Header: 'ID', accessor: 'id', width: 30 },
			{ Header: 'App', accessor: 'appname', width: 100 },

			{ Header: 'Level', accessor: 'level', width: 100 },
			{ Header: 'Message', accessor: 'message' },
			{ Header: 'Timestampt', accessor: 'timestamp', width: 100 }
		]
		return (
			<div id='home-container'>
				{/* <User signOut={this.props.signOut} /> */}

				<div id='working-pane'>
					<div id='error-list'>
						<ReactTable
							getTdProps={(state, rowInfo, column, instance) => {
								return {
									onClick: (e, handleOriginal) => {
										this.selectItem(rowInfo.original)
									}
								}
							}}
							data={this.state.errorList}
							columns={columns}
							defaultPageSize={5}
						/>
					</div>
					<div id='error-details' />
					<ErrorDetails details={this.state.details} />
				</div>
			</div>
		)
	}
}

export default Home
