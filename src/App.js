import React, { Component } from 'react';
import './App.css';
import {Spring, animated} from 'react-spring/renderprops';
import back from './imgs/abc.png';

class App extends Component  {

	componentDidMount = () => {
		setTimeout(() => { this.setState({intro: false}) }, 1300);
	}


	state = {
		show: true,
		intro : true,
		mailSecondValue: "khatri.divyansh98@gmail.com",
		phoneSecondValue: "+917838774275",
		facebookSecondValue: "https://www.facebook.com/divyansh43/",
		linkedinSecondValue: "https://www.linkedin.com/in/divyansh-khatri",

	}

	onClickFacebook = () => {
		navigator.clipboard.writeText(this.state.facebookSecondValue);
		console.log("Facebook");
		return (
			<Spring native from={{opacity: 0}} to={{opacity: 1}}>
				{props => <animated.div style={props} className = "intro">hello</animated.div>}
			</Spring>
		)
	}	
		
	onClickLinkedin = () => {
		navigator.clipboard.writeText(this.state.linkedinSecondValue);
		console.log("Linked In");
	}
	
	
	onClickMail = () => {
		navigator.clipboard.writeText(this.state.mailSecondValue);
		console.log("Mail");
	}
	
	
	onClickPhone = () => {
		navigator.clipboard.writeText(this.state.phoneSecondValue);
		console.log("Phone");
	}

	render() {

		
		let intro = null;
		if(this.state.intro) {
				intro = (
					<div className = "overflow">
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
				<div className = "page-wrap">
					{/* <img src = {back} className = "back" /> */}
					<div className = "main-content">
						<div className = "reach">
							<p>
								<span onClick = {this.onClickMail}>MAIL</span>
								<span className = "tab"></span>
								<span onClick = {this.onClickPhone}>PHONE</span>
								<span className = "tab"></span>
								<span onClick = {this.onClickFacebook}>FACEBOOK</span>
								<span className = "tab"></span>
								<span onClick = {this.onClickLinkedin}>LINKEDIN</span>
							</p>
						</div>
						<div className = "back">
							<div className = "backTexts">
								<p className = "backTextUp">DEVE</p>
								<p className = "backTextDown">LOP</p>
							</div>
						</div>
						<div className = "pointsOuter">
							<div className = "points">
								<div>Designer</div>
								<div>App Deveoper</div>
								<div>Full-stack Web Developer</div>	
							</div>
						</div>
						<div className = 'out-para'>
							<div className = "paragraph">
								<p className = "innerText" >Hello<span className = "image-cr" >.</span><br />I am<br /><span className = "name">Divyansh </span></p>	
							</div>
						</div>
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
