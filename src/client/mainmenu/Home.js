import React from 'react'
import Ajax from 'Util/Ajax'
import ReactTable from 'react-table'
import User from './User'
import { Button } from 'reactform-appco'
import ErrorDetails from './ErrorDetails'
import 'react-table/react-table.css'
import 'css/main.scss'
import 'css/errorbody.scss'
import Logo from './../logo.png'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errorList: [{ message: 'no errors found', id: '', time: '' }],
			details: {}
		}
		this.selectItem = this.selectItem.bind(this)
		this.getAllErrors = this.getAllErrors.bind(this)
	}

	componentDidMount() {
		this.getAllErrors()
	}

	getAllErrors() {
		console.log('geting errors')
		Ajax.get('/getAllErrors').then((resp) => {
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
				<div id='logo-box'>
					<img src={Logo} alt='Appreciate Logo' />
				</div>
				<div id='user'>
					<User userData={this.props.userData} signOut={this.props.signOut} />
				</div>

				<div id='error-list'>
					<Button
						id='Refresh'
						className='submit'
						value='Refresh'
						onClick={this.getAllErrors}
					/>
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
				<div id='error-details'>
					<ErrorDetails details={this.state.details} />
				</div>
			</div>
		)
	}
}

export default Home
