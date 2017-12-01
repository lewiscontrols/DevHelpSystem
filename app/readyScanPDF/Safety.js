import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'


class Safety extends Component {
   
	render() {
		return (
			<article className="artPDF">
			<div>
				<p className="pdfText">
					<span className="addBold">PRIMARY APPLICABLE SAFETY STANDARDS FOR SAWMILL MACHINERY</span><br /><br />
					<span className="addBold">I. &nbsp;&nbsp;OSHA STANDARDS</span><br /><br />
					Federal Register Volume 37 - Number 202 Part II - Title 29 - Labor Chapter XVII, Part 1910. Particularly, but not limited to, subpart 1910.265 'Sawmills', and 1910.147 'The Control of Hazardous Energy Source (Lockout/Tagout)'. For later revisions refer to subsequent volumes of the Federal Register and codifications thereof in the Code of Federal Regulations, Title 29 - Labor.<br /><br />
					<span className="addBold">II. &nbsp;&nbsp;AMERICAN NATIONAL STANDARDS</span> <br /><br />
					Many Sections from above were adopted from the American National Standards and published by American National Standards Institute, Inc. 1430 Broadway, New York, New York 10018. Some of the applicable standards are.<br /><br />
					1. &nbsp;&nbsp;ANSI Z244.1-1982 &nbsp;&nbsp;&nbsp; Personnel Protection Lockout/Tagout of Energy Source<br /><br />
					2. &nbsp;&nbsp;ANSI 02.1 -1983 &nbsp;&nbsp;&nbsp;&nbsp; Safety Requirements for Sawmills<br /><br />
					3. &nbsp;&nbsp;ANSI B15.1-1984 &nbsp;&nbsp;&nbsp;&nbsp; Safety Standards for Mechanical Power Transmissions Apparatus<br /><br />
					4. &nbsp;&nbsp;ANSI B20.1-1987 &nbsp;&nbsp;&nbsp;&nbsp; Safety Standards for Conveyers Related Equipment<br /><br />
					5. &nbsp;&nbsp;ANSI A-12.1-1973 &nbsp;&nbsp;&nbsp;&nbsp; Floor and Wall Openings, Railings and Toeboards<br /><br />
					6. &nbsp;&nbsp;ANSI A58.1-1982  &nbsp;&nbsp;&nbsp;&nbsp; Minimum Design Loads in Buildings Stairs Fixed Industrial<br /><br />
					7. &nbsp;&nbsp;ANSI A64.1- 1968 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stairs Fixed Industrial<br /><br />
					<span className="addBold">III. &nbsp;&nbsp;NATIONAL ELECTRICAL CODE</span><br /><br />
					
					Published annually by the National Fire Protection Association, 470 Atlantic Ave., Boston, Massachusetts 02210<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2-60A) Revised 2-12-91<br /><br />
					<span className="addBold">IV. &nbsp;&nbsp;Laser Safety – Class 3B Lasers</span><br /><br />
					IEC 60825-1, Am. 2 <br />
					and IEC 60601-2-22 &nbsp;&nbsp;&nbsp; Final Guidance for Industry and FDA<br /><br />
				</p>
			</div>
			</article>
		)
	}
}


export default Safety;
