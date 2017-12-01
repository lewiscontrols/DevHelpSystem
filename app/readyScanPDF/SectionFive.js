import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'

const imgPath = './app/img/';

class SectionFive extends Component {
   
	render() {
		return (
			<article className="artPDF">
				<div>
					<b>SECTION V. SYSTEM OVERVIEW AND SAWYER’S CONSOLE</b><br /><br />
					Reliable system design, proper maintenance tools and accurate drawing packages, are
					all important part of your system. The final item left to enable mill personnel to
					effectively maintain the system is providing the information needed to understand the
					system, the subsystems and their interfaces.<br /><br />
					<b>A. Systems and subsystems interface</b><br /><br />
					A block diagram illustrating the various subsystems is included in this section to
					assist in visualizing the interfaces. The heart of the system is the Windows
					based computer. It operates with real-time extensions, runs the cutting program
					software, watches all the sub-systems that provide input information, processes
					the information, sends instructions to subsystems, and provides the Windows
					user interface.<br />
					<img src={`${imgPath}subSystem.PNG`} className="helpFileImg"></img>
				</div><br />
				<div>
					<b>A-1. Windows User Interface</b><br /><br />
					The computer is used to view and change system parameters and mill specific
					information using the familiar Windows environment. It also is used for real-time
					troubleshooting, and to maintain tally databases (if any). The standard PC
					keyboard, monitor and mouse (or mouse equivalent) are used along with a touch
					screen for simplified navigation among menus.<br /><br />
					<b>A-2. Sawyer Display subsystem interface</b><br /><br />
					The sawyer display is a standard VGA display, usually LCD (flat panel) type,
					operating as the 2nd display in a 2-display windows system. It normally displays
					log and scanner data for the sawyer, but may also be used to display any
					information that is available to the system. This is especially useful during
					troubleshooting, when other real-time data may be useful.<br /><br />
					<b>A-3. Carriage positioning detection switches</b><br /><br />
					There are generally three switches used for carriage position detection functions.
					They are limit switches and proximity switches. Closing the switch mechanically
					or electronically completes a circuit, allowing current to flow through the system.
					The system can read no current (open) as well as current (closed) to determine
					the status of a switch.<br /><br />
				</div><br />
				<div>
					<b>A-4. The Scanner subsystem interface</b><br /><br />
					The laser scanner gathers data by determining the distance of the lasers as they
					shine on the log. This data is sent directly to the PC via fiber optic cables. As
					the log moves, the lasers will gather log data at one-inch intervals.
					<b>WARNING: Laser radiation from the scan heads can be damaging to the
					eye. Never look directly into the scan heads when the lasers are on. Use
					caution when working on the carriage. The red lasers are visible to the eye.
					It is recommended that the lasers be turned off whenever someone is
					working on the carriage.</b><br /><br />
					<b>A-5. The Sawyer Console interface</b><br /><br />
					The sawyer console interface is a combination of digital inputs and outputs. The
					input interface is located in the console, along with the lamp output interface
					circuitry. The subsystem in the console is connected to the computer using a
					high-speed serial connection.<br /><br />
					The sawyer console switches may be interfaced to the PLC by using
					preprogrammed spare inputs and outputs, using the existing serial interface and
					thus avoiding the use of extra wires between the console and the computer. In
					the rare event that a direct connection is required, note that the PLC is operated
					as a low-true logic system. As such, it expects to see 0 V input through the
					switch contacts to cause a response.<br /><br />
				</div><br />
				<div>
					<b>A-6. The Computer to PLC interface</b><br />
					The Programmable Logic Controller (PLC) subsystem interface is a digital output
					interface from the PC computer. An example of our digital output circuit is
					provided for ease of understanding. The circuit and interface works as follows:
					<ul>
						<li>The computer instructs the digital I/O terminator board to output a specific bit.</li>
						<li>The instruction is carried to the board via ribbon cable</li>
						<li>The output LED then lights (it would always be lit if the output wire was shorted
						to ground)</li>
						<li>The digital I/O terminator board outputs the bit at zero volts (true)</li>
						<li>The zero volt output is fed through the wire to the PLC causing the PLC to
					recognize and react to the output.</li>
					</ul>
					<b>A-7. Shaft encoder interface</b><br /><br />
					LCI uses a quadrature type of encoder that provides two square wave signals to
					the computer. By looking at the phasing of these signals the shaft encoder
					interface board can tell which direction the encoder is turning. The counter on
					the interface board then counts up or down to track carriage travel.
					The encoder requires +5 to +15V and DC ground to operate. The encoder cable
					terminates on the Shaft Encoder Input Terminator on the back panel, where the
					signal is converted to a ribbon cable attachment. The ribbon cable feeds directly
					to the PC.<br /><br />
				</div><br />
				<div>
					<b>A-8. Linear Positioner interface</b><br /><br />
					This interface consists of hydraulic cylinders, each normally bored for a Temposonic
					position sensor, with the sensor, hydraulic valve and manifold, and the associated
					cables needed to connect to the setworks control system. The basics of the closed
					loop linear positioner system are:<br />
					<ul>
						<li>The computer decides to change the cylinder rod position. It sets the analog
							drive voltage to reposition it in or out. This sign of the voltage determines the
							direction; the magnitude of the voltage controls the amount of opening (velocity,
							when the rod is free to move).</li>
						<li>The computer continuously obtains rod position information from the
							Temposonic interface. The computer compares the current position with the
							desired position and updates the control voltage to the valve as required to bring
							the positioner to the desired final position.</li>
						To complete the interface these things must be working properly.<br />
						<li>The positioner power supplies (+ 15V)</li>
						<li>The valve power supply (+ 24V)</li>
						<li>The cylinder control valve</li>
						<li>The Temposonic probe</li>
						<li>The valve control cabling</li>
						<li>The Temposonic cabling</li>
						<li>The hydraulic power system</li>
						<li>The PLC (to open the HSV (hydraulic safety valve))</li>
					</ul>
				</div><br />
				<div>
					<b>A-9. The Programmable Logic Controller</b><br /><br />
					The PLC interface to the outside world is a 115VAC interface. It is used to drive
					solenoids, motor starters, etc. in accordance with inputs from the computer or
					directly from switch inputs.<br /><br />
					A PLC circuit can generally be looked at in the same way as a relay with a DC
					solenoid and AC contacts. If the computer wants to send the dogs to the up
					position, it sends a DC signal (zero Volts) to the PLC. The PLC in turn energizes
					the Dogs Up outputs that connect 115VAC through a fuse to one side of the dogs
					up solenoids. The other side of the dogs up solenoids is connected to the neutral
					line of that AC circuit.<br /><br />
					In some cases, more than one input is needed to cause an output. Those
					circuits can be considered as relay contacts in series, with the last set of contacts
					connected to the output.<br /><br />
				</div><br />
				<div>
					<b>B. Faces and Axes</b><br /><br />
					To fully understand the way the system operates, we need to define some terms.
					A <b>face</b> is an open or unopened surface of the log that would be presented to the
					head saw. In our terminology, the first face on a new log is called <b>1F</b>, or <b>1 Front</b>.
					If the sawyer opens the log and makes a 180 degree turn, he would then be
					sawing <b>1B</b>, or <b>1 Back</b>. At this point, the log is open on two opposite faces. The
					next face opened, whether he turns the log one quarter turn down or three
					quarter turns, becomes <b>2F</b>, or <b>2 Front</b>. The final face becomes <b>2B</b> or <b>2 Back</b>.<br /><br />
					You may have noticed the log has been divided into two parts or axes. The first
					axis consists of sawlines running from 1F through 1B and the second axis
					consists of sawlines running from 2F through 2B. In a simple cant sawing
					operation axis 1 will contain a dimension width cant, 6", 8", etc. Axis 1 generally
					will also have one or more side boards to utilize the wood not needed for the
					cant. Axis 2 breakdown would normally consist of board thicknesses. The
					controls would be set up to make board thicknesses, 1", 2", etc. The boards may
					be computed as headrig sawlines, packages of boards for a resaw, or as cants
					for a gang.<br /><br />
						<center><b>Axis Memories</b></center>
					<img src={`${imgPath}axisMemory.PNG`} className="helpFileImg"></img>


					The normal face sequence is set up by the mill through the windows interface
					using the <b>Auto Face</b> selection in the Setup Options / Runtime Options / Opening
					Face Parameters submenu. As long as the sawyer turns logs as anticipated the
					system will remain on the proper axis and face. If the sawyer turns a log
					differently, he must tell the computer what he has done.<br /><br />

					For Example: Mill normally turns 180 degrees from 1 front<br />
					<ul>
						<li>Auto Face sequence is 1F, 1B, 2F, 2B</li>
						<li>On a large log the sawyer decides to turn 90 degrees down instead of
						180 degrees</li>
						<li>Before scanning on the second face, he must press the 2F button on the
						console</li>
						<li>In most instances the sawyer knows ahead of time that he will need to
						override the auto face selection and can preset the next face (in this
						case 2F) as he is moving the carriage back to turn the log.</li>
					</ul>
					<b>Note</b> that if an unsawn side of the log is against the knees, the side toward the
					saw line is always a front face (either 1F or 2F). Conversely, if a sawn side of the
					log is against the knees, the side toward the saw is always a back face (1B or
					2B). If a sawyer goes back to an axis for the 5th or 6th side sawing, he would
					alternate between 1B and 2B, never returning to a front face.<br />
					<img src={`${imgPath}consoleImg.PNG`} className="helpFileImg"></img>
				</div><br />
				<div>
					<b>C. Button Light Description</b><br /><br />
					The sawyer’s console is designed only after mill personnel are able to give their
					input on the selection and placement of buttons. Therefore every console is
					unique to the installation. The actual buttons and their placement will vary.
					However, the buttons on the console are arranged in logical groups. The actual
					placement and orientation of those groups depends in part on mill preference.<br />
					<img src={`${imgPath}consoleImgTwo.PNG`} className="helpFileImg"></img>

				</div><br />
				<div>
					<b>C-1. Group 1:</b> Control Power, Setworks Lock Out, Set Enable, Scan Set Disable,
					Hydraulic Pressure, Hydraulics Enabled, Set Achieved, Stack Computed, Knees
					Tapered, Console Status lights, Saw Deviation.<br />
					<ol type="a">
						<li><b>Control Power:</b> Mushroom Maintain - This large red switch serves as an
						emergency stop. Pushing down on the mushroom will remove all power from the
						carriage, cause the hydraulics to shut down, stop the knees from moving and
						cause the sawyer’s console to turn off. <b>Note: Because single solenoids re
						frequently used on carriages, when power is shut off to the carriage, board
						dogs may come down and other mechanical parts on the carriage may
						move – <u>use caution</u></b></li>
						<li><b>Setworks Lock Out:</b> Key Switch - This locking switch enables or disables
						setworks operation by supplying or removing A.C. voltage from the solenoids
						driven by the PLC. This switch should be in the Lock Out position whenever the
						sawyer leaves his seat, or when anyone is on or around the carriage.
						<b>WARNING: This switch does not constitute an official OSHA Lock out !!!
						Mill established lockout procedures should always be followed.</b></li>
						<li><b>Set Enable - Indicator Light:</b> Whenever the carriage is at either end of the
						track and the carriage frame blocks one of the set enable (proximity) switches,
						the light will be on and the computer will be able make sets, jog the knees, etc.</li>
						<li><b>Scan Set Disable - Indicator Light:</b> This light will come on whenever the
						system thinks that the log is close to or in the saw. Note: In some cases, it may
						be possible to have the log in the saw while one of the set enable switches is still
						blocked (and the Set Enable light still on). In this case, the system will still stop
						the sawyer from making any sets or jogging the knees.</li>
						<li><b>Hydraulic Pressure - Indicator Light:</b> The input for this light comes from a
						pressure switch located after the safety valve (but before the knees) in the
						hydraulic circuit. When the light is on, it indicates that there is oil pressure at the
						knees.</li>
						<li><b>Hydraulics Enabled – Indicator Light:</b> This light will be on when the system
						opens the Hydraulic Safety Valve allowing oil to flow to the carriage. If the
						system shuts down the hydraulics for any reason, this light will be off.</li>
						<li><b>Set Achieved - Indicator Light:</b> This light is on when the knees and slabber
						have moved to the commanded set position</li>
						<li><b>Stack Computed - Indicator Light:</b> This light is on whenever the sawyer
						has computed a stack for an axis.</li>
						<li><b>Knees Tapered - Indicator Light:</b> This is illuminated whenever the knees
						are in a tapered position relative to the saw line.</li>
						<li><b>Console Status – Indicator Lights:</b> A series of 5 small LEDs are located
						next to the system status lights. These lights: +5, +24, Rx, Tx, and Run are
						diagnostic lights for the console. Under normal conditions, all these lights will be
						on. Rx and Tx may appear to be dimmer than the other lights.</li>
						<li><b>Saw Deviation – Indicator Lights:</b> On systems with the saw deviation
						option, these lights indicate when the saw has exceeded the limits set in the system software. The warning light will come on when the lower limit has been
						exceeded and the hazard light will light when the upper limit has been exceeded.</li>
					</ol>
					<img src={`${imgPath}consoleImgThree.PNG`} className="helpFileImg"></img>

				</div><br />
				<div>
					<b>C-2. Group 2:</b> Saw Guide Auto, Saw Guide Up/Down, Slabber Auto, Slabber Sets,
					Slabber Retract, Slab Attach, Individual Knee Controls, Cancel Taper, Limit
					Override, Skew Left, Skew Right.<br />
					<ol type="a">
						<li><b>Saw Guide Auto – Lighted Pushbutton:</b> The Saw Guide Auto feature
						allows the system to automatically position the saw guide for the sawyer based
						on the scanned diameter of the log. If the guide is too high or too low, the
						sawyer may override the system by using the Saw Guide Up/Down switch
						located on the side of the sawyers console. If Saw Guide Auto is on, once the
						guide position has been overridden, the guide will stay in position until a new
						face has been scanned at which point it will be automatically repositioned. If
						Saw Guide Auto is turned off, the sawyer will be responsible for positioning the
						guide.</li>
						<li><b>Slabber Auto – Lighted Pushbutton:</b> With the Slabber Auto button on, the
						slabber will automatically set to the thickness of the board being taken by the
						slabber. Turning it off will force the sawyer to manually select slabber sets. The
						sawyer can override a set without taking the system out of automatic simply by
						pushing one of the slabber set buttons. When the slabber pass is completed, the
						system will return to the automatic mode of operation.</li>
						<li><b>Slabber Sets – Lighted Pushbuttons:</b> The slabber set buttons, marked 0 –
						5 allow the sawyer to force the slabber to a predetermined position. Pushing
						button “0” will cause the slabber to be moved to a position even with the sawline.
						The values for buttons 1-5 will be the first 5 board sets in the Board and Cant
						Sizes Setup parameters. (Main Menu / Lumber Options / Board and Cant Sizes
						Setup). If the slabber is in auto, the set lights will come on when the slabber set
						matches the size for that button.</li>
						<li><b>Slabber Retract – Lighted Pushbutton:</b> Pushing the Slabber retract button
						will cause the slabber to go to the slabber retract position as defined in the
						system parameters. Pushing it a second time will cause the slabber to go to its’
						reverse limit.</li>
						<li><b>Slab Attach – Lighted Pushbutton:</b> The state of this button determines how
						the opening face boards will be cut. If Slab Attach is on, the knees will position
						the log so that the saw cuts the slab and the first board on the first pass. If it is
						off, the log will be positioned so that the slab is cut off first and then the board will
						be cut on the next pass. For systems with a slabber, the Slab Attach button will
						normally be on.</li>
						<li><b>Individual Knee Control - Momentary Pushbuttons:</b> Each knee control
						group consists of three buttons: Disable, Jog forward and Jog Reverse. The
						disable button is used to temporarily take a knee out of service. A knee is
						disabled by jogging it knee back until it hits the reverse limit and pressing the
						disable button. Depending on the null of the hydraulic valve, disabled knees may
						drift towards the saw line. <b>To prevent disabled knees from drifting forward,
						close the ball valve on the hydraulic pressure line for that knee or chain the
						knee so it cannot move forward</b>. The Disable button is red and is labeled with
						a ''D'' and the knee number (for example, the button to disable knee 2 reads
						“D2”). When a knee is disabled, the button will light.
						The individual knee taper buttons are labeled with an arrow that indicates the
						direction to move the knee. The taper buttons may be used to move an
						individual knee to help it conform to the shape of a log. When the taper buttons
						are lit, that indicates that the computer thinks the knees are tapered. If the taper
						buttons are flashing, the system has detected a drive runaway condition. (See
						limit override)</li>
						<li><b>Cancel Taper - Momentary Pushbutton:</b> This button, when pressed, forces
						all taper out of the knees. It is done in two stages. If you press it once, all skew
						taper is removed from the knees but any individual knee taper is kept. If you
						press it a second time, all individual knee taper is canceled.</li>
						<li><b>Limit Override - Lighted Pushbutton:</b> This switch, when pressed, will allow
						the sawyer to move positioners beyond the normal setworks limits or bring them
						back within limits. It must be held down until the drives have reached the desired
						position. If a positioner drifts beyond a limit, the sawyer must hold the Limit
						Override button down while using the jog button to move the knee to a position
						within limits. Instances where Limit Override is used include: moving a knee or
						knees when the set disable lamp is on, moving a knee that, when disabled, had
						drifted out of limits due to servo null, or when a drive runaway error has been
						experienced. <b>WARNING: Use this switch carefully, especially in correcting
						drive runaways, or moving knees in the saw zone. Limits are set in the
						system parameters to assist the sawyer in operating the machine safely.
						<i>THIS PUSHBUTTON OVERRIDES THOSE LIMITS</i>.</b></li>
						<li><b>Skew Left, Skew Right - Momentary Pushbuttons:</b> These buttons allow the
						sawyer to manually skew (pivot) the knees about the middle of the carriage.
						Under normal conditions, the computer does the skew function automatically.</li>
					</ol>
					<img src={`${imgPath}consoleImgFour.PNG`} className="helpFileImg"></img>
				</div><br />
				<div>
					<b>C-3. Group 3:</b> Scanner On, Taper (Auto, Full, Half, None), Calibrate, Down Time<br />
					<ol type="a">
						<li><b>Scanner on - Lighted Pushbutton:</b> This button illuminates when the scanner
						is active for a particular face. Like taper, it must be selected for each species
						and face by pressing the Face button and pressing the Scan On button. If it is
						not selected for a face, the system will not scan on that face.
						WARNING: If "scan on" is not selected for a face, the software set disable
						feature (which tracks when the log is in the saw) will not be active on that
						face.</li>
						<li><b>Taper (Auto, Full, Half, None) - Lighted Pushbuttons:</b> These buttons are
						used to tell the computer the desired taper orientation to use in calculating
						opening faces and computing runs on unopened faces. Taper rates may be
						setup either automatically or manually. Auto Taper will select a taper rate based
						on overall log taper. These taper rates are set up in using the Auto Taper Rates
						screen. (Main Menu / Setup Options / Scanner Setup / Auto Taper Rates) See
						Section 4 B-3.c.3 for more information. Full taper is sawn parallel to the bark of a
						log. Half taper is sawn parallel to the centerline of a log. Selecting No taper
						(none) causes the knees to be aligned parallel to the saw. See diagrams below.</li>
					<center><h3>Full Taper Solution</h3></center>
					<img src={`${imgPath}taperSolution.PNG`} className="helpFileImg"></img>
					<center><h3>Half Taper Solution</h3></center>
					<img src={`${imgPath}taperHalfSolution.PNG`} className="helpFileImg"></img>
					<center><h3>Zero Taper Solution</h3></center>
					<img src={`${imgPath}zeroTaperSolution.PNG`} className="helpFileImg"></img>

					<li><b>Scan Calibrate - Lighted Pushbutton:</b> Pushing this button will initiate the
					scanner calibration procedure. See section I below for a detailed procedure.</li>
					<li><b>Downtime - Lighted Pushbutton:</b> If the carriage has been inactive for a
					specified time (set up in parameter menu), downtime will begin accumulating. To
					tally this downtime to a defined reason the sawyer must follow these steps:</li>
					First press the downtime button. This can be done at any time, even before the
					computer senses a down condition. This will light the set buttons.<br /><br />
					</ol>
					Each set button is numbered starting with number one for the top left set button
					and has a corresponding downtime reason. When a set button is pressed the
					corresponding downtime category appears on the sawyer’s display. This will
					cause downtime to be counted for that reason. The set lamps will go out and the
					downtime button will blink. Downtime will continue to accumulate until the
					downtime button is pressed again. This allows the sawyer to continue to saw
					while a piece of downstream equipment such as a resaw is down. Downtime
					reasons are specified in the Main Menu / View/Report Options / Downtime
					Summary<br />
					<img src={`${imgPath}consoleImgFive.PNG`} className="helpFileImg"></img>
				</div><br />
				<div>
					<b>C-4. Group 4:</b> Species, Bark On, Grade Face, Package Modes (Single, Package,
					Resaw), Face 1F - 1B - 2F - 2B, Patterns, Boards, Cants, Multiples, Fill Mask,
					Default Set, Cancel Entries.<br />
					<ol type="a">
						<li><b>Species - Lighted Pushbuttons:</b> Each species button calls up a separate
						set of operating parameters including lumber sizes, cant priorities, prices (if
						used), turn sequences, fill mask and scan and taper settings. A mill can use the
						species buttons to actually saw different species, or they can use them to saw
						different products out of various sizes or grades of logs. See section D below for
						more information</li>
						<li><b>Bark On – Lighted Pushbutton:</b> Occasionally, when there is an equipment
						failure, logs will still have bark on them when they are brought to the carriage.
						Turning this button on will cause the system to compensate for the extra bark on
						the outside of the log by taking larger faces. The thickness of the bark is set up
						in the scanner options. (Main Menu / Setup Options / Scanner Setup / Scanner
						Options).</li>
						<li><b>Grade Face - Lighted Pushbutton:</b> When active (lit) and the sawyer opens a
						face on 'set' rather then 'compute,' this button tells the system to use an
						alternative minimum opening face width defined in the parameter menu as
						'Grade Face.' Grade Face can be selected manually by the sawyer or can come
						on automatically when the scanner detects a log that exceeds the diameter set
						for 'Auto Grade Face.'</li>
						<li><b>Package Modes (Single, Package, Resaw) – Lighted Pushbutton:</b> These
						three buttons determine how boards will be cut off the outside of the log. Single
						Mode allows only single boards to be cut from the log. Package Mode allows
						boards of the same thickness to be cut as multiples and be sent to resaw.
						Resaw mode allows the sawyer to cut any combination of multiples. These
						boards are not necessarily made up of boards of the same thickness. See
						section 4 B-3.b for more detailed information.</li>
						<li><b>Face (1F, 1B ,2F, 2B, Reset) Lighted Pushbutton:</b> 1F, 1B, 2F and 2B tell
						the sawyer which face the computer believes it is sawing. During normal
						operation, these buttons switch and light up in a pre-programmed autoface
						sequence. If the sawyer turns a log in a manner that is not consistent with his
						normal turn sequence, he must press the correct face button before continuing.
						This allows the computer to keep track of the wood remaining on each axis. The
						face buttons are also used to set up which faces are automatically scanned and
						what the fill mask contains for each axis. Under some conditions, it is desirable
						to rescan the log after the initial scan has been completed. Pushing the Reset
						button after selecting the face will cause the system to rescan when the set or
						compute button is pressed.</li>
						<li><b>Patterns (1,2,3,4,5) - Lighted Pushbuttons:</b> Patterns are an optional feature
						not found on all systems. In the parameter entries there is a table that allows the
						mill to define a series of sets and kerfs in sequence, by species. These
						sequences are then assigned to one of the five pattern buttons. Boards defined
						in the pattern set up do not have to be included in the fill mask. Whenever the
						sawyer needs to call in one of these sequences he presses the appropriate
						pattern button. Typical applications for patterns include mills that cut vertical
						grain free of heart products on their large logs, or mills that have a fairly
						consistent depth of shop lumber just inside the sapwood portion of their higher
						quality logs. In these cases the mills can call in patterns and cut their specialty
						products without having the specialty products active in their fill mask. When
						using cant matrix patterns, patterns can be used as cants by selecting them in
						the fill mask.</li>
						<li><b>Boards - Lighted Pushbuttons:</b> The 'board' buttons represent individual
						board thicknesses. They can be used singly as part of a manually entered stack.
						As with cants, the number of board buttons and their labels are defined prior to
						system delivery.</li>
						<li><b>Cants - Lighted Pushbuttons:</b> The 'cant' buttons call up a cant set, either
						as an individual entry, or as a part of a manually entered stack. The system
						honors the sawyer input. It will put whatever cant the sawyer calls for in the
						solution without regard to minimum face requirements. Cants widths are defined
						in the parameter entry tables. Normally, a mill will define cant widths for use in
						the first axis (1F, 1B) such as 4'' and 6''. The number of cant buttons and their
						label requirements are defined during the order engineering process.</li>
						<li><b>Multiples - Lighted Pushbuttons:</b> These buttons are not present in all
						systems. They are used by the sawyer to force a package with two or more like
						boards, separated by resaw kerf. The sawyer can use the 2x, 3x, and 4x buttons
						in single mode or he can use them to override a computer selected multiple in
						package mode.</li>
						<li><b>Fill Mask - Lighted Pushbutton:</b> The fill mask determines what products will
						be automatically selected when the sawyer presses the compute button to fill out
						the log. These products are defined by axis (1 or 2) and must be setup for each
						species. See Section F Below for more information.</li>
						<li><b>Default Set - Lighted Pushbutton:</b> This push button allows the sawyer to
						choose his 'default' board. The default board is the piece thickness that the
						system will set to if Set is pushed on a non-computed face and no board buttons
						are lit. When the default set button is pressed once, it will blink and the current
						default board size button will light. To change to a different default board simply
						press the desired button. That button will light and the previous size will go out.
						When the desired default board is lit, press the default set button again to turn it
						off. Note that each species normally has its own default set.</li>
						<li><b>Cancel Entries - Momentary Pushbutton:</b> This switch is used to back out
						size button pushes the sawyer has made. If the sawyer was entering in a stack
						to be sawn on a computed run and hit the wrong button, he would press cancel
						entries button once to remove that piece from the stack. Pressing it a second
						time removes all entries from the stack.</li>
					</ol>

					<img src={`${imgPath}handleAndFootSwitch.PNG`} className="helpFileImg"></img>
				</div><br />
				<div>
					<b>C-5. Groups Sawyers Handles and Foot Switches:</b> Backset, Jog Reverse, Jog
					Forward, Set, Compute, Dogs Up/Dn, Dogs In/Out, Other handle functions, Log
					Loader, Other Foot Switches. The buttons on the sawyers handles are fairly
					standard. Button position on the handle, and even which handle a particular button is
					on, is strictly a matter of mill preference<br />
					<ol type="a">
						<li><b>Backset - Momentary Pushbutton:</b> Pressing Backset will cause the knees to
						back off the current active set (computed, selected from console, or default board)
						from the last sawline.</li>
						<b>WARNING:</b> If the sawyer has jogged the knees forward or reverse after the last set
						was achieved, Backset will still back off the current set from the last sawline. If the
						sawyer has jogged reverse the knees may actually move forward on the Backset
						command.<br /><br />
						<li><b>Jog Reverse Momentary Pushbutton:</b> The sawyer uses this button to
						physically position or reposition the knees in the reverse direction. All knees jog in
						unison.</li>
						<li><b>Jog Forward Momentary Pushbutton:</b> The sawyer uses this button to
						physically position or reposition the knees in a forward direction. All knees jog in
						unison.</li>
						<li><b>Set - Momentary Pushbutton:</b> The sawyer uses this button to either initiate a
						minimum opening face scan without a computed solution or to set for the next board.
						See Section E below for more information</li>
						<li><b>Compute - Momentary pushbutton:</b> The sawyer uses the compute button to
						compute a stack. It could be to open a new face to a computed solution, or to have
						the system calculate a computed run to finish a log after grade has been removed.
						Once on a computed run for a face, the compute button acts like the set button. See
						section E below for more information.</li>
						<li><b>Dogs Up/Dn, Dogs In/Out – Momentary pushbuttons:</b> These buttons are used
						to raise and lower the dogs as well as move them in and out.</li>
						<li><b>Other handle functions – Momentary pushbuttons:</b> Cant Kickers, Cant
						Flippers, Brownsville Turners are examples of various functions frequently found on
						the sawyers handles.</li>
						<li><b>Log Loader – Foot Switch:</b> The log loader serves two purposes; to load the log
						onto the carriage and to signal the computer that a new log is being loaded.
						h. Other Foot Switches may be present using spare outputs configured with your
						system. These may include such things gates or tipples for lumber handling.</li>
					</ol>
				</div><br />
				<div>
					<b>D. Species</b><br /><br />
					Multiple species capability is included as part of the Lewis system. By pressing a
					different species button a sawyer can call in an entirely different set of sawing
					rules including different:<br />
					<ul>
						<li>set size values</li>
						<li>board or cant selections by axis in the fill masks</li>
						<li>sawing modes, (single, resaw by axis)</li>
						<li>solution type, (cant matrix)</li>
						<li>auto face sequences</li>
						<li>scanning rules</li>
					</ul>
					Typical examples of how species can be used effectively would include mills that
					actually bring in mixed species logs during a shift, or cutting separate products
					out of each species.<br />
				</div><br />
				<div>
					<b>E. Set and Compute</b><br /><br />
					On the sawyers handles you will find two buttons, ''set'' and ''compute.'' Both will
					initiate system actions. When to set and when to compute should be fully
					understood by the sawyer. The following is a chart that outlines the system
					responses for set and compute actions.<br /><br />

					<table>
					  <tr>
					    <th>CONDITION</th>
					    <th>ACTION</th> 
					    <th>SYSTEM RESPONSE</th>
					  </tr>
					  <tr>
					    <td>Unopened Face</td>
					    <td>Press Set</td>
					    <td>System will scan and set to a minimum opening
						face. <b>Note:</b> MOF may be altered with user
						parameters and may actually be longer or wider
						than anticipated, if certain features such as
						<b>tradeoff depth or auto grade face</b> are active.</td>
					  </tr>
					  <tr>
					    <td>Opened Face
					No Computed Run:</td>
					    <td>Press Set</td>
					    <td>System sets off either the set size selected by the
					sawyer or a default board</td>
					  </tr>
					  <tr>
					    <td>Opened Face
					Computed Run:</td>
					    <td>Press Set</td>
					    <td>The next board in the computed run will be set off
					for sawing. <b>NOTE:</b> The system will not normally
					allow a cant to be set off on front faces.</td>
					  </tr>
					   <tr>
					    <td>Opened Face
					Computed Run
					Size pressed:</td>
					    <td>Press Set</td>
					    <td>If the alternate size chosen is in the computed run,
					the system will pull it from the stack and set it off,
					moving the original size to the ''next'' position in the
					run. If the alternative size is not in the stack, the
					computed run is cancelled and may need to be
					recomputed later. This will result in a shim line on
					back faces (1B, 2B).</td>
					  </tr>
					   <tr>
					    <td>Unopened Face 1F:</td>
					    <td>Press Compute</td>
					    <td>The system will scan and set taper for 1F, and will compute a whole log solution based on the solution
					option chosen and the active fill mask choices for
					that axis.</td>
					  </tr>
					   <tr>
					    <td>Unopened Faces:</td>
					    <td>Press Compute</td>
					    <td>The system will scan and set taper for 1B, 2F, 2B the chosen face and will compute the remainder of
					the log based on the solution option chosen and
					active fill mask choices for that axis. The sawyer
					can also manually pre-select a cant and/or cant and
					board stack before pressing compute. Remaining
					wood is filled automatically fro m active fill mask
					sizes.</td>
					  </tr>
					   <tr>
					    <td>Opened Faces
					No computed run:</td>
					    <td>Press Compute</td>
					    <td>The system will select a cant and stack in sideboards from the fill mask until no size 1B, 2B
					will fit. The system will set off the shim.</td>
					  </tr>
					   <tr>
					    <td>Opened Faces
					Computed run:</td>
					    <td>Press Compute</td>
					    <td>Acts like 'set' and will cause the next size in the run to be set off.</td>
					  </tr>
					</table>
				</div><br />
				<div>
					<b>F. The Fill Mask & Fill With Last Board Parameter</b><br /><br />
					Throughout this manual you will find references to "the fill mask." Boards must
					be entered into the fill mask for each axis of each species. The fill mask should
					include all products that you typically want the computer to automatically include
					in a computed run for a particular species.<br /><br />
					In the Species Setup screen (located in the Lumber Options menu) is a checkbox
					called Fill With Last Board. If the checkbox is unchecked when the sawyer
					presses compute, any remaining wood is filled with boards that have been
					entered into the fill mask. The computer will attempt to fit the board with the
					largest size number in the fill mask as many times as it will fit, then will try the
					next smallest-numbered board, and so on. Boards not in the fill mask can only
					appear in a computed solution if they are manually selected by the sawyer (or
					are part of a larger pattern in systems where sawing patterns are used).<br /><br />
					If the Fill With Last Board checkbox is checked when the sawyer presses
					compute, all the remaining wood is filled with the last board the sawyer entered
					into the stack. However, when there is not enough wood left to fill with any more
					of this (last) board, the computer will attempt to fit the largest board form the fill
					mask that will fit in the remaining space and will work until no more fill mask
					boards will fit.<br /><br />
					The shim is taken with the slab when compute is pressed on an unopened face.
					If compute is pressed on a face that is already cut, a separate shim will be
					computed. If the system is equipped with a slabber, the slabber will take the
					shim and the saw the first board on the same pass. If no slabber is in use, an
					extra line will be required to take the shim.<br /><br />
					<b>To set the Fill Mask:</b><br />
					<ol>
						<li>Select a species and press a face button to define the axis. (For example, 1F
						for axis 1, 2F for axis 2)</li>
						<li>Press the Fill Mask button. The boards and cants that are currently in the fill
						mask for that species and axis will light up. Pressing a lit button will remove
						that set from the fill mask, pressing an unlit button will put that set size in the
						fill mask as an active choice.</li>
						<li>All the active choices should be lit and all the inactive choices should be unlit.
						<li>Usually both boards and cants should be selected in the axis 1 fill mask.</li>
						<li>Repeat the procedure for axis 2. In most cases, only board sizes are active
						because cant width was established on axis 1. If the cant is actually</li>
						dimensioned in both axes, e.g. a tie, timber, or pallet cant, then axis 2 may
						also contain a cant size.</li>
						<li>Press the fill mask button again to turn off the lamp and resume normal
						operation.</li>
					</ol>
				</div><br />
				<div>
					<b>G. Stack Entry</b><br /><br />
					In many grade mills and quite a few dimension mills a sawyer needs to have the
					ability to manually enter a stack. He may have a few products or small orders to
					fill that are not included in a day’s normal production, or he may see the
					opportunity to take some high value products that werent predictable when he
					first opened a log.<br /><br />
					The Lewis system allows a sawyer to do this quite easily and still lets him use the
					normal set and compute routines. For illustration, we will discuss stack entry on
					a back face first.<br /><br />
					In the Species Setup screen (located in the Lumber Options menu), there is a
					checkbox, Fill With Last Board. In essence, a question is being asked: Does the
					sawyer want to fill with the last board chosen? This parameter determines how
					the wood not used by the sawyer entered stack is to be filled.<br /><br />
					If Fill With Last Board is checked, the sawyer can enter any combination of cants
					and boards, singly or using his multiple buttons ''2x,3x,4x'' to cause the headrig to
					make resaw packages. The system will then stack them in the order they were
					entered. When he has entered his last board and presses the ''compute'' button,
					the system will enter his stack and fill any remaining wood with the last board in
					the stack. When there is not enough wood to fit another (last) board, the system
					will find the largest active fill mask board that will fit in the available space and
					work from there until no fill mask board will fit. The shim is taken with the slab if
					the stack entry/compute was on an unopened face. If the stack was entered and
					computed on an opened face, a shim line will be computed.<br /><br />
					If Fill with Last Board chosen is set to no (unchecked), the stack that the sawyer
					enters stays exactly how he enters it. Any additional fill boards needed to utilize
					the wood are picked from the fill mask. His last chosen board is not always
					repeated.<br /><br />
					If the sawyer enters a stack on the front face, the cant he chooses will be
					centered and the sideboards he chooses will be added to both sides of the log.
					Normal fill rules apply to take care of any excess wood. The sawyer entered
					boards are stacked from the slab in, in the order they were pressed.<br /><br />
				</div><br />
				<div>
					<b>H. Sawyers Tutorial (How to Saw a Log)</b><br /><br />
					Depending on what type of logs you process and your production goals, such as
					grade and dimension, the Lewis system can be set up to handle most sawing
					processes. After a short adjustment period, the sawyer will learn to use the ''set''
					button and the ''compute'' button at appropriate times.<br /><br />
					To refresh your memory, ''set'' on an unopened face will trigger the scan process
					and produce a ''minimum'' opening face.<br /><br />
					''Set'' on an opened face will cause the default board or the selected board, either
					manually entered or part of a computed run, to be set off.<br /><br />
					The ''compute'' button tells the computer to use the chosen method of
					optimization (value driven, cant matrix) and the cants and boards selected in the
					''Fill Mas'' to arrive at a computer driven solution for the whole or partially
					processed log. This computed run will be displayed on the sawyers display.<br /><br />
				</div><br />
				<div>
					<b>H-1. Simple Dimension Sawing</b><br />
					<ol type="a">
						<li>Sawyer loads log and dogs it in place</li>
						<li>Sawyer presses ''Compute.'' The system will scan and set taper for the
						opening face</li>
						<li>Sawyer saws the first line</li>
						<li>Sawyer checks his display, and if he agrees with the next cut, presses the
						''Set'' button</li>
						<li>Sawyer saws the next line and continues until a cant size is next on the cut
						list</li>
						<li>Sawyer turns the log</li>
						<li>Sawyer repeats the process for the second side, ''Compute'' followed by
						successive ''Sets''</li>
					</ol>
					<b>WARNING: There are variations to the above. The sawyer may choose to
					manually saw front faces using his set button first and compute only on back faces.</b><br />
				</div><br />
				<div>
					<b>H-2. Grade Sawing</b><br /><br />
					<ol>
						<li>Sawyer loads log and dogs it in place</li>
						<li>Sawyer presses ''Set.'' The system will scan and set taper for a minimum
						face.</li>
						<li>Sawyer saws off the slab, or slab and board if sawing ''slab attached.''</li>
						<li>Sawyer chooses the next set from the console and presses ''set'' to set it off.
						(If the indicator light for the desired board is already lit, or the desired board is
						the ''default board'', the sawyer only presses ''set.'')</li>
						<li>When out of grade for that particular face, turn and dog.</li>
						<li>At sawyer discretion, choose ''set'', ''compute'', or enter a cant size and
						board then ''compute''.</li>
						<li>''Set'' will open to a minimum face (an internal shim will likely result when
						you ''compute'' after sawing off a few grade boards.)</li>
						<li>''Compute'' will place the highest priority cant next to the knees and will fill
						remaining wood from the fill mask.</li>
						<li>Entering a cant and sideboard combination prior to ''compute'' will allow the sawyer
						to stack in a run. If ''fill with last board'' is checked in the Species Setup, the last
						board entered in the stack will fill the remaining wood until that board will not fit. The
						fill mask takes over after that. If fill with last board is unchecked, remaining wood
						between the entered boards and the cant or knees will be fit from the fill mask.</li>
						<li>For third and fourth sides, repeat (a) through (i)</li>
					</ol>
				</div><br />
				<div>
					<b>I. Scanner Calibration Procedure</b><br /><br />
					Accurate placement of faces on the log is dependent on having a good scanner
					calibration. Lewis Controls provides two different types of scanning systems; A
					laser 3D scanner and a light curtain photocell scanner. The calibration
					procedures, which are similar, are described below.<br /><br />
					<b>I-1. Laser 3D Scanner Calibration Procedure</b><br /><br />
					The 3D laser scanners provide log profile information to the computer. That
					information is used to generate a solution for the log. The distance of the scan
					heads from the saw line, coupled with the position of the knees and the scanner
					data is critical to obtaining accurate solutions. When the scanner has been
					properly calibrated, these distances will be precise leading to correct solutions.
					Automatically calibrating the scanner is a simple and quick procedure that
					assures scanner accuracy. Follow the steps below:<br />
					<ol>
						<li>Calibrate all the knees and verify that the set achieved lamp on the operator’s
						console comes on for each cut. Any knee calibration or setting accuracy
						error will be applied to the scanner calibration.</li>
						<li>Clean all “windows” on the scan heads – that is, the small round apertures
						where the lasers come out, as well as the oval cameras at each end of the
						head. Follow safety procedures and turn the scanners off prior to cleaning.
						Use a clean soft, dry cloth. If stubborn deposits are present, try using a
						window cleaner or alcohol. Do not use industrial solvents.</li>
						<li>If possible, position a log on the carriage so that all scan lines will be blocked
						during the calibration process.</li>
						<li>Make four faces on the log. The system needs a square backstand to ensure
						the log is flush against the knees, and it needs a square front and top as well.
						After making the last pass to square up the cant, leave the hydraulics on and
						refrain from jogging the knees.</li>
						<li>Position the carriage so that the cant is directly in front of the scanners.
						Press the SCAN CALIBRATE button on the operator’s console. The button
						will light indicating that the system is ready to start the calibration process.
						<li>Press the Set button to start the calibration. After a few seconds, the console
						will beep when the calibration is complete.</li>
						<b>NOTE:</b> If the cant is long enough, position the carriage so that both ends
						of the cant are beyond the end lasers. This will ensure that the scanner
						can “see” the entire cant. If the cant is too short, calibrate twice: once
						with the front of the cant just beyond the first laser, and again with the
						back of the cant just beyond the last laser.</li>
						<li>When calibration is complete, press the SCAN CALIBRATE button again and
						the lamp will go off. Check the L4 Scanner setup screen to view the results.
						(Main Menu / Setup Options / Scanner Setup / L4 Scanner Setup). Compare
						the Current and Last calibration values. You are now again ready to
						manufacture lumber and can finish cutting the cant if necessary.</li>
					</ol>
				</div><br />
				<div>
					<b>I-2 Photocell Scanner Calibration Procedure</b><br /><br />
					The photocell scanners, like the 3D scanner, also provide log profile information
					to the computer that is used for creating a solution.<br /><br />
					Automatically calibrating the scanner is a simple and quick procedure that
					assures scanner accuracy. Follow the steps below:<br />
					<ol>
						<li>Calibrate all the knees and verify that the set achieved lamp on the operator’s
						console comes on for each cut. Any knee calibration or setting accuracy
						error will be applied to the scanner calibration.</li>
						<li>Clean all the photocells – both top and bottom. Generally, the top photocells
						will not require much in the way of cleaning. For the bottom scan bar, clean
						each individual photocell. Use a clean soft, dry cloth. If stubborn deposits
						are present, try using a window cleaner or alcohol. Do not use industrial
						solvents.</li>
						<li>If possible, position a log on the carriage so that all scan lines will be blocked
						during the calibration process.</li>
						<li>Make four faces on the log. The system needs a square backstand to ensure
						the log is flush against the knees. After making the last pass to square up the
						cant, leave the hydraulics on and refrain from jogging the knees.</li>
						<li>Position the carriage so that the cant is directly in front of the scanners.
						Press the <b>SCAN CALIBRATE</b> button on the operator’s console. The button
						will light indicating that the system is ready to start the calibration process.</li>
						<li> Press the Set button to start the calibration. The system will automatically
						start the process of moving the cant back and forth (into and out of the saw
						line)</li>
						<b>NOTE: If the cant is long enough, position the carriage so that both ends
						of the cant are beyond the end photocells. This will ensure that the
						scanner can “see” the entire cant. If the cant is too short, calibrate twice:
						once with the front of the cant just beyond the first photocell, and again
						with the back of the cant just beyond the last photocell.</b><br />
						<li>When calibration is complete, press the SCAN CALIBRATE button again and
						the lamp will go off. Check the Scanner setup screen to view the results.
						(Main Menu / Setup Options / Scanner Setup / Scanner Setup). Compare the
						Current and Last calibration values. You are now again ready to manufacture
						lumber and can finish cutting the cant if necessary.</li>
					</ol>
				</div><br />
			</article>
		)
	}
}


export default SectionFive;