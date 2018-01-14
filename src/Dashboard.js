import React,{Component} from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import App from './App'
import {logout} from "./Auth.redux";

function Red() {
	return <h2>红发</h2>
}
function White() {
	return <h2>白胡子</h2>
}

@connect(
	state=>state.auth,
	{logout}
)
class Dashboard extends Component {
	render() {
		const {match} = this.props
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const app = (
			<div>
				{this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
				<ul>
					<li>
						<Link to={`${match.url}/`}>草帽</Link>
					</li>
					<li>
						<Link to={`${match.url}/red`}>红发</Link>
					</li>
					<li>
						<Link to={`${match.url}/white`}>白胡子</Link>
					</li>
				</ul>
				<Route path={`${match.url}/`} exact component={App}></Route>
				<Route path={`${match.url}/red`} component={Red}></Route>
				<Route path={`${match.url}/white`} component={White}></Route>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard