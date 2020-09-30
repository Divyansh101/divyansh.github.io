import React, { Component } from 'react';
import './Light.css';
import {Spring, animated} from 'react-spring/renderprops';
import back1 from '../imgs/abc1.png';
import moon from '../imgs/moon.png';
import Dark from './Dark';

class Light extends Component  {

	componentDidMount = () => {
		setTimeout(() => { this.setState({intro: false}) }, 1300);
	}


	state = {
		intro1: null,
		show: true,
		intro : true,
		mailSecondValue: "khatri.divyansh98@gmail.com",
		phoneSecondValue: "+917838774275",
		facebookSecondValue: "https://www.facebook.com/divyansh43/",
		linkedinSecondValue: "https://www.linkedin.com/in/divyansh-khatri",
		bgColor: '#1a1a1a',
	}


	onClickFacebook = () => {
		navigator.clipboard.writeText(this.state.facebookSecondValue);
		console.log("Facebook");
		return (
			<Spring native from={{opacity: 0}} to={{opacity: 1}}>
				{props => <animated.div style={props} className="intro">hello</animated.div>}
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

	switchColors = () => {
		// console.log("pressed");
		localStorage.setItem("theme", true);
		this.setState({intro1: <Dark />})
	}

	render() {

		
		let intro = null;
		if(this.state.intro) {
				intro = (
					<div className= "overflow">
                        <div className="intro">
                            <Spring
                                from={{ opacity: 0 }}
                                to={{ opacity: 1 }}>
                                {props => <div style={props}><p>Please Wait</p></div>}
                            </Spring>
                        </div>
						<div className= "intro1">
                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 1 }}
                                duration = {2000}>
                                {props => <div>{Math.floor(props.number*100)}%</div>}
                            </Spring>
                        </div>
					</div>
				);
		} else {
			intro = (
				<Spring
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}>
					{props =>
						<div style = {props} className="page-wrap">
                            <div className="bg">
                            </div>
							<img src = {back1} className="back" alt = "shapes" />

							<div className="main-content">

								<img onClick = {this.switchColors} src= {moon} className = "theme" alt = "theme"/>
								{/* <button className="button" onClick = {this.onButtonPress}/> */}
								<div className="made">Made with <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABFklEQVQ4jcWPvUoDQRRGz927SARbfQUt1T6gAbG0mn7BylbEwgew8B30BcYsgTRWPoAW2giChkhABBEhlUV2dizM/rCJslv5NTNzZ865d+C/I9nGG7OMc2fALhAC14ic/Fz6U6ADJMAVk8mx9PsfucAbs0iS3CGyWmnwPl1XKvVHVDfF2q8AgDTdnwNnYBUGWCNNDwAywUatD5fj/XohCILPxgJ4KwTO2ab9gctcIL3eDd5fNBCcSxzfFhMAhOEhMKgBD1A9yg65QKwdo9oBRn/Ar6juiLXjGcFUMkJ1C3ieA78gsi3WDsvFoPpKrB2i2kbkvlR+ANrS7T7NvP9tVm/MEs7FwAKqe+Wxa8dHUctHUasx2CTfjkJQ1NseBtMAAAAASUVORK5CYII=" alt = "love" /> and React</div>
								<div className="reach-outer">
								<div className="reach">
									<p>
										<span onClick = {this.onClickMail}>MAIL</span>
										<span className="tab"></span>
										<span onClick = {this.onClickPhone}>PHONE</span>
										<span className="tab"></span>
										<span onClick = {this.onClickFacebook}>FACEBOOK</span>
										<span className="tab"></span>
										<span onClick = {this.onClickFacebook}>INSTAGRAM</span>
										<span className="tab"></span>
										<span onClick = {this.onClickLinkedin}>LINKEDIN</span>
									</p>
								</div>
								
								</div>

									<p className= "backTextUp">DEVE</p>
									<p className="backTextDown">LOP</p>
		
								<div className="pointsOuter">
									<div className= "points">
										<div>Designer</div>
										<div>App Deveoper</div>
										<div>Full-stack Web Developer</div>	
									</div>
								</div>
								<div className= "outPara">
									<div className= "paragraph">
										<p className= "innerText">Hello<span className= "imageCr" >.</span><br />I am<br /><span className="name">Divyansh </span></p>	
									</div>
								</div>
							</div>
					    </div>
					}
				</Spring>
				
			)
		}

		return (
			<div>
				{this.state.intro1 != null ? this.state.intro1 : intro}
			</div>
			
		);
	}
}

export default Light;
