import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'

const imgPath = './app/img/';

class SystemInstall extends Component {
   
	render() {
		return (
			<article className="artPDF">
				<div>
					<b>SECTION I. - SYSTEM INSTALLATION</b><br /><br />
					<b>A. 		&nbsp;Introduction</b><br />
								You have made an investment in a high quality setworks/optimizing control system. Careful planning of the installation will pay dividends by minimizing start-up time, enhancing reliability and improving the maintainability of the system.<br />
								Installing the system is a process requiring many diverse steps. The following sections provide lists of tasks and information related to the installation. Our intent is to minimize the chance of oversight. The lists are not necessarily in sequence, should not be considered inclusive, and may discuss items not used on your system. If you have any questions, please do not hesitate to contact LCI for additional information or clarification.<br />
								In many cases, a great deal of installation work can be accomplished before the mill shuts down to make the change over. The involvement of LCI personnel onsite is generally limited to checkout, parameter setup and initial power-up. Beyond that point, LCI will assist in system troubleshooting, fine tuning and training of sawyers and maintenance personnel.<br />
				</div><br />
				<div>
					<b>A-1. &nbsp;What is supplied by Lewis Controls, Inc. (LCI)?</b><br /><br />
					<ul>
						<li>All hardware and software as defined by our contract and confirmed by the purchase order.</li>
						<li>All spares, manuals and operating supplies defined by our contract.</li>
						<li>All shielded cables required for positioners, Temposonics, displays, etc.</li>
						<li>System drawings which detail the wiring, conduit runs and system hardware.</li>
						<li>Initial checkout of the control system and set up of the initial system parameters.</li>
						<li>Training of Sawyers and Maintenance personnel as defined by our contract.</li>
						<li>Maintenance back-up and assistance for mill personnel as they maintain the system hardware and software, by phone or if required, on-site.</li>
					</ul>
				</div><br />
				<div>
					<b>A-2. Mill Or Others’ Responsibilities</b><br /><br />
					The mill responsibilities as outlined in this section are intended as a guideline. More detailed information is provided in the following sections. It is hoped that this will minimize areas of potential misunderstanding and oversight. In all cases the LCI contract will be used to resolve questioned areas and may, in some instances, override sections of this manual.
					In general, the mill responsibilities are:<br />
					<ul>
						<li>Provide and install all required conduit.</li>
						<li>Provide and install all required field wiring.</li>
						<li>Provide, install, wire and adjust all switches, and supply inputs to LCI equipment.</li>
						<li>Mount and wire all system components.</li>
						<li>Install, plumb, and flush the hydraulic components.</li>
						<li>Install 3D scan bar (shape scan systems)</li>
						<li>Install upper and lower scan bars (photocell scanner systems)</li>
						<li>Adjust scanner photocells (photocell scanner systems)</li>
						<li>Provide and install a blower and plenum, if necessary, to provide positive air pressure within the lower scanner housing (photocell scanner systems).</li>
					</ul>
				</div><br />
				<div>
					<b>A-3. Site Preparation</b><br /><br />
					When locating system components, you should always consider:<br />
					<ul>
						<li>Accessibility for maintenance.</li>
						<li>Accessibility for operation.</li>
						<li>Environment (vibration, temperature, humidity, and cleanliness).</li>
						<li>Ease of installation.</li>
					</ul>
				</div><br />
				<div>
					<b>A-4. System Drawing Package</b><br /><br />
					The system drawing packages supplied by LCI are intended for use during installation and maintenance activities. Minor wiring changes made during installation will be incorporated into LCI’s master drawings and copies will be returned to the mill. This will allow LCI to better support your maintenance efforts in the future.
					The system drawings provided by LCI identify:<br />
					<ul>
						<li>AC Source requirements.</li>
						<li>Conduit requirements</li>
						<li>Functional unit identification and sizes.</li>
						<li>Pull boxes (required or recommended).</li>
						<li>DC wiring (wire sizes specified are minimum).</li>
						<li>AC wiring (wire sizes specified are minimum).</li>
						<li>Multiple conductor shielded cable requirements.</li>
						<li>Back panel layout (wiring and cable terminations).</li>
						<li>Setworks 'black' box layout and interconnect cables.</li>
						<li>Wiring diagram of computer cabinet.</li>
						<li>Console and handle layouts.</li>
						<li>Functional unit interconnection wiring.</li>
						<li>Scanner details.</li>
						<li>PLC layout and wiring.</li>
						<li>Positioner wiring.</li>
					</ul>
				</div><br />
				<div>
					<b>B. Sawyers Cab and Computer Installation</b><br /><br />
					<b>B-1. Mill Responsibilities</b><br />
					<ul>
						<li>Mount the computer cabinet in the desired location (bolt to wall and floor)</li>
						<li>Mount the Programmable Logic Controller (PLC) – if a separate unit.</li>
						<li>Mount the operator console.</li>
						<li>Install all conduit runs per drawing package.</li>
					</ul>
				</div><br />
				<div>
					<b>B-2. General Recommendations</b><br /><br />
					There are usually a number of different options when mounting the computer cabinet and sawyer’s console. Here are some things to consider when installing your system.<br />
					Try to pick a location for the computer cabinet that is subjected to minimal vibration. Avoid areas which receive regular heavy shocks from mill equipment. Although your equipment will function in these areas, constant and repeated vibration/shocks may shorten the life of some of the components in your system.<br />
					Most systems will be mounted in the cab with the sawyer. If the computer cabinet is to be mounted in a separate room, we would suggest that you should be able to see the carriage from that room. This will improve system operation and simplify troubleshooting. Minimize the length of wiring runs. We recommend that from the computer out onto the carriage should be no more that 150 feet.<br />
					The computer environment should be temperature controlled (both heating and air conditioning). Minimize the amount of dust coming into the area if possible. If air conditioning is not already in place, consider drawing fresh air from low dust areas (such as outside or under the mill).<br />
				</div><br />
				<div>
					<b>C. Carriage Electrical</b><br /><br />
					<b>C-1. Mill Responsibilities</b><br />
					<ul>
						<li>Provide conduit for wiring runs between the computer cabinet and the carriage.</li>
						<li>Pull and terminate all wires and cables required per system drawing package.</li>
						<li>Mount all switches required: pantograph position, set enable, others as needed.</li>
						<li>Mount carriage position encoder</li>
						<li>Mount saw deviation sensors (if included with system)</li>
						<li>Mount saw guide position sensor (if included with system)</li>
						<li>Install shunt diodes on all DC relays driven by LCI equipment.</li>
						<li>Install MOV noise suppressers across all AC solenoids driven by LCI equipment.</li>
						<li>Install a dedicated phone line into the computer room/cab.</li>
					</ul>
				</div><br />
				<div>
					<b>C-2. Electrical Noise</b><br /><br />
					Low voltage, low current high-speed electronics are quite susceptible to electrical noise. LCI equipment is designed to provide as much immunity to noise as practical. In a mill environment, some noise problems may need to be eliminated, minimized or isolated outside of the LCI supplied equipment.<br />
					To prevent operational problems caused by electrical noise, LCI recommends or specifies the following.<br />
					<ul>
						<li>A separate AC source to LCI equipment.</li>
						<li>AC to the computer shall be supplied from a regulation transformer or UPS.</li>
						<li>Separate routing of AC & DC wiring within cabinets.</li>
						<li>AC solenoids powered from LCI equipment must have MOV R.F. noise suppressers across each solenoid.</li>
						<li>If discrete relays are used, the coils must have shunt diodes across each coil.</li>
						<li>Computer outputs are not to be connected to components not supplied or approved by LCI.</li>
					</ul>
				</div><br />
				<div>
					<b>C-3. Carriage Electrical Detail</b><br /><br /><br />
					To reduce electrical noise, AC and DC wiring must be run in separate conduits. Wire runs from the computer cabinet across the pantograph to the carriage must be separated into two groups – AC and DC. These groups should be physically separated by at least 6 inches. The high voltage AC group includes all carriage solenoids (dogs up/down in/out, oil pump, etc.) The low voltage DC group will include all Temposonics and servo valve wiring. Do not connect cables on the carriage to either the hydraulic valves or Temposonics probes until the wiring has been checked by the LCI Engineer during startup. LCI recommends that Hydraulic Valve and Temposonics cables be run without any additional terminations from the carriage back to the computer.<br /><br />
					Allow extra length and provide strain relief at all pivot points for the wire runs that cross over the pantograph. Where the wires cross the elbow in the center of the pantograph, leave a service loop that hangs down about 1 ½ feet. A service loop that is too small will cause premature failure of the cables.<br /><br />
					Adjust all switches to provide a contact closure when operated. There are three different types of switches and sensors that may be found in your system – Pantograph, Carriage Reference/Set Enable and Saw Guide.<br /><br />
					The <b>pantograph position switch</b> should close when the carriage passes the saw as it moves away from the load deck. The contact closure should occur when knee 2 passes the saw and must be maintained until the carriage returns to the load deck side of the saw.<br /><br />
					The <b>carriage reference</b> and <b>set enable switches</b> serve two purposes. They are used to determine a starting point for tracking the carriage as it moves up and down the track and they are used to provide additional information on when it is safe to make a set. Drawing W-XXXX-20200 shows the suggested carriage reference and set enable proximity switch locations.<br /><br />
					The <b>saw guide sensors</b> are mounted to the upper saw guide and are used to measure saw deflection. See drawing W-XXXX-20301. This is an optional system feature and may not have been included with your system.<br /><br />
					Systems with <b>saw guide control</b> will have a special Temposonics probe that is mounted along side of the saw guide with a rod that attaches to the saw guide. As the saw guide goes up and down, a magnet is moved up and down on the Temposonics probe. The purpose of this probe is to monitor the position of the saw guide so that the system can automatically set the saw guide just above the surface of the log. When mounting the Temposonics probe, it should be positioned so that magnet which slides up and down on the probe does not bottom out or come closer than a ½ inch of the end of the probe as the saw guide moves between it’s minimum and maximum height. This is an optional system feature and may not have been included with your system.<br /><br />
					The <b>carriage encoder</b> is normally attached directly to the carriage drive drum using a stub shaft and a flex coupling. It may also be connected by using sprockets with a small chain or pulleys and a cogged belt. If the direct drive method is not used, the ratio between the carriage drum and the encoder should be approximately 1:1.<br /><br />
				</div><br />
				<div>
					<b>D. Setworks Hydraulics</b><br /><br />
					<b>D-1 Mill Responsibilities</b><br />
					<ul>
						<li>Install hydraulic power unit and dump valve panel. Flush system per Section D-3.</li>
						<li>Install hydraulic positioners.</li>
					</ul>
				</div><br />
				<div>
					<b>D-2. Setworks Plumbing Schedule</b><br /><br />
					<b>2 1/2'' Bore Setworks Cylinders:</b><br /><br />
					<b>2 BLOCK CARRIAGES</b><br />
					<ul>
						<li>Pump to hydraulic safety valve package ......................... 1'' Schedule 80</li>
						<li>Carriage pressure header .............................................. 1'' Schedule 80</li>
						<li>Carriage cushion (T2) header ......................................... 1'' Schedule 80</li>
						<li>Carriage return (T1) header ............................................ 1'' Schedule 40</li>
						<li>Carriage to tank .............................................................. 1'' Schedule 40</li>
					</ul>
					<b>3 AND 4 BLOCK CARRIAGES</b><br />
					<ul>
						<li>Pump to hydraulic safety valve package ......................... 1'' Schedule 80</li>
						<li>Carriage pressure header .............................................. 1 1/4'' Schedule 80</li>
						<li>Carriage cushion (T2) header ......................................... 1'' Schedule 80</li>
						<li>Carriage return (T1) header ............................................ 1 1/4'' Schedule 40</li>
						<li>Return to tank........ ........................................................ 1 1/4'' Schedule 40</li>
					</ul>
					<b>3 1/4'' Bore Setworks Cylinders:</b><br />
					<b>2 BLOCK CARRIAGES</b><br />
					<ul>
						<li>Pump to hydraulic safety valve package ........................ 1'' Schedule 80</li>
						<li>Carriage pressure header ............................................. 1'' Schedule 80</li>
						<li>Carriage cushion (T2) header ........................................ 1'' Schedule 80</li>
						<li>Carriage return (T1) header ........................................... 1'' Schedule 40</li>
						<li>Carriage to tank ............................................................ 1'' Schedule 40</li>
					</ul>
					<b>3 BLOCK CARRIAGES - 3 1/4'' Setworks Cylinders:</b><br />
					<ul>
						<li>Pump to hydraulic safety valve package ........................ 1'' Schedule 80</li>
						<li>Carriage pressure header ............................................. 1 1/4'' Scheule 80</li>
						<li>Carriage cushion (T2) header ........................................ 1'' Schedule 80</li>
						<li>Carriage return (T1) header ........................................... 1 1/4'' Schedule 40</li>
						<li>Return to tank ............................................................... 1 1/4'' Schedule</li>
					</ul>
					<b>4 BLOCK CARRIAGES</b><br />
					<ul>
					<li>Pump to hydraulic safety valve package ........................ 1'' Schedule 80</li>
					<b>NOTE: If pump and motor capacity exceed 35 g/m use 1 1/4'' Schedule 80</b><br />
						<li>Carriage pressure header ............................................. 1 1/4'' Schedule 80</li>
						<li>Carriage cushion (T2) header ........................................ 1'' Schedule 80</li>
						<li>Carriage return (T1) header ........................................... 1 1/2'' Schedule 40</li>
						<li>Return to tank ............................................................... 1 1/2'' Schedule 40</li>
					</ul>
					Typical Hydraulic schematic drawing:<br />
					<img src={`${imgPath}hydroDrawing.PNG`} className="helpFileImg"></img>

				</div><br />
				<div>
					<b>D-3. Hydraulic Recommendations:</b><br />
					<ul>
						<li>Keep mill plumbing runs short and with as few turns as possible to minimize pressure losses in the plumbing.</li>
						<li>Use hoses to make 90 Degree turns in the mill plumbing runs. This allows for pipe expansion and contraction as well as minimizing pressure drops and trapping contaminants at turns.</li>
						<li>Use tubing with compression fittings. LCI advises against using threaded pipe because it increases the probability of leaks and contaminants.</li>
						<li>All hoses used on pressure and cushion lines are to be rated at 3000 psi.</li>
						<li>Hydraulic components are precision built units. Cleanliness during installation and maintenance is imperative to long life. All pipes, hoses, and tubing must be cleaned thoroughly and kept clean before installation between the hydraulic power unit and remote components. Use only pipe cleaned by pickling and pacifying (P.O.P.) or sandblasting to remove internal mill scale.</li>
					</ul>
				</div><br />
				<div>
					<b>D-4. Hydraulic System Startup</b><br />
					<ol>
						<li>When the plumbing and wiring have been completed, check motor rotation and fluid level. If filling is needed, a filtered pump and the quick connect filling provision should be used.</li>
						<li>Close all ball valves.</li>
						<li>Connect bypass couplings at each positioner to connect pressure hose (P) to return hose (T). Be sure to cap off the hose fittings on the cylinder.</li>
						<li>Start the power unit up at a reduced pressure.</li>
						<li>Check for leaks at the first ball valve. Manually or electrically energize the hydraulic safety valve.</li>
						<li>With pressure up on the positioner ball valves, sequentially open and close each ball valve and check for leaks.</li>
						<li>With the ball valves all closed, increase system pressure to 1800 psi and repeat steps 5 & 6.</li>
						<li>Top off the oil level, if necessary, at this time. This will ensure that all of the system oil will be filtered and that there will be sufficient oil to extend the cylinders.</li>
						<li>Start hydraulic system flushing. With system pressure to the positioner ball valves:</li>
					
					<ol type="a">
						<li>Sequentially open and close each positioner ball valve 15-20 times at 10 second intervals. Leave each ball valve closed as you complete that positioner.</li>
						<li>Sequentially open each positioner ball valve and flush through that area by itself for 10-15 minutes.</li>
						<li>Open all of the system ball valves including the flushing bypass ball valve, if present. Flush six hours minimum. Use a hammer to vibrate all plumbing while flushing</li>
						<li>Shut down the power unit.</li>
						<li>Replace the filter cartridges. Spares are provided with the system for this purpose.</li>
						<li>Start-up the power unit and begin final flushing for 1 hour minimum with all ball valves open.</li>
						<li>Shut down the power unit and make the final connections to the positioners.</li>
					</ol>
					</ol>
					Flushing the hydraulic system in this manner will remove contaminants in the oil and protect the investment you have made in a high quality positioning system. We recommend replacing filter cartridges after one (1) month’s operation and sampling the oil regularly. An oil sample should be taken after 3 months. Oil sample timing after that, should be based upon the sample results. Anytime the hydraulic system is opened, filters replaced, oil added, etc., the system should be flushed for at least two hours before operating the positioners.<br />
				</div><br />
				<div>
					<b>E. Scanner – 3D Shape Scan Systems</b><br /><br />
					<b>E-1. Mill Responsibilities</b><br />
					<ul>
						<li>Mount the upper scan beam per scanner installation drawings</li>
						<li>Mount the scanner wire duct to the support structure on the backside of the scan beam.</li>
						<li>Run conduit from the scanner wire duct to the computer cabinet.</li>
						<li>Pull laser and fiber optic cables back to computer cabinet.</li>
					</ul>
				</div><br />
				<div>
					<b>E-2. Scanner Support Structure and Wire Duct</b><br /><br />
					When designing the structure that will support and position the scan bar, select a scanner mounting that is as free from vibration as possible. Avoid tying the support structure into mill steel, particularly if there is significant vibration from other equipment. If vibration is a concern, consider suspending the scan beam from the roof or building a scanner support structure from the ground up on an isolated concrete pad.<br /><br />
					In addition to the scan bar, there is a wire duct that is normally mounted on the back side of the support structure behind the scan bar. This wire duct carries power supply and data cables for the individual laser scanners and must be mounted within 2 feet of the scan heads. To help prevent damage to fiber optic cables, LCI recommends using a 1 ¼” diameter conduit and a 4” or larger radius for the turns.<br /><br />
				</div><br />
				<div>
					<b>E-3. Scan Bar Location</b><br /><br /><br /><br />
					Your system drawings show a preliminary location for the laser scan heads relative to the carriage. The scan heads will be mounted on a metal scan bar that can pivot to improve the scanning angle.<br /><br />
					Accurate placement of the scan bar is essential in obtaining consistent solutions and maximum recovery from your system. The scan bar must be level and parallel to the saw line. Refer to your system drawings (M-XXXX-40031) for the dimensions. For the most effective scanning, the log being scanned needs to lie between 90 and 120 inches (7.5 to 10 feet) from the scan heads and be positioned linearly so that at least one laser is toward the saw side of the log index line. For a flat carriage, the scan bar will normally be mounted at an angle of about 30 or less from horizontal. The location and angle of the scan bar will be engineered by LCI to maximize the effectiveness of the scanner over the widest range of log diameters.<br /><br />
					NOTE: When mounting the scan bar, the scan bar should only be tack welded into position until an LCI engineer can verify its position during startup.<br /><br />
				</div><br />
				<div>
					<b>F. Scanner – Photocell Systems</b><br /><br />
					<b>F-1. Mill Responsibilities</b>
					<ul>
						<li>Mount the lower scanner housing per scanner installation drawings (M-XXXX-6001, M-XXXX-6002)</li>
						<li>Mount upper scan beam per scanner installation drawings.</li>
						<li>Wire PEC transmitters and receivers.</li>
						<li>Connect blower and needed duct work to lower scanner housing.</li>
					</ul>
				</div><br />
				<div>
					<b>F-2. Photocell Scanner Assembly Installation</b><br /><br />
					The photocell scanner supplied by LCI uses Banner SM31 photoelectric cells. Each PEC location consists of a transmitter and a receiver. The transmitter is part number SM31EL. The receiver is part number SM31RL. The setup required is on receivers only.<br /><br />
					Receivers obtained from LCI will be set up as follows; light operate, maximum gain and aperture AP31040V installed.<br /><br />
					Transmitters are installed within the enclosed lower scanner housing. The wire connections are: blue to common and brown to +24VDC.<br /><br />
					The receivers are mounted on the upper scanner beam. The wire connections are: blue to common, brown to +24 VDC, white to signal, and black is not used.<br /><br />
				</div><br />
				<div>
					<b>F-3. Scan Line Location</b><br /><br />
					There are several factors that have an influence on where the scan line should be located. In all cases, excellent scanner operation has resulted when the scan line is in the neighborhood of 1 inch on the carriage side of, and parallel to the saw line. The location selected for your mill is shown on drawing M-XXXX-6002.<br /><br />
				</div><br />
				<div>
					<b>F-4. Locating the lower Scanner Housing</b><br />
					<ol>
						<li>To get the lower scanner housing installed, it must be oriented properly in three dimensions.</li>
						<ol type="a">
							<li>Spacing between segments. Most lower scanner housings are separated into two or more segments. Care must be taken to properly locate the scanner elements adjacent to the log turner to maintain proper photocell spacing as called out on system drawing M-XXXX-6001.</li>
							<li>The back of the lower scanner housing should be vertical.</li>
							<li>The photocell centerline must be located as shown on drawing M-XXXX-6002.</li>
						</ol>
						<li>To properly install the lower scanner housing, we suggest that the two housing ends adjacent to the log turner be located first and properly spaced per drawing M-XXXX-6001. The following information is needed to locate the scanner housing relative to the saw line.</li>
						<ol type="a">
							<li>With a band mill (or circle) saw in place, measure from the end of the last knee
							base to the saw. _________</li>
							<li>From drawing M-XXXX-6002 locate the distance from the saw line to the scan
							line. _________</li>
							<li>Subtract distance B from distance A. This is the distance from the reference
							knee to the scan line. _________________</li>
							<li>The photocell centerline to the back of the lower housing is 1.15''. Add distance
							C to 1.15'' to find the distance from the end of the reference knee to the back of
							the lower housing. _______________</li>
							By measuring from the end of the knee to a level, it is now quite simple to put the
							housing in place. Avoid using the flat rail as a reference since it may not be parallel
							to the V-Rail.<br /><br />
							In the example shown, we picked a three-knee carriage with knee three 1.25'' from a
							strained up band mill.<br />
						</ol>
						<b>Example:</b>
						<ul>
							<li>Knee-3 measured to saw equals 1.25''.</li>
							<li>Drawing M-XXXX-6002 Saw to photocell centerline is .65''.</li>
							<li>Calculate Knee-3 to photocell centerline (1.25''-.65'') .60''</li>
							<li>Calculate Knee-3 to back of housing (1.15'' +.60'') 1.75''</li>
						</ul>
					<img src={`${imgPath}sawToCell.PNG`} className="helpFileImg"></img>
					Depending on what tools are available and your personal preference, you may want
					to use a long level clamped to the housing and a tape measure, or clamp an
					extension onto the knee and use a short level and plumb bob.
					We suggest tacking the ends of the housing next to the turner first. When the
					housing is true end-to-end, complete welding it down.<br /><br />
					<li>To locate the upper scanner frame, drop a plumb bob from the center of the receiver
					lenses at each end of that frame section. Position the receiver frame such that the
					plumb bobs are centered in the transmitter openings. The receiver frame can now
					be tack welded at the ends. To keep the center of the receiver frame from moving, a
					brace is usually installed. Again, drop a plumb from a receiver in the center of the
					scanner, adjust for position and weld.</li>
					<b>Note</b> that when the scanner is installed in this location the carriage bases cannot extend over the scanner.
					</ol>
					Typical installation drawings:<br />
					<img src={`${imgPath}typicalDrawing1.PNG`} className="helpFileImg"></img>
					<img src={`${imgPath}typicalDrawing2.PNG`} className="helpFileImg"></img>
				</div><br />
			</article>
		)
	}
}


export default SystemInstall;
