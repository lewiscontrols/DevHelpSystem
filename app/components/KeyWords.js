import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import KeyWordsData from '../data/KeyWordsData'

var fs = require('fs');
//var fsTwo = require('fs');

const imgPath = './app/img/';

const upperStyle = {
   textTransform: 'uppercase'
};

class KeyWords extends Component {
   constructor(props) {
   		super(props);
   		this.state = {
            keyToFind: '',
            name: '',
            content: '',
            phName: '',
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
         let dialogName = this.state.keyToFind;
         //dialogName = dialogName.toLowerCase().replace(/\s+/g, '');
         // cap the first letter in the name and add the rest of the name 
         //dialogName = dialogName.charAt(0).toUpperCase() + dialogName.substr(1);

         // open the json data file
         let dataJson = fs.readFileSync('./app/data/KeyWordsData.json');
         let dataHlpFiles = JSON.parse(dataJson);

         let newContent = this.state.content;

         dataHlpFiles.some(function(obj) {
            if(obj.name === dialogName){
               obj.content = newContent;
               return true;
            }
         });

         let dataUpdated = JSON.stringify(dataHlpFiles, null, 2);
         fs.writeFile('./app/data/KeyWordsData.json', dataUpdated, finished);
         function finished(Err) {
            console.log('saved correctly');
         }
   } 

	render() {

      const getRawHTML = html => ({
         __html: html
      });

      const renderOutFile = this.props.data.filter(obj => {
         return this.state.keyToFind === obj.name;
         }).map((obj, idx) => {
            this.state.phName = obj.name;
            this.state.phContent = obj.content;
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <h2 style={upperStyle}> {obj.name} </h2>
                     <div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
                     <br />
                  </div>
               </div>
            );
         });

       const renderOutHTML = this.props.data.filter(obj => {
         return this.state.keyToFind === obj.name;
         }).map((obj, idx) => {
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <h2 style={upperStyle}> {obj.name} </h2>
                     <div>{obj.content}</div>
                     <br />
                  </div>
               </div>
            );
         });

		return (
			<div>
         <label><b>SEARCH BY KEYWORD TO EDIT</b></label><br />
                  <input className="inputHlp" type="text" name="keyToFind" placeholder="Ex. Section One or Safety" value={this.state.keyToFind} onChange={this.handleChange.bind(this)} />
         <br /><br />
             <form onSubmit={this.handleSubmit.bind(this)}>
               <label><b>CONTENT:</b></label><br />
                  <textarea className="txtInput" name="content" placeholder={this.state.phContent} value={this.state.content} onChange={this.handleChange.bind(this)} />
               <br /><br />
               <input className="subBtn" type="submit" value="UPDATE" />
             </form><br />
             <h3>VIEW OF CONTENT</h3><br />
             {renderOutFile}

             <h3>VIEW OF CONTENT W/HTML</h3><br />
             {renderOutHTML}
			</div>
		)
	}
}

KeyWords.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

KeyWords.defaultProps = {
	data: KeyWordsData
}

export default KeyWords;