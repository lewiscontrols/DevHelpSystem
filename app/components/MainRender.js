import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import HelpFileData from '../data/HelpFileData'
import PDFData from '../data/PDFData'

const imgPath = './app/img/';

const upperStyle = {
   textTransform: 'uppercase'
};

class MainRender extends Component {
   constructor(props) {
   		super(props);
   		this.state = {
            diaToFind: '',
            secToFind: ''
         };
   }

   handleChange(e)  {
   		let target = e.target;
   		let value = target.type === 'checkbox' ? target.checked : target.value;
   		let name = target.name;
         
         value = value.charAt(0).toUpperCase() + value.substr(1);

   		this.setState({
   			[name]: value
   		});
   }

   handleClick(e) {

         if (this.state.secToFind != '')
         {
            this.setState({
               secToFind: ''
            });
         } else {
            let target = e.target;
            let value = target.type === 'checkbox' ? target.checked : target.value;
            let name = target.name;

            console.log(name);

            this.setState({
               secToFind: name
            });
         }
   }

	render() {

      const getRawHTML = html => ({
         __html: html
      });

      const renderOutFile = this.props.data.filter(obj => {
         return this.state.diaToFind === obj.title;
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

      const renderOutSection = this.props.sectionData.filter(obj => {
         return this.state.secToFind === obj.name;
         }).map((obj, idx) => {
           return (
               <div key={idx} className="fadingDiv">
                  <div className="displayLineBreak">  
                     <div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
                     <br />
                  </div>
               </div>
         );
      });

      const RenderSection = () => {
         return (
            <div className="fadingDiv">
               {renderOutSection}
            </div>
         )
      };

		return (
			<div>
            <h2>ReadyScan II Manual</h2>

            <label><b>Click The Section Below or Search By Keyword</b></label><br />
            <input className="inputSearch" type="text" name="diaToFind" placeholder=":::SEARCH:::   Ex. 'Limits' " value={this.state.diaToFind} onChange={this.handleChange.bind(this)} />
               {renderOutFile}
            <button className="aSectionButton" name="Section One" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION I</button>
               {this.state.secToFind === 'Section One' ? <RenderSection /> : ''} 
            <button className="aSectionButton" name="Section Two" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION II</button>
               {this.state.secToFind === 'Section Two' ? <RenderSection /> : ''} 
            <button className="aSectionButton" name="Section Three" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION III</button>
               {this.state.secToFind === 'Section Three' ? <RenderSection /> : ''} 
            <button className="aSectionButton" name="Section Five" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION V</button>
               {this.state.secToFind === 'Section Five' ? <RenderSection /> : ''} 
            <button className="aSectionButton" name="Section Six" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION VI</button>
               {this.state.secToFind === 'Section Six' ? <RenderSection /> : ''} 
            <button className="aSectionButton" name="Section Seven" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION VII</button>
               {this.state.secToFind === 'Section Seven' ? <RenderSection /> : ''} 
            <button className="aSectionButton" name="Section Eight" value={this.state.secToFind} onClick={this.handleClick.bind(this)}>SECTION VIII</button>
               {this.state.secToFind === 'Section Eight' ? <RenderSection /> : ''} 
            <br /><br />




            <p>
               Lewis Controls system software is configured in a series of menus.  When the system is powered up the MAIN MENU will either appear on the touchscreen or can be called up by double clicking on the icon for the LCI Carriage Menu. <br /> <br />
               The simplest way to access menu items is to use the touch screen.  Touch the button for the menu you want; enter values in the screen; touch Accept to save the values and touch Cancel to return to the menu.  You may also use the up and down arrow keys on the keyboard to highlight an individual menu item.  Pressing the (ENTER) key will pull up the submenu for the highlighted selection.   If a sub menu opens a dialog box, use text and numeric keys to modify entries.  Press the tab to move from entry to entry.  Press (ENTER) to save the values.  Press (ESC) to return to the menu.  You may also use the mouse to select menu items; simply place the mouse pointer over the button and press the left mouse button. <br /> <br />
               The escape key (ESC) will take you back to the previous menu.  For example, if you have just changed the target thickness on 2 inch nominal lumber, pressing the escape (ESC) will bring you to the LUMBER OPTIONS sub menu.  Pressing it again will take you back to the MAIN MENU. <br /><br />
               For your convenience, you may print any of our Carriage Menus or Dialog boxes.  There are several methods of printing a window.  You may press (F12) to print just the current active window.  You may press (Print Screen) to print the entire screen.  These options are also available on the Window Control Menu.  To access the Window Control Menu use the mouse to right-click on the window title bar or press (ALT-SPACEBAR).  From the Window Control Menu, you will see options for Print Window, Print Screen, and may also see an option to Print Entire Listbox.  The Print Entire Listbox option can be used to dump a listing (ex. Setworks History).  This can be very useful when debugging a problem within a system. <br /> <br />
            </p>
			</div>
		)
	}
}

MainRender.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	),
   sectionData: PropTypes.arrayOf(
      PropTypes.object
   )
}

MainRender.defaultProps = {
	data: HelpFileData,
   sectionData: PDFData
}

export default MainRender;