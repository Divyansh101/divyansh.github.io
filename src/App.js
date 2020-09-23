import React, { Component } from 'react';
import './App.css';
import cr from './imgs/circle-red.png';
import cb from './imgs/shape-1.png';
class App extends Component  {


	state = {
		typed : false
	}

	render() {

		return (

			<div className = "main">
				<div className = "back">
					<p className = "backTextUp">DEVE</p>
					<p className = "backTextDown">LOP</p>
				</div>
				<div className = "greet">
					<p className = "paragraph">Hello <span className = "image-cr" ><img src = {cr}/></span><br />I am<br /><div className = "name">Divyansh </div></p>
				</div>
				<div className = "pointsOuter">
					<p className = "points">
						<div>Designer</div>
						<div> App Deveoper</div>
						<div>Full-stack Web Developer</div>	
					</p>
				</div>
				<div className = "reachOuter">
					<p className = "reach">
						<div>MAIL<span className = "tab"></span>PHONE<span className = "tab"></span>FACEBOOK<span className = "tab"></span>LINKEDIN</div>
					</p>
				</div>
				<div>
					<img className = "image-cb" src = {cb}/>
				</div>
			</div>
		);
	}
}

export default App;
