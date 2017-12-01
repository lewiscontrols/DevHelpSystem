import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import HelpFileData from '../data/HelpFileData'

var fs = require('fs');
const imgPath = './app/img/';

const upperStyle = {
   textTransform: 'uppercase'
};

class EditHelpFile extends Component {
   constructor(props) {
   		super(props);
   		this.state = {
            diaToFind: '',
            menu: '',
            title: '',
            path: '',
            image: '',
            phContent: '',
            phTitle: '',
            phPath: '',
            phImage: '',
            phContent: ''

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
         e.preventDefault();
         let dialogName = this.state.title;
         dialogName = dialogName.toLowerCase().replace(/\s+/g, '');
         // cap the first letter in the name and add the rest of the name 
         dialogName = dialogName.charAt(0).toUpperCase() + dialogName.substr(1);

         // open the json data file
         let dataJson = fs.readFileSync('./app/data/HelpFileData.json');
         let dataHlpFiles = JSON.parse(dataJson);

         let newMenu = this.state.menu;
         let newTitle = this.state.title;
         let newPath = this.state.path;
         let newContent = this.state.content;
         let newImage = this.state.image

         dataHlpFiles.some(function(obj) {
            if(obj.name === dialogName){
               if (newImage !== '') {
                  obj.image = newImage;
               }
               obj.title = newTitle;
               obj.path = newPath;
               obj.content = newContent;
               obj.menu = newMenu;
               return true;
            }
         });

         function compare(a,b) {
            if (a.menu < b.menu)
               return -1;
            if (a.menu > b.menu)
               return 1;
            return 0;
         }

         dataHlpFiles.sort(compare);

         let dataUpdated = JSON.stringify(dataHlpFiles, null, 2);
         fs.writeFile('./app/data/HelpFileData.json', dataUpdated, finished);
         function finished(Err) {
            console.log('saved correctly');
         }
   } 

	render() {

      const getRawHTML = html => ({
         __html: html
      });

      const renderOutFile = this.props.data.filter(obj => {
         return this.state.diaToFind === obj.title;
         }).map((obj, idx) => {
            this.state.phTitle = obj.title;
            this.state.phImage = obj.image;
            this.state.phPath = obj.path;
            this.state.phContent = obj.content;
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

        const renderOutHTML = this.props.data.filter(obj => {
         return this.state.diaToFind === obj.title;
         }).map((obj, idx) => {
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <h2 style={upperStyle}> {obj.title} </h2>
                     <b>Path:</b> {obj.path} <br /><br />
                     <div>{obj.content}</div>
                     <br />
                  </div>
               </div>
            );
         });

		return (
			<div>
         <label><b>SEARCH BY DIALOG TITLE</b></label><br />
                  <input className="inputHlp" type="text" name="diaToFind" placeholder="Type Dialog Title Here - It will appear below if found" value={this.state.diaToFind} onChange={this.handleChange.bind(this)} />
         <br /><br />
             <form onSubmit={this.handleSubmit.bind(this)}>
               <label><b>TITLE (NOTE THIS FIELD MUST BE FILLED OUT TO UPDATE):</b></label><br />
                  <input className="inputHlp" type="text" name="title" placeholder={this.state.phTitle} value={this.state.title} onChange={this.handleChange.bind(this)} />
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
                  <input className="inputHlp" type="text" name="path" placeholder={this.state.phPath} value={this.state.path} onChange={this.handleChange.bind(this)} />
               <br /><br />
               <label><b>IMAGE:</b></label><br />
                  <input className="inputHlp" type="text" name="image" placeholder={this.state.phImage} value={this.state.image} onChange={this.handleChange.bind(this)} />
               <br /><br />
               <label><b>CONTENT:</b></label><br />
                  <textarea className="txtInput" name="content" placeholder={this.state.phContent} value={this.state.content} onChange={this.handleChange.bind(this)} />
               <br /><br />
               <input className="subBtn" type="submit" value="UPDATE" />
             </form><br />
             <h3>VIEW OF HELP FILE</h3><br />
             {renderOutFile}
             <h3>VIEW OF HTML</h3><br />
             {renderOutHTML}
			</div>
		)
	}
}

EditHelpFile.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

EditHelpFile.defaultProps = {
	data: HelpFileData
}

export default EditHelpFile;