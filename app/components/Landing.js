import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import Header from './Header'
import Menu from './Menu'
import HelpFile from './HelpFile'
import electron, { remote } from 'electron'
import HelpFileData from '../data/HelpFileData'


class Landing extends Component {
	constructor(props) {
	     super(props);
	     this.state = { 
			 helpFileName: 'Mainmenu',
			 menuName: 'MainMenu'
		 }
	   }

	componentWillMount() {
		let hlpString = require('electron').remote.getGlobal('sharedObject').hlpOne;
		let tstFile = '';

		if (hlpString != null && hlpString != '.')
		{
			hlpString = hlpString.toLowerCase().replace(/\s+/g, '');
			hlpString = hlpString.charAt(0).toUpperCase() + hlpString.substr(1);

			let menuToOpen = this.props.data.filter(obj => {
			return hlpString === obj.name;
			}).map((obj, idx) => {
				tstFile = obj.menu;
				return (
					<div key={idx}>
					  {obj.menu}
					 </div>
					);
			});

			this.setState({
				helpFileName:  hlpString,
				menuName: tstFile
			});
		}
	}
	   
    handleHelpChange(helpFileName) {
     	this.setState( {helpFileName} );
    }
	
	handleMenuClick(menuName) {
		this.setState( {menuName} );
	}

	handleMenuChange(menuName) {
		this.setState( {menuName: ''} );
	}
	
	render() {	
		return (
			<div>
				<div>
					<Header />
				</div>
				<br /><br />
				<div className="mainMenuDiv">
					<Menu handleHelpChange={this.handleHelpChange.bind(this)} menuName={this.state.menuName} handleMenuChange={this.handleMenuChange.bind(this)} />
				</div>
				<div className="mainContainerDiv">
					<HelpFile name={this.state.helpFileName} />
				</div>
			</div>
		
		)
	}
}

Landing.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

Landing.defaultProps = {
	data: HelpFileData
}

export default Landing;