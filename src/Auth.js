import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import {login, getUserData} from './Auth.redux'

@connect(
	state => state.auth,
	{login, getUserData}
)
class Auth extends Component {
	componentDidMount () {
		this.props.getUserData()
	}
	render() {
		const {user, age} = this.props
		return (
			<div>
				<h2>我的名字是{user},年龄{age}</h2>
				{this.props.isAuth ? <Redirect to='/dashboard'/> : null}
				<h2>你需要登陆</h2>
				<button onClick={this.props.login}>登陆</button>
			</div>
		)
	}
}

export default Auth