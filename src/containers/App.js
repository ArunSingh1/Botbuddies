import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchbarComponent from '../components/SearchbarComponent'
// import { robots } from './robots'
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfeild: ''
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

onSearchChange = (event) => {
	this.setState({searchfeild: event.target.value})
	
}

render() {
	const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());		
	})
	return (
		<div className = 'tc'> 
			<h1 className = 'f1'> BotBuddies </h1>
			<SearchbarComponent searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots = {filteredRobots} />
			</Scroll>
		</div>

		);
	}

}


export default App;