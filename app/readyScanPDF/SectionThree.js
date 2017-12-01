import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'

const imgPath = './app/img/';

class SectionThree extends Component {
   
	render() {
		return (
			<article className="artPDF">
				<div>
					<b>SECTION THREE</b><br /><br />
					<b>A. Scanning</b><br /><br />
					<b>A-1. Shape Scan systems</b><br /><br />
					One of the key features of the Lewis Controls system is the 3D Laser Scanner.<br />
					<b>WARNING: Laser radiation from the scan heads can be damaging to the eye. Never look directly into the scan heads when the lasers are on. Use caution when working on the carriage. The red lasers are visible to the eye. It is recommended that the lasers be turned off whenever someone is working on the carriage. Note the following:</b><br />
					1. A warning light, mounted near the laser heads will be on when the lasers are active.
					<ol>
						<b>
							<li>There are two laser remote shut off switches. One will be mounted near the operator inside the cab. The other will be near the carriage track access point. Pushing down on either of the mushroom switches will turn the lasers off. Pulling up on either switch will re-enable the lasers.</li>
							<li>Turning off the control power on the sawyers console will disable the lasers until it is turned back on.</li>
							<li>When the lasers are turned on, there is a 10 second delay before the lasers become active.</li>
						</b>
					</ol>
					The scanning system consists of a series of two or more scan heads mounted on a beam that is positioned over the infeed deck. Each scan head has two cameras (one on each end) and four lasers (spaced 12 inches apart) in the middle. The scan heads project vertical laser lines onto the log on the carriage. Within each head, the two cameras look at the lines created by the four lasers and gather information about the shape of the log. That information is then sent to the computer.<br /><br />
					The process of profiling the log consists of scanning the log multiple times as the carriage moves towards the saw. When the log is first scanned, cross section data is only collected every 12 inches along the log. Because of the multiple scans, additional log data is collected and refined until cross section data is present for each inch along the length of the log, producing a more accurate picture of the log.<br /><br />
					The computer receives the scanner information and uses it to create a three dimensional model of the log that includes the log’s shape, length and diameters. It then analyzes the model; sets opening faces, places cants and keeps track of wood available as the sawyer removes boards. The scanner is only used on unopened faces, with the computer keeping track of the remaining wood as additional passes are made. See section 5 for information about the actual sequence of cutting up a log.<br /><br />
				</div><br />
				<div>
					<b>A-2. Photocell systems</b><br /><br />
					A optional photocell scanning system may be provided by Lewis Controls. This scanner consists of a series of photo-electric cells, with the transmitters on the bottom and the receivers on top. These photocell pairs are spaced on approximate 6'' intervals and enclosed in a protective housing placed in a reasonably clear area alongside the carriage flat rail. Properly installed, the scanner should run from as close to the saw as practical and past the far lumber line on the other end. Ideally, the scan line will be placed 1'' on the carriage side of the saw line. This gap on most scans allows you to achieve maximum knee speed through most of the set, pulls slack out of the dogs and results in a forward set motion all the way to the saw line.<br /><br />
					The scanners primary job is to provide log edge definition, length and diameter information to the system computer which in turn develops a model of the log. The computer then analyzes the model, setting opening faces, placing cants and keeping track of wood available as the sawyer removes boards. The scanner is only used on unopened faces. See section 5 for information about the actual sequence of cutting up a log..<br /><br />
					The Lewis Photocell System scans as the log moves in either the forward or reverse direction, depending on where the log is positioned when the sawyer initiates a scan by pressing ''set'' or ''compute.'' It will also scan and set as the sawyer is moving the carriage toward the saw or slabber (scanning on the fly.)<br /><br />
				
					<b>Scan Forward:</b> Rough log length is measured as the log rolls out of the stop and loader and across the scanner. If the sawyer sets the dogs with the scan bar unblocked, the system begins a forward scan. (See Diagram) The sequence is as follows:<br />
					<ol type="a">
						<li>Rough length is measured as the log rolls across the scanner</li>
						<li>Log is dogged</li>
						<li>Sawyer presses "set" or "compute" and starts carriage moving toward the saw</li>
						<li>Knees advance in unison toward the saw line</li>
						<li>Log edge crosses the scan line</li>
						<li>Rough length data is updated to better reflect actual log length</li>
						<li>Computer develops log model and calculates solution</li>
						<li>Knees taper the log into the proper position and set for depth of first cut in one motion.</li>
					</ol>
					<b>Scan Reverse:</b> Rough log length is measured as the log rolls out of the stop and loader and across the scanner. If the sawyer sets the dogs with the scanner blocked, the system begins a reverse scan. (See Diagram) The sequence is as follows:<br />
					<ol type="a">
						<li>Rough length is measured as the log rolls across the scanner</li>
						<li>Log is dogged</li>
						<li>Sawyer presses "set" or "compute" and starts carriage moving to saw</li>
						<li>Knees retract in unison away from the saw line</li>
						<li>Log edge crosses the scan line in reverse</li>
						<li>Rough length data is updated to better reflect actual log length</li>
						<li>Reverse knee movement stops and knees start forward</li>
						<li>Computer develops log model and calculates solution</li>
						<li>Knees taper the log forward into the proper position and set for depth of first cut in one motion</li>
					</ol>
					<b>NOTE: Whenever possible, avoid loading a log to be scanned partly over the scanner. The scan and set will be longer because of the amount of knee movement needed to gather edge data.</b><br /><br />
					<h3>Scan FORWARD</h3>
					<img src={`${imgPath}scanForward.PNG`} className="helpFileImg"></img>

					<h3>Scan REVERSE</h3>
					<img src={`${imgPath}scanReverse.PNG`} className="helpFileImg"></img>
				</div><br />
				<div>
				<b>A-3. Scan Set Disable:</b> The Lewis System can be programmed to disable sets as the log approaches the saw or is in the saw. This feature can be turned on or off and adjusted from the system parameters (Main Menu / Setup Options / Scanner Setup / Scanner Options)<br /><br />
				Through these menus we establish a point in front of the saw guide where the setworks are disabled as the log nears the saw. Working in combination with a similar point ''behind the front'' of the saw guide defines an area or ''dead zone'' around the saw where the knees are inhibited as the pieces are cut from the log.<br /><br />
				The rough length of the log is initially measured when a log is viewed by the scanner. Length information is continually refined and corrected as the log is sawn.<br /><br />
				All setworks motion will stop when the combined inputs from the encoder and the scanner conclude that part of the log is present in the defined ''dead zone.''<br /><br />
				<b>WARNING: Though normally quite reliable, the Scan Set Disable feature is not 100% fail-safe. It is intended primarily to save saws and not to ensure personal safety of people in the area. Broken or severely tapered log ends may not be "seen" reliably by the scanner, which in turn can show a false reading for predicted log end. A slipping encoder, loose drive cables, or photocells (if your system is equipped with photocells) covered by debris may also create false information.</b><br /><br />
				<b><u>Nothing can take the place of a sawyer that stays in control of his machine at all times and makes safety a high priority.</u></b><br />
				</div><br />
				<div>
					<b>B. Solution Options</b><br /><br />
					The Lewis Controls Scanning Setworks system is a flexible tool. The hydraulic, electronic and software package has been designed to suit a wide variety of sawmill applications. As we go further in this manual we will discuss ways to access and modify the working system parameters from either the sawyers console or the computer menus.<br /><br />
					The basic software package provided to each mill uses the Lewis Controls Cant Matrix system to break a log down. Optionally, we can activate a form of dollar driven software or a “pattern” by diameter method of operation. The Cant Matrix system computes a solution to two basic questions: what cants and boards are in the log, and what depth of face should be opened.<br /><br />
				</div><br />
				<div>
					<b>B-1. Cant Matrix:</b> Selected from Parameters: Main Menu / Lumber Options / Cant Face Width Table<br /><br />
					The Cant Matrix system will choose one cant per log, filling in side lumber from the board list. The selections are based largely on two tables in the Lumber Options Menu, the Board and Cant Sizes Setup table and the Cant Face Width table. In addition, these tables work in conjunction with the Fill Mask (selected by the sawyer on the console) which tells the system which Cants and Boards are allowed for that Species.<br /><br />
					In the Board and Cant Sizes Setup, cants are defined by width (size) and given a numerical priority order. In the Cant Face Width table, all the cants with a width defined in Board and Cant Sizes Setup are listed by length and given either a minimum face width or an “Ignore” label. If the label is set to ignore, the system will not consider a cant of that length. If a face width is set, the face will be made full length on the cant.<br /><br />
				</div><br />
				<div>
					<b>B-2. Opening Faces:</b> The system will determine the opening face of a log based on many parameters. Generally, if you feel the slabs at times are too heavy, some software settings may be adjusted to compensate.<br /><br />
					<b>Computed Solution:</b> If you are sawing in Cant Matrix mode (as mentioned above), then opening faces are often determined by the size of face requested for each board and cant. For example, if the opening face is a cant face, then the face for that cant will be made at least as wide as requested for the entire length of the cant.<br /><br />
					In the Species Setup screen, the Maximum Cant Face Difference parameter will also have an effect on opening faces. The more restrictive this parameter is set the more likely it is to cause slabs to be heavy. Cant Face restrictions may make it unable to pick up extra side boards.<br /><br />
					<b>Set Button Solution:</b> When a face is opened by pressing the set button, the Lewis scanning system calculates the face line using the following rules:<br />
					<ol>
						<li>Test for ''grade face'' button on. If yes, use ''grade face'' parameters.</li>
						<li>Test log diameter against the automatic grade face parameter. If equal to or greater than the parameter, use ''grade face'' parameters. If not, use “Minimum Opening Face” parameters.</li>
						<li>Calculate the face opening line in accordance with the above parameters.</li>
						<li>Test for additional lumber lengths by using trade-off depth entered by the mill.</li>
						<li>With the final face line calculated, test to see if any common boards can be made from the slab wood.</li>
					</ol>
					We define common boards as the active fill mask boards in that axis of that
					species.<br /><br />
					We will open the log to recover any common boards that can be made without
					moving the face line as placed by rules 1-5.<br /><br />
					<img src={`${imgPath}commonBoard.PNG`} className="helpFileImg"></img>
				</div><br />
			</article>
		)
	}
}


export default SectionThree;