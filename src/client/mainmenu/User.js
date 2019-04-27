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
		// prettier-ignore
		const signed = `Current User: ${this.props.userData.lname}, ${this.props.userData.fname}`

		return (
			<>
				<p className='text'>{signed}</p>
				<Button
					id='sign out'
					className='submit'
					value='Sign Out'
					onClick={this.props.signOut}
				/>
			</>
		)
	}
}

export default User
