import React, {Component} from 'react';
import {Button, List} from 'antd-mobile'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			teams: [
				'草帽',
				'红发',
				'白胡子',
			]
		}
	}
	
	addTeam = () => {
		const {teams} = this.state
		let newName = '新人' + Math.random().toFixed(4)
		this.setState({
			teams: [...teams, newName]
		})
	}
	
	render() {
		const {teams} = this.state
		return (
			<div>
				<h2>海贼王</h2>
				<List
					renderHeader={() => {
					
					}}
				>
					{teams.map(v => {
						return (
							<List className="Item" key={v}>
								<Hat name={v}/>
							</List>
						)
					})}
				</List>
				<Button type='primary' onClick={this.addTeam}>添加海贼团</Button>
			</div>
		)
	}
}

class Hat extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const {name} = this.props
		return <h2>{name}海贼团</h2>
	}
}

export default App
