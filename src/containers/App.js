import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import Scroll from '../components/Scroll'; //закомментировать
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: robots, //убрать robots и поставить [] .
			searchfield: ''
		}
	}
		//РАЗКОММЕНТИРОВАТЬ
	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({ robots: users }));
	// }

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ?
			<h1 className='tc f1'>Loading</h1> :
			<div className='tc' >
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>

	}

}

export default App;