import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import HelpFileData from '../data/HelpFileData'

var fs = require('fs');
const imgPath = './app/img/';

const upperStyle = {
   textTransform: 'uppercase'
};

class DeleteHelpFile extends Component {
   constructor(props) {
   		super(props);
   		this.state = {
   			title: ''
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
   		let dialogName = this.state.title;
   		dialogName = dialogName.toLowerCase().replace(/\s+/g, '');
   		// cap the first letter in the name and add the rest of the name 
   		dialogName = dialogName.charAt(0).toUpperCase() + dialogName.substr(1);

  	   	// open the json data file
   		let dataJson = fs.readFileSync('./app/data/HelpFileData.json');
   		let tempData = JSON.parse(dataJson);

         // delete the dialog 
         tempData = tempData.filter(obj => {
            return dialogName !== obj.name;
         });

   		// write out the update json data
   		tempData = JSON.stringify(tempData, null, 2);
   		fs.writeFile('./app/data/HelpFileData.json', tempData, finished);
   		function finished(Err) {
   			console.log('deleted:' + dialogName);
   		}
   	   //e.preventDefault();
   } 

	render() {

      const getRawHTML = html => ({
         __html: html
      });

      const renderOutFile = this.props.data.filter(obj => {
         return this.state.title === obj.title;
         }).map((obj, idx) => {
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <h2 style={upperStyle}> {obj.title} </h2>
                     <b>Path:</b> {obj.path} <br /><br />
                     <div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
                     <br />
                  </div>
               </div>
            );
         });

		return (
			<div>
			    <form onSubmit={this.handleSubmit.bind(this)}>
			    	<label><b>Dialog Title to Delete:</b></label><br />
			    		<input className="inputHlp" type="text" name="title" placeholder="Type Dialog Title Here - It will appear below if found" value={this.state.title} onChange={this.handleChange.bind(this)} />
			    	<br /><br />
			    	<input className="subBtn" type="submit" value="DELETE" />
			    </form>
             {renderOutFile}
			</div>
		)
	}
}

DeleteHelpFile.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

DeleteHelpFile.defaultProps = {
	data: HelpFileData
}

export default DeleteHelpFile;