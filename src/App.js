import React, { Component } from 'react';
import './App.css';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import dp from './imgs/about.jpeg';
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
					<li>
						<div className = "img">
							<img src = {dp} alt = "dp"/>
						</div>
					</li>
					<li>
						<div className = "img">
						<img alt = "home" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPUlEQVRIieWSvUoDQRSFzwQhFsEUdhJSaSE+gAgWkVRBwcrO2kqxtLVJmwfQ1kKsIj6CwSadNlpoZxGjoFaLWfgsMsU4rOtssoKSA1PMnfNz78xIEwOgAnSAS6CSt3kN6AFvdvWAWl7mO8AHcAcsAQvADRADB4AZ1bgEnDLEOVD2zs7sWRuYyWo+D1zbLg+TugQMsG+nuwUWQ803gFfgCagH8OtA32rWQ8gDoAtUgzoa6qpWMwDW0ohXwL173xlCysAD0EkjRUArq7mjbwGRWyt4nKKk91EDrLaYFpA7pkJIwKykbUnTthRJOjHGvOQSIOlC0opX25K0+pMw9IqWJTWNhaRmQuBYAQVJsbOPQ7W//sj/P+ALgGe+x67D20vh9V1P/5s2JG0m1B8lHTv7I0lG0pzHiyW1xxny7+ETq2E2WTTWCnsAAAAASUVORK5CYII="></img>
						</div>
					</li>
					</ul>
				</div>
				<div className = "back">
					<p className = "backTextUp">DEVE</p>
					<p className = "backTextDown">LOP</p>
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
					
				</div>

			</div>
		);
	}
}

export default App;
