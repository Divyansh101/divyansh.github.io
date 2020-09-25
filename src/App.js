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
		intro : true,
		mail : false,
		phone: false,
		facebook: false,
		linkedin: false,
		mailMain: "MAIL",
		mailValue: "MAIL",
		view: "VIEW",
		mailSecondValue: "khatri.divyansh98@gmail.com",
		phoneMain: "PHONE",
		phoneValue: "PHONE",
		phoneSecondValue: "+917839774275",
		facebookMain: "FACEBOOK",
		facebookValue: "FACEBOOK",
		facebookSecondValue: "https://www.facebook.com/divyansh43/",
		linkedinMain: "LINKEDIN",
		linkedinValue: "LINKEDIN",
		linkedinSecondValue: "https://www.linkedin.com/in/divyansh-khatri",

	}

	onClickFacebook = () => {
		console.log("Facebook");
		if(!this.state.facebook){
			this.setState({facebook: true});
			let view = this.state.facebookSecondValue;
			this.setState({faceBookMain: view});
			console.log(this.state.facebookMain);
		}
	}	
		
	onClickLinkedin = () => {
		this.setState({linkedin: true});
		console.log("Linked In");
	}
	
	
	onClickMail = () => {
		
		this.setState({mail: true});
		console.log("Mail");
		// this.set
	}
	
	
	onClickPhone = () => {
		this.setState({phone: true});
		console.log("Phone");
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
							<div>App Deveoper</div>
							<div>Full-stack Web Developer</div>	
						</div>
					</div>
					<div className = "reachOuter">
						<div className = "reach">
							<p>
								<span onClick = {this.onClickMail}>{this.state.mailMain}</span>
								<span className = "tab"></span>
								<span onClick = {this.onClickPhone}>{this.state.phoneMain}</span>
								<span className = "tab"></span>
								<span onClick = {this.onClickFacebook}>{this.state.facebookMain}</span>
								<span className = "tab"></span>
								<span onClick = {this.onClickLinkedin}>{this.state.linkedin === false ? this.state.linkedinValue : this.state.linkedinSecondValue}</span>
							</p>
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
