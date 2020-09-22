import React, { Component } from 'react';
import './App.css';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

class App extends Component  {


	state = {
		typed : false
	}

	render() {

		let button = null;	
		if(this.state.typed) {
			button = (<span className = "dot"></span>)
		} else {
			button = null;
		}

		return (
			<div className = "main">
				<div>
					<ul>
					<li><a className = "active" href="#home">Home</a></li>
					<li><a href="#news">News</a></li>
					<li><a href="#contact">Contact</a></li>
					<li><a href="#about">About</a></li>
					</ul>
				</div>
				<div className = "back">
					<p className = "backTextUp">Web</p>
					<p className = "backTextDown">Developer</p>
				</div>
				<div className = "App">
					<div className = "paradiv">
					<Typewriter
						className = "paragraph"
						string='Hello'
						delay={100}
						onComplete =  {() =>{this.setState({typed : true})}}
					/>
					{button}
					</div>

					{/* <div>
					<p className="paragraph" >I am</p>
					
					</div>
					<div>
					<p className="paragraph" >Divyansh</p>

					</div>  */}
					
				</div>

			</div>
		);
	}
}

export default App;
