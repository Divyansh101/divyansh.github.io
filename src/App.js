import React, { Component } from 'react';
import Light from './mode/Light.js';
import Dark from './mode/Dark.js';

class App extends React.Component  {

	constructor(props){
		super(props);
		this.state = {
			theme: true	
		};
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
			<div>
				<button onClick = {this.switchColors} className = "button" />
				{this.state.theme ? <Dark /> : <Light />}
			</div>
			
		);
	}
}

export default App;
