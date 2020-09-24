import React, { Component } from 'react';
import './App.css';
import cr from './imgs/circle-red.png';
import cb from './imgs/shape-1.png';
import tr from './imgs/triangle-red.png';
import sp from './imgs/shape-1.png';
import tb from './imgs/triangle-blue.png';

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
					<span className = "image-cp"><img src = {sp} /></span>
					<span className = "image-tr"><img src = {tr} /></span>
					<span className = "image-tb"><img src = {tb} /></span>
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
					<img className = "image-clb" src = {cb}/>
				</div>
				<div>
				<p className ="name-outline">Divyansh</p>
				</div>
			</div>
		);
	}
}

export default App;
