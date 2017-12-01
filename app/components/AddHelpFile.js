import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import HelpFileData from '../data/HelpFileData'

var fs = require('fs');

class AddHelpFile extends Component {
   constructor(props) {
   		super(props);
   		this.state = {
   			name: '',
   			menu: '',
   			title: '',
   			path: '',
   			image: '',
   			content: ''
   		};
   }

   handleChange(e)  {
   		let target = e.target;
   		let value = target.type === 'checkbox' ? target.checked : target.value;
   		let name = target.name
   		this.setState({
   			[name]: value
   		});
   }

   handleSubmit(e) {
   		let newFile = { 
   			name: '', 
   			menu: '', 
   			title: '', 
   			image: '',
   			path: '', 
   			content: '', 
   			section: 'Section IV', 
   			video: 'n' 
   		}

   		let dialogName = this.state.title;
   		dialogName = dialogName.toLowerCase().replace(/\s+/g, '');
   		// cap the first letter in the name and add the rest of the name 
   		dialogName = dialogName.charAt(0).toUpperCase() + dialogName.substr(1);

   		// creat the new json object help file
   		newFile.name = dialogName;

   		if (this.state.image === '') {
			   newFile.image = "./app/img/hlpDefault.png"
   		} else {
   			let imgName = "./app/img/"+this.state.image;
   			newFile.image = imgName;
   		}
		
   		newFile.menu = this.state.menu;
   		newFile.title = this.state.title;
   		newFile.path = this.state.path;
   		newFile.content = this.state.content;
   		//console.log(newFile);

  		   // open the json data file
   		let dataJson = fs.readFileSync('./app/data/HelpFileData.json');
   		let dataHlpFiles = JSON.parse(dataJson);
   		console.log(dataHlpFiles);
   		dataHlpFiles.push(newFile);

   		// write out the update json data
   		let dataUpdated = JSON.stringify(dataHlpFiles, null, 2);
   		fs.writeFile('./app/data/HelpFileData.json', dataUpdated, finished);
   		function finished(Err) {
   			console.log('saved correctly');
   		}
   	    //e.preventDefault();
   } 

	render() {
		return (
			<div>
			    <form onSubmit={this.handleSubmit.bind(this)}>
			    	<label><b>TITLE:</b></label><br />
			    		<input className="inputHlp" type="text" name="title" placeholder="Load Default Values" value={this.state.title} onChange={this.handleChange.bind(this)} />
			    	<br /><br />
			    	<label><b>MENU SELECT:</b></label>< br/>
			    		<select className="txtSelect" name="menu" value={this.state.menu} onChange={this.handleChange.bind(this)}>
			    			<option value="MainMenu">Main Menu</option>
			    			<option value="FileOptions">File Options</option>
			    			<option value="SetUpOptions">Setup Options</option>
			    			<option value="StartUpOptions">Startup Options</option>
			    			<option value="RunTimeOptions">Runtime Options</option>
			    			<option value="ScannerSetup">Scanner Setup</option>
			    			<option value="ShiftSetUp">Shift Setup</option>
			    			<option value="ViewReportOptions">View Reports Options</option>
			    			<option value="TroubleShootingOptions">Troubleshooting Options</option>
			    		</select>
			    	<br /><br />
			    	<label><b>PATH:</b></label><br />
			    		<input className="inputHlp" type="text" name="path" placeholder="Setup / Runtime / Etc" value={this.state.path} onChange={this.handleChange.bind(this)} />
			    	<br /><br />
			    	<label><b>IMAGE:</b></label><br />
			    		<input className="inputHlp" type="text" name="image" placeholder="Place IMG into ./app/img folder and type the name here ex. hlpLoadDefault.png" value={this.state.image} onChange={this.handleChange.bind(this)} />
			    	<br /><br />
			    	<label><b>CONTENT:</b></label><br />
			    		<textarea className="txtInput" name="content" value={this.state.content} onChange={this.handleChange.bind(this)} />
			    	<br /><br />
			    	<input className="subBtn" type="submit" value="Submit" />
			    </form>
			</div>
		)
	}
}

AddHelpFile.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

AddHelpFile.defaultProps = {
	data: HelpFileData
}

export default AddHelpFile;