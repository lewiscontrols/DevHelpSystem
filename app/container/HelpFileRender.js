import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'
import Modal from 'react-modal'
import ReadyPDF from './ReadyPDF'
import electron, { remote } from 'electron'
import SectionFive from '../readyScanPDF/SectionFive'
import SectionSix from '../readyScanPDF/SectionSix'
import AddHelpFile from '../components/AddHelpFile'
import HelpFileData from '../data/HelpFileData'
import PDFData from '../data/PDFData'
import DeleteHelpFile from '../components/DeleteHelpFile'
import EditHelpFile from '../components/EditHelpFile'
import EditPDF from '../components/EditPDF'
import MainRender from '../components/MainRender'


// Modal dynamic positioning
const customStyles = {
  content : {
    top                   : '40%',
    left                  : '40%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-40%',
	border                : '2px solid #0080ff',
    transform             : 'translate(-40%, -40%)',
  }
};

const imgPath = './app/img/';
const logoImg = './app/img/lcLogo.PNG';

const upperStyle = {
	textTransform: 'uppercase'
};

class HelpFileContainer extends Component {
	constructor() {
	    super();
		this.state = {
	      modalIsOpen: false,
	      massData: ''
	    };
		
	   	this.openModal = this.openModal.bind(this);
	    this.afterOpenModal = this.afterOpenModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}
	
    componentWillMount() {
		let pdfData = this.props.dataTwo;
		let hlpData = this.props.data;

		let allData = pdfData.concat(hlpData);

		function compare(a,b) {
			if (a.idNum < b.idNum) {
				return -1;
			}
			if (a.idNum > b.idNum) {
				return 1;
			}
			return 0;
		}

		allData.sort(compare);

		this.setState({
		massData: allData
		});
    }
    
	openModal() {
		this.setState({modalIsOpen: true});
	}
 
    afterOpenModal() {
	    // references are now sync'd and can be accessed.
	    this.subtitle.style.color = '#f00';
    }
 
	closeModal() {
		this.setState({modalIsOpen: false});
    }
	
	printPage() {
		window.print();
	}
		
