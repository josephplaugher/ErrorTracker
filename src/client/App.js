import React from 'react'
import { FormClass, Input, Button } from 'reactform-appco'
import SetUrl from 'Util/SetUrl'
import ValRules from 'Util/ValRules'
import EB from 'Util/EB'
import checkLoginState from 'Util/CheckLoginState'
import Home from './mainmenu/Home'
import Logo from './logo.png'

import 'css/main.scss'
import 'css/logo.scss'
import 'css/form.scss'
import 'css/userNotify.scss'

class AppreciateCo extends FormClass {
	constructor(props) {
		super(props)
		this.useLiveSearch = false
		this.route = '/login'
		this.valRules = ValRules
		this.state = {
			error: null,
			isLoggedIn: false,
			userData: {},
			email: '',
			password: ''
		}
		this.setLoginState = this.setLoginState.bind(this)
		this.response = this.response.bind(this)
		this.signOut = this.signOut.bind(this)
		this.setLoginState()
	}

	setLoginState = () => {
		let auth = checkLoginState()
		auth.then((res) => {
			if (res.isLoggedIn === true) {
				this.setState({
					isLoggedIn: res.isLoggedIn,
					userData: res.userData
				})
			} else {
				this.setState({
					isLoggedIn: false,
					userData: {}
				})
			}
		})
	}

	response = (res) => {
		if (typeof res.data.userData !== 'undefined') {
			sessionStorage.setItem(
				process.env.USER_DATA_LABEL,
				JSON.stringify(res.data.userData)
			)
			sessionStorage.setItem(process.env.TOKEN_NAME, res.data.token)
			this.setState({
				userNotify: res.data.userNotify,
				userData: res.data.userData,
				isLoggedIn: true
			})
		}
		if (typeof res.error !== 'undefined') {
			console.error('submit error: ', res.error)
		}
	}

	signOut() {
		sessionStorage.removeItem(process.env.USER_DATA_LABEL)
		sessionStorage.removeItem(process.env.TOKEN_NAME)
		this.setState({
			isLoggedIn: false,
			userData: {}
		})
		Ajax.get(SetUrl() + '/user/logout')
	}

	render() {
		return (
			<>
				<div id='container'>
					{this.state.isLoggedIn ? (
						<EB comp='Home'>
							<Home userData={this.state.userData} signOut={this.signOut} />
						</EB>
					) : (
						<div id='sign-in'>
							<div id='logo-box'>
								<img src={Logo} alt='Appreciate Logo' />
							</div>
							<p className='formTitle'>Sign In</p>
							{/* prettier-ignore */}
							<form onSubmit={this.rfa_onSubmit} >
                  <Input name="email" label="Email" value={this.state.email} onChange={this.rfa_onChange} autoComplete={true}/>
                  <Input name="password" label="Password" value={this.state.password} onChange={this.rfa_onChange} />
                  <div className="rfa_button-div">
                    <Button id="submit" value="Sign In" />
                  </div>
									<p className="error-msg"> {this.state.userData.error}</p>
              </form>
						</div>
					)}
				</div>
			</>
		)
	}
}

export default AppreciateCo
