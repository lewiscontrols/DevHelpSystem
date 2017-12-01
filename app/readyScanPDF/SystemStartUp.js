import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'

const imgPath = './app/img/';

class SystemStartUp extends Component {
   
	render() {
		return (
			<article className="artPDF">
				<div>
					<b>SECTION II. SYSTEM START-UP & ADJUSTMENTS</b><br /><br />
					<b>A. System Start-up</b><br /><br />
					System start-up time provides an excellent opportunity for maintenance personnel to become familiar with system features and operation. Almost every part of the system is touched during start-up. As always, ensure all mill safety procedures are followed during start-up. . NOTE: Power is NOT to be applied to the system until the LCI engineer is onsite to complete the installation.<br /><br />
				</div><br />
				<div>
					<b>B. Initial Power-up</b><br />
					<ul>
						<li>Disconnect all cables going to external sources. (Console, scanner, Temposonics, shaft encoder, servo-valve, saw deviation cables, and all external AC wires to/from the PLC)</li>
						<li>Power-up the computer/setworks cabinet. Using the troubleshooting menu, verify all power supply voltages are correct.</li>
						<li>Power-down the computer/setworks cabinet.</li>
						<li>Plug in all external cables and wiring. Leave Temposonic, servo-valve, and shaft encoder cables unplugged at the mil-spec connector (carriage end).</li>
						<li>Power-up the computer/setworks cabinet. Using the troubleshooting menu, verify all power supply voltages are correct.</li>
						<li>Check power wiring to Temposonics at the carriage end of the cables.</li>
						<b>Temposonics (LH Series with DPM)</b><br />
						Pin A, Ground<br />
						Pin E, +15V<br />
						<li>Check power wiring to the servo-valves at the carriage end of the cables.</li>
						<b>Servo-valves (Bosch)</b><br />
						Pin A, +24V (may be nearly +30V)<br />
						Pin B, Ground<br />
						<li>Check power wiring to shaft encoder at the encoder end of the cable.</li>
						<b>Shaft Encoder</b><br />
						Pin D, +15V<br />
						Pin F, Ground<br />
						<li>Check power wiring to laser heads at the scan bar end of the cable (shape scan systems only).</li>
						<b>L4 Laser Heads</b><br />
						Pin J, +15V<br />
						Pin F, Ground<br />
						<li>Power-down the setworks cabinet.</li>
						<li>Plug in Temposonics, servo-valves, and shaft encoder. Plug in all other external cables and wires.</li>
						<li>Ensure that the hydraulic pressure to the carriage has been manually turned off (usually done at the accumulator).</li>
						<li>Power-up the setworks cabinet. Verify DC supplies remain at the proper voltage.</li>
						<li>Display targets and positions at the system terminal. Temposonic positioner input (current position) should be relatively stable. The position should not vary by more than a couple thousandths of an inch with the cylinder still.</li>
						<li><b>Note - During start-up, a knee may lunge or run-away as air is forced out of the system. It is strongly recommended that the carriage be parked next to the rub rail when the hydraulic pressure is turned on for the first time. Be very cautious.</b></li>
						<li>If the safety valve is working properly, enable the hydraulics and turn on the hydraulic power unit.</li>
						<li>At this point, the knees or slabber may be moved using the computer or by plugging in the Servo Test box. Generally, the Servo Test box, which is supplied with the system, will be used only when trying to troubleshoot a servo problem.</li>
						<li>Momentarily depressing the limit override button on the sawyer’s console will allow the knees to move. Continue to do this until all knee movement has stopped and holding down limit override causes no further knee movement.</li>
						<li>Move the knees to a reasonable location. You may need to hold down limit override during knee movement.</li>
						<li>Adjust the actual knee position to be “close” to where the knees actually are by using the Automatic Positioner Calibration menu.</li>
						(Main Menu/Setup Options/Startup Options/Automatic Positioner Calibration)<br />
						<li>Verify the function of all console & handle switches and indicators.</li>
						<li>Individually disable knees with dogs up and out to verify solenoid wiring. (Disabled knee dogs should go down and in. If setworks hydraulics are on, the disabled knees may creep.)</li>
						<li>Use taper buttons to position knees individually, then cancel taper.</li>
						<li>Verify set enable switch and pantograph position inputs by moving the carriage past the saw. Verify set enable on both sides of the saw</li>
						<b>Note: </b>The load deck set enable switch is also used to reference the carriage’s position.<br />
						<li>Operate dogs to verify proper function of cinch, etc.</li>
						<li>Test and adjust limits in all dog configurations.</li>
						(Main Menu / Setup Options / Runtime Options / Limits)<br />
						<li>Test function of knee disables, tapers, dog cutouts, jogs, skews and cancels.</li>
						<li>Verify that scanner inputs switch on and off without cross talk by interrupting each beam separately (photocell systems only).</li>
						<li>Test all PLC functions not tested above. (decks, sawguides, oiler, etc.)</li>
						<li>Verify encoder count decreases as the carriage moves from the log deck end toward the mill end.</li>
						<li>Calibrate encoder counts per foot.</li>
						<li>Locate guide to Knee 1 at reference.</li>
						<li>If a shape scan system, input actual laser positions.</li>
						<li>If a photocell scan system, input actual photocell positions.</li>
					</ul>
				</div><br />
				<div>
					<b>C. Hydraulics System Adjustments</b><br /><br />
					At the power unit, locate the relief valve. (normally on the top of the reservoir) Loosen the lock nut and turn the relief clockwise 6 complete turns. We are now sure that the pump pressure can be set without the relief valve opening. Turn the compensator pressure adjustment to bring system pressure to the desired level (typically 1800 psi).
					With the system pressure set, the next step is to set the relief. Turn the relief counter clock-wise until it relieves. There are several ways to detect this; the pressure gauge will dip, the relief valve may squeal or hiss, the pump will stroke up more often. Turn the relief valve adjustment back clockwise to the point where relieving just stops. Turn it clockwise two complete revolutions past that point and lock it down.
					While at the power unit , adjust or verify:<br />
					<ol type="a">
						<li>fan temperature switch at 110&#176; f,</li>
						<li>over temperature switch at 140&#176; f,</li>
						<li>heater switch at 80&#176; f,</li>
						<li>float switch shipping bracket off and low level shut down working</li>
					</ol>
					At the carriage, ensure the pressure gauge is showing full pump pressure. While watching the gauge, have someone turn off the power unit. Continue watching the gauge as pressure dissipates slowly and then dissipates quickly. The point at which it starts to dissipate quickly is the accumulator pre-charge level. The accumulator pre-charge should be about 60% of system pressure. Excessive pre-charge pressure should be bled off for proper operation.<br />
				</div><br />
				<div>
					<b>D. Hydraulic Cushion Adjustment</b><br /><br />
					Most systems are equipped with a two-stage cushioning assembly, which may be configured in several different ways. All cushion assemblies have two relief valves. One is active only when the dogs are up (and a log is being loaded or turned), and is called the "soft cushion" or "part-time" relief valve. The other relief valve is always active, and is called the "full time" relief valve.<br /><br />
					To locate the cushion assembly, look for a manifold block that is plumbed to the hydraulic return line and has a pressure gauge, a small solenoid valve, and two adjustable relief valve cartridges. It is also plumbed to the cushion (T2) ports of the knee manifold blocks. The relief cartridge closest to the small solenoid is the part-time cushion relief, and usually will be physically located above the full-time valve. Note: There are two different manifolds pictured below.<br />
					<img src={`${imgPath}pressureGuage.PNG`} className="helpFileImg"></img>
					<ol>
						<li>Adjusting the cushion valves requires that the knee runaway software is disabled. In the Positioner Movement Setup Screen,
							(Main Menu / Setup Options / Startup Options / Positioner Movement Setup)
							Note the current runaway distances and then enter a value of 60 in both the “in-the-cut Runaway Error” and “out-of the-cut Runaway Error”.</li>
						<li>Put the dogs down and jog to the forward limit.</li>
						<li>Hold down the limit override push button and press a forward individual knee taper button until a knee comes forward into a mechanical stop.</li>
						<li>Loosen the lock nut on the Full-Time relief valve.</li>
						<li>With the buttons still depressed, turn the valve adjustment at the carriage counterclockwise until the relief pressure gauge dips.</li>
						<li>Turn the relief adjustment clockwise slowly until the gauge stops showing a pressure increase then release the buttons.</li>
						<li>Lock the adjustment down. The full time relief is now properly adjusted. The relief gauge and system pressure gauge should show about the same pressure.</li>
						<li>Press and hold the limit override button and use the individual knee taper button to bring the knees back within travel limits.</li>
						<li>Press Cancel Taper and the jog buttons to position the knees at mid-stroke. Raise the dogs.</li>
						<li>At the cushion block, adjust the soft cushion relief valve counter clockwise until it relieves (gauge pressure dips, hissing noise, etc.).</li>
						<li>Turn it clockwise until relieving stops.</li>
						<li>Note the position and turn it clockwise two complete revolutions and lock it down.</li>
					</ol>
					If the sawyer feels it is to easy to push the knees around when loading and turning, raise the relief pressure by turning the upper relief adjustment clockwise one half revolution at a time until he can load and turn comfortably.<br />
				</div><br />
			</article>
		)
	}
}


export default SystemStartUp;
