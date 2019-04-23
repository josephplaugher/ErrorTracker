import React from 'react'
import Ajax from 'Util/Ajax'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactTable from 'react-table'
import User from './User'
import 'react-table/react-table.css'
import 'css/errorbody.scss'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			errorList: [{ message: 'no errors found', id: '', time: '' }]
		}
	}

	componentDidMount() {
		Ajax.get('/getAllErrors').then((resp) => {
			console.log('errors:', resp)
			this.setState({ errorList: resp.data.errorList })
		})
	}
	render() {
		// const errors = this.state.errorList.map((error) => (
		// 	<div key={error.id} className='error-body'>
		// 		<p className='error-item'>{error.appname}</p>
		// 		<p className='error-item'>{error.error}</p>
		// 		<p className='error-item'>{error.timestamp}</p>
		// 	</div>
		// ))

		const columns = [
			{ Header: 'ID', accessor: 'id' },
			{ Header: 'App', accessor: 'appname' },
			{ Header: 'Error', accessor: 'error' },
			{ Header: 'Timestampt', accessor: 'timestamp' }
		]
		return (
			<div id='home-container'>
				{/* <User signOut={this.props.signOut} /> */}
				<Router>
					{/* prettier-ignore */}
					<div id="nav-pane">   

					{/* 
          <Link to="/cc" className="nav">Pay With Credit Card</Link>
            <Route path="/cc" 
              render={(props) => <Elements><CreditCard {...props} method="CC"/></Elements>}
              />
          <br/><Link to="/ach" className="nav">Pay With ACH</Link>
            <Route path="/ach" 
              render={(props) => <Elements><ACHHome userData={this.props.userData} method="ACH"/></Elements>}
							/>
					*/}
        </div>
				</Router>

				<div id='working-pane'>
					<ReactTable
						filterable
						getTdProps={(state, rowInfo, column, instance) => {
							return {
								onClick: (e, handleOriginal) => {
									this.selectItem(rowInfo.original)
								}
							}
						}}
						data={this.state.errorList}
						columns={columns}
					/>
				</div>
			</div>
		)
	}
}

export default Home
