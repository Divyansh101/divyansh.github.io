import React, { Component } from 'react';
import './App.css';
import cr from './imgs/circle-red.png';
import cb from './imgs/shape-1.png';
import tr from './imgs/triangle-red.png';
import sp from './imgs/shape-1.png';
import tb from './imgs/triangle-blue.png';
import {Spring, Transition} from 'react-spring/renderprops';

class App extends Component  {

	componentDidMount = () => {
		setTimeout(() => { this.setState({intro: false}) }, 1300);
	}


	state = {
		intro : true
	}

	render() {
		
		let intro = null;
		if(this.state.intro) {
				intro = (
					<div>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}>
							{props => <div style={props}><p className = "intro">Please Wait</p></div>}
						</Spring>
						<Spring
							from={{ number: 0 }}
							to={{ number: 1 }}
							duration = {2000}>
							{props => <div className = "intro1">{Math.floor(props.number*100)}%</div>}
						</Spring>
					</div>
				);
		} else {
			intro = (
				<div className = "main">
					<div className = "back">
						<p className = "backTextUp">DEVE</p>
						<p className = "backTextDown">LOP</p>
					</div>
					<div className = "greet">
						<p className = "paragraph">Hello <span className = "image-cr" ><img src = {cr} alt = "cr" /></span><br />I am<br /><span className = "name">Divyansh </span></p>
						<span className = "image-cp"><img src = {sp} alt = "sp" /></span>
						<span className = "image-tr"><img src = {tr} alt = "tr" /></span>
						<span className = "image-tb"><img src = {tb} alt = "tb" /></span>
					</div>
					<div className = "pointsOuter">
						<div className = "points">
							<div>Designer</div>
							<div> App Deveoper</div>
							<div>Full-stack Web Developer</div>	
						</div>
					</div>
					<div className = "reachOuter">
						<div className = "reach">
							<p>MAIL<span className = "tab"></span>PHONE<span className = "tab"></span>FACEBOOK<span className = "tab"></span>LINKEDIN</p>
						</div>
					</div>
					<div>
						<img className = "image-cb" src = {cb} alt = "cb" />
						<img className = "image-clb" src = {cb} alt = "cb" />
					</div>
					<div>
					<p className ="name-outline">Divyansh</p>
					</div>
				</div>
			)
		}

		return (
			<div>
				{intro}
			</div>
			
		);
	}
}

export default App;
