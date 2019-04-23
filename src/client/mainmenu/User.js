import React, { Component } from 'react'
import { Button } from 'reactform-appco'
import 'css/form.scss'

class User extends Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null
		}
	}

	render() {
		const signed = `Current User: ${this.props.userData.lname}, ${
			this.props.userData.fname
		}`

		return (
			<div id='user'>
				<p>{signed}</p>
				<Button id='sign out' className='submit' value='Sign Out' />
			</div>
		)
	}
}

export default User
