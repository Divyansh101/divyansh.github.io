import React, { Component } from 'react';
import Light from './mode/Light.js';
import Dark from './mode/Dark.js';
import sun from './imgs/sun.png';
import moon from './imgs/moon.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component  {

	state = {
		theme: true
	}

	componentDidMount = () => {
		console.log("Starting : " + this.state.theme);
	}

	switchColors = () => {
		this.setState({theme: !this.state.theme});
		console.log(this.state.theme);
	}

	render() {

		// let toggle = this.state.theme ? <Dark /> : <Light />;

		return (

			<div className = "mainDiv">
				{this.state.theme ? <Dark className = "theme"/> : <Light className = "theme" />}
			</div>
			
		);
	}
}

export default App;
