import React, { Component } from 'react'
import sass from '../scss/application.scss'
import PropTypes from 'prop-types'
import Options from '../data/Options'


const imgPath = './app/img/';

const buttonStyle = {
    height: '80px',
    width: '180px',
    fontSize: '44px',
    padding: '1px',
	overflow: 'hidden'
};

class FindMenu extends Component {
	render {
		return (
			<div>
			</div>
		)
	}
}

class TestMenu extends Component {
	constructor(props) {
	     super(props);
	     this.state = { 
			 Selected: props.menuName,
			 name: '',
			 togglePDF: 'off',
			 toggleHLP: 'off',
			 toggleDELETE: 'off',
			 toggleEDIT: 'off'
		 }
	   }

	componentWillMount() {

		// temps for menu options
		let pdfBtn = 'options';
		let temp = '';
		let tempTwo = '';
		let tempThree = '';
		let tempFour = '';

		let getOptions = this.props.data.filter(obj => {
		return pdfBtn === obj.menu;
		}).map((obj, idx) => {
			temp = obj.pdf;
			tempTwo = obj.createhlp;
			tempThree = obj.deletehlp;
			tempFour = obj.edithlp;
			return (
				<div key={idx}>
				  {obj.pdf}
				  {obj.createhlp}
				  {obj.deletehlp}
				  {obj.edithlp}
				 </div>
				);
		});

		this.setState({
			togglePDF: temp,
			toggleHLP: tempTwo,
			toggleDELETE: tempThree,
			toggleEDIT: tempFour
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.Selected !== nextProps.menuName) {
			this.state.Selected === nextProps.menuName
		}
	}

   	handleChange(name) {
   		this.setState({
   			name: name
   		});
   	}
	
   	handleClick(e, num) {
		this.setState({
		    name: num
		  }, () => {
		    let helpFileName = num;
		    helpFileName = helpFileName.toLowerCase().replace(/\s+/g, '');
		    //Cap the first letter in the name and add the rest of the name 
		    helpFileName = helpFileName.charAt(0).toUpperCase() + helpFileName.substr(1);
		    this.props.handleHelpChange(helpFileName);
		  });
	  }


     handleMenuClick(e, num, opt) {
  		this.setState({
  		    name: num,
  			Selected: opt
  		  }, () => {
  		    let helpFileName = num;
  		  //  let menuString = 'LumberOptions'
  		    helpFileName = helpFileName.toLowerCase().trim();
  		    //Cap the first letter in the name and add the rest of the name 
  		    helpFileName = helpFileName.charAt(0).toUpperCase() + helpFileName.substr(1);
  		   // this.props.handleMenuChange(menuString);
  		    this.props.handleHelpChange(helpFileName);
  		  });
  	  }
	 
	render() {
		const MainMenu = () => (
		    <div>
		        <button 
		            label="File Options"
					//onClick={() => this.setState({ Selected: FileOptions })} 
					onClick={(e) => this.handleMenuClick(e, 'Fileopt', FileOptions)}
					//onClick={() => this.setState({ Selected: FileOptions })} 
		            className="aMenuButton"
		        >FILE OPTIONS</button>
		        <button 
		            label="Setup Options"
					onClick={(e) => this.handleMenuClick(e, 'Setupopt', SetUpOptions)}
		            className="aMenuButton"
		        >SETUP OPTIONS</button>
		        <button 
		            label="Lumber Options"
					onClick={(e) => this.handleMenuClick(e, 'Lumberopt', LumberOptions)}
		            className="aMenuButton"
		        >LUMBER OPTIONS</button>
		        <button 
		            label="Shift Setup"
					onClick={(e) => this.handleMenuClick(e, 'Shiftopt', ShiftSetUp)}
		            className="aMenuButton"
		        >SHIFT SETUP</button>
		        <button 
		            label="View/Report"
					onClick={(e) => this.handleMenuClick(e, 'Viewopt', ViewReportOptions)}
		            className="aMenuButton"
		        >VIEW AND REPORT OPTIONS</button>
		        <button 
		            label="Troubleshooting"
					onClick={(e) => this.handleMenuClick(e, 'Troubleopt', TroubleShootingOptions)}
		            className="aMenuButton"
		        >TROUBLESHOOTING</button>
		        {this.state.togglePDF === 'on' ? <button 
		            label="CreatePDF"
					onClick={(e) => this.handleClick(e, 'Createpdfopt')}
		            className="createButton"
		        >CREATE PDF</button>
		        : '' }
		        {this.state.toggleHLP === 'on' ? <button 
		            label="Createhlpfile"
					onClick={(e) => this.handleClick(e, 'Createhlpfile')}
		            className="createButton"
		        >CREATE HELP FILE</button>
		        : '' }
		        {this.state.toggleDELETE === 'on' ? <button 
		            label="Deletehlpfile"
					onClick={(e) => this.handleClick(e, 'Deletehlpfile')}
		            className="createButton"
		        >DELETE HELP FILE</button>
		        : '' }
		         {this.state.toggleEDIT === 'on' ? <button 
		            label="Edithlpfile"
					onClick={(e) => this.handleClick(e, 'Edithlpfile')}
		            className="createButton"
		        >EDIT HELP FILE</button>
		        : '' }
		        <button 
		            label="Main Menu"
					onClick={(e) => this.handleClick(e, 'Mainmenu')} 
		            className="aPrevButton"
		        >MAIN MENU</button>
		    </div>
		);
		
		const { Selected } = this.state;
			
		return (
			<div>	
				<div className="menuButtons">
					{Selected === 'MainMenu' ? <MainMenu /> : <Selected /> }
				</div>
			</div>
		)
	}
}

TestMenu.propTypes = {	
	handleHelpChange: PropTypes.func,
	handleMenuClick: PropTypes.func,
	handleMenuChange: PropTypes.func,
	name: PropTypes.string,
	menuName: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

TestMenu.defaultProps = {
	data: Options
}

export default TestMenu;


/*
	////////////////
    //////  ADD A HELP FILE BUTTON TO A SUBMENU
	////////////////

	1. Copy the button code below.
	2. Paste the button code above into the correct sub menu.
	    Ex.  If you have created a new dialog under Shift Setup sub menu...
	            a.) copy the button the code
	            b.) scroll up to the 'const ShiftSetUp = () => (' function
	            c.) place the button inside of the <div> tag next to the other buttons.  
	3. Change the label and other occurences of the label name to the name of the button you wish to create.  (This MUST be the dialog title given to the dialog from ReadyScan software)
	4. Save the file
	5. run this command in CMD or Powershell from the home directory of DevHelpSystem -  "npm run build"
	6. The button can now be used and tested with "npm start" - if you like the new change run "npm run package-r" to create a new release build for the help file system

	// HELP FILE BUTTON CODE

                <button 
		            label="Positioner Graph"
					onClick={(e) => this.handleClick(e, 'Positioner Graph')}
		            className="aMenuButton"
		        >POSITIONER GRAPH</button>


   ///////////////
   /////   ADD A MENU
   //////////////

				const NewMenu = () => (
					<div>
					</div>
				)


*/