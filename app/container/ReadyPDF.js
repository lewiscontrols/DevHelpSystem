import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'
import Important from '../readyScanPDF/Important'
import Safety from '../readyScanPDF/Safety'
import TableContents from '../readyScanPDF/TableContents'
import SystemInstall from '../readyScanPDF/SystemInstall'
import SystemStartUp from '../readyScanPDF/SystemStartUp'
import SectionThree from '../readyScanPDF/SectionThree'


const pdfImg = './app/img/pdfTitleImg.PNG';

class ReadyPDF extends Component {
   
	render() {
		return (
			<article>
				<article className="addPageBreakAfter">
					<center>
					<img className="pdfImg" src={`${pdfImg}`}></img>
					<p className="pdfText">
						<span className="addBold">
						Lewis Controls, Inc. <br />
						260 N 26 Ave. / PO Box 526 <br />
						Cornelius, OR 97113 <br />
						503-648-9119 <br />
						www.lewiscontrols.com<br />
						</span>
					</p>
					</center>
				</article>
				<article className="addPageBreakAfter">
					<p className="pdfText">
						Thank you for purchasing your Lewis Controls Scanning Carriage Setworks control system. The goal of this manual is to provide valuable information that will allow you to take full advantage of the features and functions the system has to offer.<br /><br />
						The goals of this manual are:<br /><br />
						1. To outline the carriage Setworks & scanner system installation.<br /><br />
						2. To provide the information tools needed to adjust all of the system parameters to the best advantage of the mill.<br /><br />
						3. To provide the information tools needed to effectively maintain LCI carriage Setworks and scanner systems.<br /><br />
						This manual will, in some cases, discuss system components or features that are not implemented on your Setworks. This is a result of customizing each of our systems to the needs of the mill where it is to be used. We hope this does not create confusion.<br /><br />
						<span className="addBold"><i>NOTE:</i></span><br />
						As with most manuals, we recommend you read this one from cover-to-cover before operating the system. Also, be aware that operations and practices vary from region to region. Menus may vary slightly from those depicted and various modes may be unused in your application and turned off in the software.<br /><br />
						Once again, thank you for your business and we are confident that the system will provide you with years of excellent service. If you have any questions or comments regarding the information presented in this manual, please feel free to call or write.<br /><br />
					
					<center>
						<span className="addBold">
						LEWIS CONTROLS, INC.<br />
						P.O. BOX 526 CORNELIUS, OR 97113<br />
						(503) 648-9119 FAX: (503) 693-1110<br />
						sales@lewiscontrols.com<br />
						</span>
					</center>	
					</p>
					<Important />
					<Safety />
					<TableContents />
					<SystemInstall />
					<SystemStartUp />
					<SectionThree />
				</article>
			</article>
		)
	}
}


export default ReadyPDF;