	render() {

		const getRawHTML = html => ({
			__html: html
		});
		
		const renderHelpFile = this.props.data.filter(obj => {
			return this.props.name === obj.name;
				}).map((obj, idx) => {
				return (
					<div key={idx} className="fadingDiv">
						<div className="displayLineBreak">	
							{obj.video === 'n' ? (
								<div>
									<button className="printBtn" onClick={this.printPage}>PRINT SCREEN</button> 
								</div>
							) : (
								<div>
									<button className="printBtn" onClick={this.printPage}>PRINT SCREEN</button> 
									<button className="printBtn" onClick={this.openModal}>VIEW VIDEO</button> 
								</div>
							)}
							<h2 style={upperStyle}> {obj.title} </h2>
							<b>Path:</b> {obj.path} <br /><br />
							<div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
							<div dangerouslySetInnerHTML={getRawHTML(obj.more)}></div>
							<br />
						</div>
						<div className="divImg">
							<img src={`${obj.image}`} className="helpFileImg" onClick={this.openModal}></img><br />
							<Modal
					            isOpen={this.state.modalIsOpen}
					            onAfterOpen={this.afterOpenModal}
					            onRequestClose={this.closeModal}
					            style={customStyles}
					            contentLabel="Lewis Controls"
					         >
								<center>
								<p style={upperStyle} className="modalTitle">{obj.title}<button className="closeBtn" onClick={this.closeModal}>x</button></p>
								<div className="imgModal"><img src={`${obj.image}`} className="helpFileImg"></img></div>
								</center>
					    	</Modal>
						</div>
					</div>
				);
		});
		
		const renderPDF = this.props.data.map( (obj, idx) => {
	   		 	return (
					<article className="artPDF">
						<div className="headDiv">
							<img className="headerLogo" src={`${logoImg}`}/> <p className="rdyScan"><i>READYSCAN 2 SYSTEM</i></p>
						</div>
						<div key={idx}>
							<div className="displayLineBreak">
								<h2 style={upperStyle}> {obj.title} </h2>
								<b>Path:</b> {obj.path} <br /><br />
								<div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
							</div>
							<div>
								<img src={`${obj.image}`} className="pdfHelpImg"></img>
							</div>
							
							<div className="sectionDiv">
								{obj.section}<br />
							</div>
							
							<br />
						</div>
					</article>
				)
		});


	  	const renderMASS = this.state.massData.map( (obj, idx) => {
	   		 	return (
					<article className="artPDF">
						<div className="headDiv">
							<img className="headerLogo" src={`${logoImg}`}/> <p className="rdyScan"><i>READYSCAN 2 SYSTEM</i></p>
						</div>
						<div key={idx}>
							<div className="displayLineBreak">
							{obj.type === 'section' ? (
								<div>
									<div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
									<div className="sectionDiv">
										{obj.section}<br />
									</div>
								</div>
							) : (
								<div>
									<h2 style={upperStyle}> {obj.title} </h2>
									<b>Path:</b> {obj.path} <br /><br />
									<div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
									<div>
										<img src={`${obj.image}`} className="pdfHelpImg"></img>
									</div>
									
									<div className="sectionDiv">
										{obj.section}<br />
									</div>
								</div>
							)}
							</div>
						</div>
					</article>
				)
		});

	  const renderSections = this.props.data.map( (obj, idx) => {
	   		 	return (
					<article className="artPDF">
						<div className="headDiv">
							<img className="headerLogo" src={`${logoImg}`}/> <p className="rdyScan"><i>READYSCAN 2 SYSTEM</i></p>
						</div>
						<div key={idx}>
							<div className="displayLineBreak">
								<h2 style={upperStyle}> {obj.title} </h2>
								<b>Path:</b> {obj.path} <br /><br />
								<div dangerouslySetInnerHTML={getRawHTML(obj.content)}></div>
							</div>
							<div className="sectionDiv">
								{obj.section}<br />
							</div>
							
							<br />
						</div>
					</article>
				)
	    });

		const Mainmenu = () => {
			return (
				<div className="fadingDiv">
					<MainRender />
				</div>
			)
		};
		
		const Fileopt = () => {
			return (
				<div className="fadingDiv">
					<div className="displayLineBreak">
						<div className="headerDiv"><h2>FILE OPTIONS</h2> <br /></div>
						<b>Path: </b> Main Menu / File Options <br /><br />
						<b>NOTE:</b> YOU SHOULD NEVER PRESS <b>LOAD DEFAULT VALUES</b> on your ReadyScan 2 system unless instructed by an LCI employee.
					</div>
					<div className="divImg">
						<img src={`${imgPath}hlpSetup.PNG`} className="helpFileImg" onClick={this.openModal}></img>
						<Modal
				            isOpen={this.state.modalIsOpen}
				            onAfterOpen={this.afterOpenModal}
				            onRequestClose={this.closeModal}
				            style={customStyles}
				            contentLabel="Lewis Controls"
				         >
							<center>
							<p style={upperStyle} className="modalTitle">FILE OPTIONS<button className="closeBtn" onClick={this.closeModal}>x</button></p>
							<div className="imgModal"><img src={`${imgPath}fileOptions.PNG`} className="helpFileImg"></img></div>
							</center>
				    	</Modal>
					</div>
				</div>
			)
		};
		
		const Setupopt = () => {
			return (
				<div className="fadingDiv">
					<div className="displayLineBreak">
						<div className="headerDiv"><h2>SETUP OPTIONS</h2> <br /></div>
						<b>Path: </b> Main Menu / Setup Options <br /><br />
						In setup optins you will find three additional sub menus, Startup Options, Runtime Options and Scanner Options.  Selecting these choices will provide you with additonal menu options to choose from.  
					</div>
					<div className="divImg">
						<img src={`${imgPath}hlpSetup.PNG`} className="helpFileImg" onClick={this.openModal}></img>
						<Modal
				            isOpen={this.state.modalIsOpen}
				            onAfterOpen={this.afterOpenModal}
				            onRequestClose={this.closeModal}
				            style={customStyles}
				            contentLabel="Lewis Controls"
				         >
							<center>
							<p style={upperStyle} className="modalTitle">SETUP OPTIONS<button className="closeBtn" onClick={this.closeModal}>x</button></p>
							<div className="imgModal"><img src={`${imgPath}hlpSetup.PNG`} className="helpFileImg"></img></div>
							</center>
				    	</Modal>
					</div>
				</div>
			)
		};
		
		const Lumberopt = () => {
			return (
				<div className="fadingDiv">
					<div className="displayLineBreak">
						<div className="headerDiv"><h2>LUMBER OPTIONS</h2> <br /></div>
							<b>Path: </b> Main Menu / Lumber Options <br /><br />
							Inside here you will find various ways to customize your boards. 
						</div>
					<div className="divImg">
						<img src={`${imgPath}hlpLumberScreen.PNG`} className="helpFileImg" onClick={this.openModal}></img>
						<Modal
				            isOpen={this.state.modalIsOpen}
				            onAfterOpen={this.afterOpenModal}
				            onRequestClose={this.closeModal}
				            style={customStyles}
				            contentLabel="Lewis Controls"
				         >
							<center>
							<p style={upperStyle} className="modalTitle">LUMBER OPTIONS<button className="closeBtn" onClick={this.closeModal}>x</button></p>
							<div className="imgModal"><img src={`${imgPath}hlpLumberScreen.PNG`} className="helpFileImg"></img></div>
							</center>
				    	</Modal>
					</div>
				</div>
			)
		};
		
		const Shiftopt = () => {
			return (
				<div className="fadingDiv">
					<div className="displayLineBreak">
						<div className="headerDiv"><h2>SHIFT SETUP</h2> <br /></div>
							<b>Path: </b> Main Menu / Shift Setup <br /><br />
							This menu will allow you to customize your shifts.  
						</div>
					<div className="divImg">
						<img src={`${imgPath}hlpShiftScreen.PNG`} className="helpFileImg" onClick={this.openModal}></img>
						<Modal
				            isOpen={this.state.modalIsOpen}
				            onAfterOpen={this.afterOpenModal}
				            onRequestClose={this.closeModal}
				            style={customStyles}
				            contentLabel="Lewis Controls"
				         >
							<center>
							<p style={upperStyle} className="modalTitle">SHIFT SETUP<button className="closeBtn" onClick={this.closeModal}>x</button></p>
							<div className="imgModal"><img src={`${imgPath}hlpShiftScreen.PNG`} className="helpFileImg"></img></div>
							</center>
				    	</Modal>
					</div>
				</div>
			)
		};
		
		const Viewopt = () => {
			return (
				<div className="fadingDiv">
					<div className="displayLineBreak">
						<div className="headerDiv"><h2>VIEW AND REPORT OPTIONS</h2> <br /></div>
							<b>Path: </b> Main Menu / View and Report Options <br /><br />
							View various reports and information.   
						</div>
					<div className="divImg">
						<img src={`${imgPath}hlpViewReportScreen.PNG`} className="helpFileImg" onClick={this.openModal}></img>
						<Modal
				            isOpen={this.state.modalIsOpen}
				            onAfterOpen={this.afterOpenModal}
				            onRequestClose={this.closeModal}
				            style={customStyles}
				            contentLabel="Lewis Controls"
				         >
							<center>
							<p style={upperStyle} className="modalTitle">VIEW AND REPORT OPTIONS<button className="closeBtn" onClick={this.closeModal}>x</button></p>
							<div className="imgModal"><img src={`${imgPath}hlpViewReportScreen.PNG`} className="helpFileImg"></img></div>
							</center>
				    	</Modal>
					</div>
				</div>
			)
		};
		
		const Troubleopt = () => {
			return (
				<div className="fadingDiv">
					<div className="displayLineBreak">
						<div className="headerDiv"><h2>TROUBLESHOOTING</h2> <br /></div>
							<b>Path: </b> Main Menu / View and Report Options <br /><br />
							Troubleshoot dialogs and menu options within here.  
						</div>
					<div className="divImg">
						<img src={`${imgPath}hlpTroubleScreen.PNG`} className="helpFileImg" onClick={this.openModal}></img>
						<Modal
				            isOpen={this.state.modalIsOpen}
				            onAfterOpen={this.afterOpenModal}
				            onRequestClose={this.closeModal}
				            style={customStyles}
				            contentLabel="Lewis Controls"
				         >
							<center>
							<p style={upperStyle} className="modalTitle">TROUBLESHOOTING<button className="closeBtn" onClick={this.closeModal}>x</button></p>
							<div className="imgModal"><img src={`${imgPath}hlpTroubleScreen.PNG`} className="helpFileImg"></img></div>
							</center>
				    	</Modal>
					</div>
				</div>
			)
		};

		const GrabSection = () => {
			<div>
				<SectionFive />
			</div>
		}
		
		const Createpdfopt = () => {
			return (
				<div className="fadingDiv">
					<button className="printBtn" onClick={this.printPage}>PRINT SCREEN</button>
					{renderMASS}
				</div>
			)
		};

		const Createhlpfile = () => {
			return (
				<div className="fadingDiv">
					<AddHelpFile />
				</div>
			)
		};

		const Deletehlpfile = () => {
			return (
				<div className="fadingDiv">
					<DeleteHelpFile />
				</div>
			)
		};

		const Edithlpfile = () => {
			return (
				<div className="fadingDiv">
					<EditHelpFile />
				</div>
			)
		};

		const Editpdffile = () => {
			return (
				<div className="fadingDiv">
					<EditPDF />
				</div>
			)
		};
				 
		return (
			<div className="fadingDiv">
				{this.props.name === 'Mainmenu' ? <Mainmenu /> : renderHelpFile}
				{this.props.name === 'Fileopt' ? <Fileopt /> : ''}
				{this.props.name === 'Setupopt' ? <Setupopt /> : ''}
				{this.props.name === 'Lumberopt' ? <Lumberopt /> : ''}
				{this.props.name === 'Shiftopt' ? <Shiftopt /> : ''}
				{this.props.name === 'Viewopt' ? <Viewopt /> : ''}
				{this.props.name === 'Troubleopt' ? <Troubleopt /> : ''}
				{this.props.name === 'Kneeopt' ? <Kneeopt /> : ''}
				{this.props.name === 'Createpdfopt' ? <Createpdfopt /> : ''}
				{this.props.name === 'Createhlpfile' ? <Createhlpfile /> : ''}
				{this.props.name === 'Deletehlpfile' ? <Deletehlpfile /> : ''}
				{this.props.name === 'Edithlpfile' ? <Edithlpfile /> : ''}
				{this.props.name === 'Editpdffile' ? <Editpdffile /> : ''}
			</div>
		)
	}
}

class HelpFileRender extends Component {

	render() {
		return (
			<div>
				<HelpFileContainer data={this.props.data} dataTwo={this.props.dataTwo} name={this.props.name}/>
			</div>
		)
	}
}

HelpFileRender.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.object
	),
	dataTwo: PropTypes.arrayOf(
		PropTypes.object
	),
	name: PropTypes.string
}

HelpFileRender.defaultProps = {
	data: HelpFileData,
	dataTwo: PDFData,
	name: ''
}

export default HelpFileRender;




/***


	const Createpdfopt = () => {
			return (
				<div className="fadingDiv">
					<button className="printBtn" onClick={this.printPage}>PRINT SCREEN</button>
					<ReadyPDF />
						{renderPDF}
					<SectionFive />
					<SectionSix />	
				</div>
			)
		};

componentWillMount() {
		 let pdfData = fs.readFileSync('./app/data/PDFData.json');
		 let hlpData = fs.readFileSync('./app/data/HelpFileData.json');
         
         let allData = pdfData + helpData;

         console.log(allData);
	}

***/