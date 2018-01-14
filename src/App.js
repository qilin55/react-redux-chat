import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addGun, minusGun, addGunAsync} from './index.redux'

@connect(
	state=>({num:state.counter}),
	{addGun, minusGun, addGunAsync}
)
class App extends Component {
	render() {
		const {num, addGun, minusGun, addGunAsync} = this.props
		return (
			<div>
				<h1>现在有{num}把枪</h1>
				<button onClick={addGun}>申请武器</button>
				<button onClick={minusGun}>上交武器</button>
				<button onClick={addGunAsync}>拖两天</button>
			</div>
		)
	}
}
export default App