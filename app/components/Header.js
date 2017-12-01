import React, { Component } from 'react'
import sass from '../scss/application.scss'
import electron, { remote } from 'electron'


const imgPath = './app/img/';
const logoImg = './app/img/lcLogo.PNG';

class Header extends Component {
   
    closeApp() {
       var window = remote.getCurrentWindow();
       window.close();
    }

	render() {
		return (
			<div className="headDiv">
				<img className="headerLogo" src={`${imgPath}lcLogo.PNG`}/> <p className="rdyScan"><i>READYSCAN SYSTEM</i>  <button className="closeAllBtnHeader" onClick={this.closeApp}>EXIT</button></p>
			</div>
		)
	}
}


export default Header;