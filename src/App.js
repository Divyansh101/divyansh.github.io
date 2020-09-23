import React, { Component } from 'react';
import './App.css';

class App extends Component  {


	state = {
		typed : false
	}

	render() {

		// let button = null;	
		// if(this.state.typed) {
		// 	button = (<span className = "dot"></span>)
		// } else {
		// 	button = null;
		// }

		return (

			<div className = "main">
				<div className = "back">
					<p className = "backTextUp">DEVE</p>
					<p className = "backTextDown">LOP</p>
				</div>
				<div className = "greet">
					<p className = "paragraph">Hello<br />I am<br /><div className = "name">Divyansh</div></p>
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
						<div>MAIL<span className = "tab"></span>NUMBER<span className = "tab"></span>FACEBOOK<span className = "tab"></span>LINKEDIN</div>
					</p>
				</div>

			</div>
		);
	}
}

export default App;
