import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import PDFData from '../data/PDFData'
import HelpFileData from '../data/HelpFileData'

var fs = require('fs');
//var fsTwo = require('fs');

const imgPath = './app/img/';

const upperStyle = {
   textTransform: 'uppercase'
};

class EditPDF extends Component {
   constructor(props) {
   		super(props);
   		this.state = {
            diaToFind: '',
            name: '',
            section: '',
            content: '',
            phName: '',
            phSection: '',
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
         //e.preventDefault();
         let dialogName = this.state.diaToFind;
         //dialogName = dialogName.toLowerCase().replace(/\s+/g, '');
         // cap the first letter in the name and add the rest of the name 
         //dialogName = dialogName.charAt(0).toUpperCase() + dialogName.substr(1);

         // open the json data file
         let dataJson = fs.readFileSync('./app/data/PDFData.json');
         let dataHlpFiles = JSON.parse(dataJson);

         let newContent = this.state.content;

         dataHlpFiles.some(function(obj) {
            if(obj.name === dialogName){
               obj.content = newContent;
               return true;
            }
         });

         let dataUpdated = JSON.stringify(dataHlpFiles, null, 2);
         fs.writeFile('./app/data/PDFData.json', dataUpdated, finished);
         function finished(Err) {
            console.log('saved correctly');
         }
   } 

	render() {

      const getRawHTML = html => ({
         __html: html
      });

      const renderOutFile = this.props.data.filter(obj => {
         return this.state.diaToFind === obj.name;
         }).map((obj, idx) => {
            this.state.phName = obj.name;
            this.state.phSection = obj.section;
            this.state.phContent = obj.content;
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <h2 style={upperStyle}> {obj.name} </h2>
                     <b>Section:</b> {obj.section} <br /><br />
                     <div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
                     <br />
                  </div>
               </div>
            );
         });

       const renderOutHTML = this.props.data.filter(obj => {
         return this.state.diaToFind === obj.name;
         }).map((obj, idx) => {
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <h2 style={upperStyle}> {obj.name} </h2>
                     <b>Section:</b> {obj.section} <br /><br />
                     <div>{obj.content}</div>
                     <br />
                  </div>
               </div>
            );
         });

		return (
			<div>
         <label><b>SEARCH BY SECTION TITLE</b></label><br />
                  <input className="inputHlp" type="text" name="diaToFind" placeholder="Ex. Section One or Safety" value={this.state.diaToFind} onChange={this.handleChange.bind(this)} />
         <br /><br />
             <form onSubmit={this.handleSubmit.bind(this)}>
               <label><b>CONTENT:</b></label><br />
                  <textarea className="txtInput" name="content" placeholder={this.state.phContent} value={this.state.content} onChange={this.handleChange.bind(this)} />
               <br /><br />
               <input className="subBtn" type="submit" value="UPDATE" />
             </form><br />
             <h3>VIEW OF SECTION</h3><br />
             {renderOutFile}

             <h3>VIEW OF SECITON W/HTML</h3><br />
             {renderOutHTML}
			</div>
		)
	}
}

EditPDF.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

EditPDF.defaultProps = {
	data: PDFData
}

export default EditPDF;