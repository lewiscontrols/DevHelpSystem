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

class Menu extends Component {
	constructor(props) {
	     super(props);
	     this.state = { 
			 Selected: props.menuName,
			 name: '',
			 togglePDF: 'off',
			 toggleHLP: 'off',
			 toggleDELETE: 'off',
			 toggleEDIT: 'off',
			 togglePDFEDIT: 'off',
			 toggleKEYEDIT: 'off'
		 }
	   }

	componentWillMount() {

		// temps for menu options
		let pdfBtn = 'options';
		let temp = '';
		let tempTwo = '';
		let tempThree = '';
		let tempFour = '';
		let tempFive = '';
		let tempSix = '';

		let getOptions = this.props.data.filter(obj => {
		return pdfBtn === obj.menu;
		}).map((obj, idx) => {
			temp = obj.pdf;
			tempTwo = obj.createhlp;
			tempThree = obj.deletehlp;
			tempFour = obj.edithlp;
			tempFive = obj.editpdf;
		    tempSix = obj.editkeyword;
			return (
				<div key={idx}>
				  {obj.pdf}
				  {obj.createhlp}
				  {obj.deletehlp}
				  {obj.edithlp}
				  {obj.editpdf}
				  {obj.editkeyword}
				 </div>
				);
		});

		this.setState({
			togglePDF: temp,
			toggleHLP: tempTwo,
			toggleDELETE: tempThree,
			toggleEDIT: tempFour,
			togglePDFEDIT: tempFive,
			toggleKEYEDIT: tempSix
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
		         {this.state.togglePDFEDIT === 'on' ? <button 
		            label="Editpdffile"
					onClick={(e) => this.handleClick(e, 'Editpdffile')}
		            className="createButton"
		        >EDIT PDF</button>
		        : '' }
		         {this.state.toggleKEYEDIT === 'on' ? <button 
		            label="Editkeyword"
					onClick={(e) => this.handleClick(e, 'Editkeyword')}
		            className="createButton"
		        >EDIT KEYWORDS</button>
		        : '' }
		        <button 
		            label="Main Menu"
					onClick={(e) => this.handleClick(e, 'Mainmenu')} 
		            className="aPrevButton"
		        >MAIN MENU</button>
		    </div>
		);
		
		const FileOptions = () => (
			<div>
		        <button 
		            label="Load Default Values"
					onClick={(e) => this.handleClick(e, 'Load Default Values')}
		            className="aMenuButton"
		        >LOAD DEFAULT VALUES</button>
		        <button 
		            label="Open Species Values From Disk"
					onClick={(e) => this.handleClick(e, 'Open Species Values From Disk')}
		            className="aMenuButton"
		        >OPEN SPECIES VALUES FROM DISK</button>
		        <button 
		            label="Save Current Species Machine Values To Disk"
					onClick={(e) => this.handleClick(e, 'Save Current Species Machine Values To Disk')}
		            className="aMenuButton"
		        >SAVE CURRENT SPECIES && MACHINE VALUES</button>
		        <button 
		            label="Recover Machine Values"
					onClick={(e) => this.handleClick(e, 'Recover Machine Values')}
		            className="aMenuButton"
		        >RECOVER MACHINES VALUES</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: MainMenu })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const SetUpOptions = () => (
			<div>
		        <button 
		            label="Startup Options"
					onClick={() => this.setState({ Selected: StartUpOptions })} 
		            className="aMenuButton"
		        >STARTUP OPTIONS</button>
		        <button 
		            label="Runtime Options"
					onClick={() => this.setState({ Selected: RunTimeOptions })} 
		            className="aMenuButton"
		        >RUNTIME OPTIONS</button>
		        <button 
		            label="Scanner Setup"
					onClick={() => this.setState({ Selected: ScannerSetup })} 
		            className="aMenuButton"
		        >SCANNER SETUP</button>
		        <button 
		            label="Tally Parameters Setup"
					onClick={(e) => this.handleClick(e, 'Tally Parameters Setup')}
		            className="aMenuButton"
		        >TALLY PARAMENTS SETUP</button>
		        <button 
		            label="Zero Tally and Downtime"
					onClick={(e) => this.handleClick(e, 'Zero Tally and Downtime')}
		            className="aMenuButton"
		        >ZERO TALLY AND DOWNTIME</button>
		        <button 
		            label="Set View Options"
					onClick={(e) => this.handleClick(e, 'Set View Options')}
		            className="aMenuButton"
		        >SET VIEW OPTIONS</button>
		        <button 
		            label="Saw Deviation Setup"
					onClick={(e) => this.handleClick(e, 'Saw Deviation Setup')}
		            className="aMenuButton"
		        >SAW DEVIATION SETUP</button>
		        <button 
		            label="Adv Saw Deviation Setup"
					onClick={(e) => this.handleClick(e, 'Adv Saw Deviation Setup')}
		            className="aMenuButton"
		        >ADV SAW DEVIATION SETUP</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: MainMenu })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const StartUpOptions = () => (
			<div>
		        <button 
		            label="Automatic Positioner Calibration"
					onClick={(e) => this.handleClick(e, 'Automatic Positioner Calibration')}
		            className="aMenuButton"
		        >AUTOMATIC POSITIONER CALIBRATION</button>
		        <button 
		            label="Basic Positioner Setup"
					onClick={(e) => this.handleClick(e, 'Basic Positioner Setup')}
		            className="aMenuButton"
		        >BASIC POSITIONER SETUP</button>
		        <button 
		            label="Positioner Movement Setup"
					onClick={(e) => this.handleClick(e, 'Positioner Movement Setup')}
		            className="aMenuButton"
		        >POSITIONER MOVEMENT SETUP</button>
		        <button 
		            label="Console Mapping"
					onClick={(e) => this.handleClick(e, 'Console Mapping')}
		            className="aMenuButton"
		        >CONSOLE MAPPING</button>
		        <button 
		            label="Spares Setup"
					onClick={(e) => this.handleClick(e, 'Spares Setup')}
		            className="aMenuButton"
		        >SPARES SETUP</button>
		        <button 
		            label="System Setup"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'System Setup')}
		        >SYSTEM SETUP</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: SetUpOptions })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const RunTimeOptions = () => (
			<div>
		        <button 
		            label="Kerfs"
					onClick={(e) => this.handleClick(e, 'Kerfs')}
		            className="aMenuButton"
		        >KERFS</button>
		        <button 
		            label="Limits"
					onClick={(e) => this.handleClick(e, 'Limits')}
		            className="aMenuButton"
		        >LIMITS</button>
		        <button 
		            label="Delays"
					onClick={(e) => this.handleClick(e, 'Delays')}
		            className="aMenuButton"
		        >DELAYS</button>
		        <button 
		            label="Oiler Adjustments"
					onClick={(e) => this.handleClick(e, 'Oiler Adjustments')}
		            className="aMenuButton"
		        >OILER ADJUSTMENTS</button>
		        <button 
		            label="Opening Face Parameters"
					onClick={(e) => this.handleClick(e, 'Opening Face Parameters')}
		            className="aMenuButton"
		        >OPENING FACE PARAMETERS</button>
		        <button 
		            label="Package Mode / Max Set Setup"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Package Mode / Max Set Setup')}
		        >PACKAGE MODE / MAX SET SETUP</button>
		        <button 
		            label="Auto Saw Guide Setup"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Auto Saw Guide Setup')}
		        >AUTO SAW GUIDE SETUP</button>
		        <button 
		            label="Timber Bind Adjustments"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Timber Bind Adjustments')}
		        >TIMBER BIND ADJUSTMENTS</button>
		         <button 
		            label="Encoder Pantograph Switch Setup"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Encoder Pantograph Switch Setup')}
		        >ENCODER PANTOGRAPH SWITCH SETUP</button>
		        <button 
		            label="Slabber Setup"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Slabber Setup')}
		        >SLABBER SETUP</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: SetUpOptions })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const ScannerSetup = () => (
			<div>
		        <button 
		            label="Scanner Options"
					onClick={(e) => this.handleClick(e, 'Scanner Options')}
		            className="aMenuButton"
		        >SCANNER OPTIONS</button>
		        <button 
		            label="Scanner Calibration Options"
					onClick={(e) => this.handleClick(e, 'Scanner Calibration Options')}
		            className="aMenuButton"
		        >SCANNER CALIBRATION OPTIONS</button>
		        <button 
		            label="Auto Taper Rates"
					onClick={(e) => this.handleClick(e, 'Auto Taper Rates')}
		            className="aMenuButton"
		        >AUTO TAPER RATES</button>
		        <button 
		            label="Scanner Setup Options"
					onClick={(e) => this.handleClick(e, 'Scanner Setup Options')}
		            className="aMenuButton"
		        >SCANNER SETUP OPTIONS</button>
		        <button 
		            label="Shapescan Setup"
					onClick={(e) => this.handleClick(e, 'Shapescan Setup')}
		            className="aMenuButton"
		        >SHAPESCAN SETUP</button>
		        <button 
		            label="Filter Log Turner"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Filter Log Turner')}
		        >FILTER LOG TURNER</button>
		        <button 
		            label="Head S/N Assignment"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Head S/N Assignment')}
		        >HEAD S/N ASSIGNMENT</button>
		        <button 
		            label="Scanner Calibration"
		            className="aMenuButton"
					onClick={(e) => this.handleClick(e, 'Scanner Calibration')}
		        >SCANNER CALIBRATION</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: SetUpOptions })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		
		const LumberOptions = () => (
			<div>
		        <button 
		            label="Species Setup"
					onClick={(e) => this.handleClick(e, 'Species Setup')}
		            className="aMenuButton"
		        >SPECIES SETUP</button>
		        <button 
		            label="Board and Cant Sizes Setup"
					onClick={(e) => this.handleClick(e, 'Board and Cant Sizes Setup')}
		            className="aMenuButton"
		        >BOARD AND CANT SIZES SETUP</button>
		        <button 
		            label="Cant Face Width Table"
					onClick={(e) => this.handleClick(e, 'Cant Face Width Table')}
		            className="aMenuButton"
		        >CANT FACE WIDTH TABLE</button>
		        <button 
		            label="Optimizer Adjustments"
					onClick={(e) => this.handleClick(e, 'Optimizer Adjustments')}
		            className="aMenuButton"
		        >OPTIMIZER ADJUSTEMENTS</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: MainMenu })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const ShiftSetUp = () => (
			<div>
		        <button 
		            label="Add a Shift"
					onClick={(e) => this.handleClick(e, 'Add a Shift')}
		            className="aMenuButton"
		        >ADD A SHIFT</button>
		        <button 
		            label="Delete a Shift"
					onClick={(e) => this.handleClick(e, 'Delete a Shift')}
		            className="aMenuButton"
		        >DELETE A SHIFT</button>
		        <button 
		            label="Day Shift"
					onClick={(e) => this.handleClick(e, 'Day Shift')}
		            className="aMenuButton"
		        >DAY SHIFT</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: MainMenu })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
				<br />
			</div>
		);
		
		const ViewReportOptions = () => (
			<div>
		        <button 
		            label="Downtime Summary"
					onClick={(e) => this.handleClick(e, 'Downtime Summary')}
		            className="aMenuButton"
		        >DOWNTIME SUMMARY</button>
		        <button 
		            label="Individual Log Monitor"
					onClick={(e) => this.handleClick(e, 'Individual Log Monitor')}
		            className="aMenuButton"
		        >INDIVIDUAL LOG MONITOR</button>
		        <button 
		            label="View Current Log"
					onClick={(e) => this.handleClick(e, 'View Current Log')}
		            className="aMenuButton"
		        >VIEW CURRENT LOG</button>
		        <button 
		            label="Sawyers 2D Display"
					onClick={(e) => this.handleClick(e, 'Sawyers 2D Display')}
		            className="aMenuButton"
		        >SAWYERS 2D DISPLAY</button>
		        <button 
		            label="Shift Tally Summary"
					onClick={(e) => this.handleClick(e, 'Shift Tally Summary')}
		            className="aMenuButton"
		        >SHIFT TALLY SUMMARY</button>
		        <button 
		            label="Tally Reports"
					onClick={(e) => this.handleClick(e, 'Tally Reports')}
		            className="aMenuButton"
		        >TALLY REPORTS</button>
		        <button 
		            label="View Machine Adjustments"
					onClick={(e) => this.handleClick(e, 'View Machine Adjustments')}
		            className="aMenuButton"
		        >VIEW MACHINE ADJUSTMENTS</button>
		        <button 
		            label="Saw Deviation Monitor"
					onClick={(e) => this.handleClick(e, 'Saw Deviation Monitor')}
		            className="aMenuButton"
		        >SAW DEVIATION MONITOR</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: MainMenu })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const TroubleShootingOptions = () => (
			<div>
		        <button 
		            label="Targets and Positions"
					onClick={(e) => this.handleClick(e, 'Targets and Positions')}
		            className="aMenuButton"
		        >TARGET AND POSITIONS</button>
		        <button 
		            label="Last Scan"
					onClick={(e) => this.handleClick(e, 'Last Scan')}
		            className="aMenuButton"
		        >LAST SCAN</button>
		        <button 
		            label="Encoder Info Display"
					onClick={(e) => this.handleClick(e, 'Encoder Info Display')}
		            className="aMenuButton"
		        >ENDCODER INFO DISPLAY</button>
		        <button 
		            label="Setworks History"
					onClick={(e) => this.handleClick(e, 'Setworks History')}
		            className="aMenuButton"
		        >SETWORKS HISTORY</button>
		        <button 
		            label="Solution History"
					onClick={(e) => this.handleClick(e, 'Solution History')}
		            className="aMenuButton"
		        >SOLUTION HISTORY</button>
		        <button 
		            label="System Overview"
					onClick={(e) => this.handleClick(e, 'System Overview')}
		            className="aMenuButton"
		        >SYSTEM OVERVIEW</button>
		        <button 
		            label="View Voltages"
					onClick={(e) => this.handleClick(e, 'View Voltages')}
		            className="aMenuButton"
		        >VIEW VOLTAGES</button>
		        <button 
		            label="View Pvalues Console"
					onClick={(e) => this.handleClick(e, 'View Pvalues Console')}
		            className="aMenuButton"
		        >VIEW PVALUES CONSOLE</button>
		        <button 
		            label="View Setworks Diagnostics Console"
					onClick={(e) => this.handleClick(e, 'View Setworks Diagnostics Console')}
		            className="aMenuButton"
		        >VIEW SETWORKS DIAGNOSTICS</button>
		        <button 
		            label="View Scanner Diagnostics"
					onClick={(e) => this.handleClick(e, 'View Scanner Diagnostics')}
		            className="aMenuButton"
		        >VIEW SCANNER DIAGNOSTICS</button>
		        <button 
		            label="Positioner Graph"
					onClick={(e) => this.handleClick(e, 'Positioner Graph')}
		            className="aMenuButton"
		        >POSITIONER GRAPH</button>
		        <button 
		            label="Last Scan Log Line"
					onClick={(e) => this.handleClick(e, 'Last Scan Log Line')}
		            className="aMenuButton"
		        >LAST SCAN LOG LINE</button>
		        <button 
		            label="Previous Menu"
					onClick={() => this.setState({ Selected: MainMenu })} 
		            className="aPrevButton"
		        >PREVIOUS MENU</button>
			</div>
		);
		
		const { Selected } = this.state;
			
		return (
			<div>	
				<div className="menuButtons">
					{Selected === 'MainMenu' ? <MainMenu /> : <Selected /> }
					{Selected === 'FileOptions' ? <FileOptions /> : ''}
					{Selected === 'SetUpOptions' ? <SetUpOptions /> : ''}
					{Selected === 'StartUpOptions' ? <StartUpOptions /> : ''}
					{Selected === 'ScannerSetup' ? <ScannerSetup /> : ''}
					{Selected === 'RunTimeOptions' ? <RunTimeOptions /> : ''}
					{Selected === 'LumberOptions' ? <LumberOptions /> : ''}
					{Selected === 'ShiftSetUp' ? <ShiftSetUp /> : ''}
					{Selected === 'ViewReportOptions' ? <ViewReportOptions /> : ''}
					{Selected === 'TroubleShootingOptions' ? <TroubleShootingOptions /> : ''}
				</div>
			</div>
		)
	}
}

Menu.propTypes = {	
	handleHelpChange: PropTypes.func,
	handleMenuClick: PropTypes.func,
	handleMenuChange: PropTypes.func,
	name: PropTypes.string,
	menuName: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.object
	)
}

Menu.defaultProps = {
	data: Options
}

export default Menu;


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