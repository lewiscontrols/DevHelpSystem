import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'

const imgPath = './app/img/';

class SectionSix extends Component {
   
	render() {
		return (
			<article className="artPDF">
				<div>
					<b>SECTION VIII - MAINTENANCE NOTES</b><br /><br />
					<b>A. The setworks hydraulic system</b><br /><br />
					The major reason for adding linear positioners to a carriage is to improve the
					knee setting accuracy and speed. To do this, very close tolerance components
					are used with high pressure. Satisfactory system operation and hydraulic
					component life depends greatly on the adjustments of the hydraulic system being
					done and checked regularly. It is also necessary to consider how one
					adjustment may effect other adjustments.<br /><br />
					<b>A-1. Hydraulic Cleanliness</b><br /><br /> 
					Opening the hydraulic system exposes the system to
					the risk of introducing contamination (dirt). Contamination can cause early valve
					failures. It is very important to do all you can to prevent introducing
					contaminants. It is also important to understand that some contaminants are
					going to get in the system. To flush as much of the contaminants as possible
					through the plumbing and trap them in the filters, we furnish ball valves to control
					oil flow routing.<br /><br />
					<b>A-2. Hydraulic Filters</b><br /><br />
					Each filter is equipped with an indicator that shows when the filter is becoming
					plugged. The filters should be changed when indicated or after 6 months use,
					whichever comes first. Any filter change should be followed by at least a one
					hour flush of the hydraulic system.<br /><br />
					<b>A-3. Hydraulic Oil</b><br /><br />
					The hydraulic oil received from your distributor is never as clean as the
					specification stated by servo valve manufacturers. It is very important to flush
					this oil before it is used to move positioners. We recommend a minimum of 4
					hours.<br /><br />
					The grade of hydraulic oil you choose will certainly have an effect on the system
					operation. Most pump manufacturers recommend a grade or weight of 68. The
					choice must, however, be tempered by other factors. The oil viscosity range
					must be such that cold weather will not cause it to gel in the plumbing and the
					cylinders and warm weather will not lower the viscosity to the point where it loses
					lubricating properties. The power units we supply have tank heaters and oil
					coolers to help the mill keep the oil in a desirable viscosity range. Other
					possibilities are locating the power unit for effective cooling and heating and to
					minimize the length of plumbing runs. Under severe conditions, wrapping the
					plumbing or using heat tape may be advisable. Keeping the reservoir topped off
					and fully retracting the cylinders when the carriage is idle also can help keep oil
					in the desired temperature range.<br /><br />
				</div><br />
				<div>
					<b>B. Component Handling</b><br /><br />
					Reasonable care and precautions are necessary when handling electronic and
					hydraulic components. The system’s AC power should always be switched off
					before servicing any electrical parts.<br /><br />
					<b>B-1. Wiring</b><br /><br />
					When running or replacing wiring the areas which are required to flex (such as
					the pantograph arms) should have extra length and strain relief if possible.
					Wiring should be protected from abrasion, excess heat, dirt and moisture.
					Wire terminations must be tight enough to ensure a good electrical connection.
					Excessive tightening will cause broken wires.<br /><br />
					<b>B-2. Circuit Boards</b><br /><br />
					When changing circuit boards remove power by turning the system power off.
					Remove any cables which are in the way of the board. (Note where each cable
					plugs in.) Take care where you put the circuit board so it does not get damaged,
					including damage from static electricity.<br /><br />
					When all the boards and cables are back in their proper place, the system can be
					turned on and tested for proper operation.<br /><br />
					<b>C. Intermittent Problems</b><br /><br />
					When trying to locate the cause of an intermittent problem, it is frequently
					advisable to keep a log of the activities, i.e., replaced circuit board XXX with
					spare circuit board YYY. You will not only know what steps you have tried, but
					when the problem is resolved you will know what parts need repair or
					replacement to keep your spares ready to support your system.<br /><br />
				</div><br />
				<div>
					<b>D. Installing the Spare Black Box</b><br /><br />
					There are ten steps to correctly install the spare black box. Please follow the
					instructions for each step to guard against loss of data or excessive downtime.<br /><br />
					<b>D – 1. Determine that a replacement black box is needed</b><br /><br />
					An LCI engineer has helped you troubleshoot your system, and the diagnosis is
					that your black box computer needs to be replaced. Take care to follow these
					steps in the order presented.<br /><br />
					<b>D – 2. Save Pvalues to Compact Flash (if possible)</b><br /><br />
					If your computer is still operable, you need to run a small program that will save
					all your current program values to an external storage device called “Flash.” If
					you are unable to run your computer, simply remove the compact flash card from
					the SanDisk reader and save it for later. The compact flash will have the values
					from the last time you backed up your system (hopefully that has been done on a
					regular basis). If you can run your computer, follow these steps to perform one
					final backup.<br /><br />
					To run the program, click on Start, point to Programs and Carriage Menu and
					then click on Save Program to Flash.<br /><br />
					<center><img src={`${imgPath}savePVaules.PNG`} className="helpFileImg"></img></center>
					A window will pop up momentarily; when the window disappears, you are ready
					to save current species settings.<br /><br />
					From the Main Menu of Lewis Controls software click on <b>File Options</b> and then
					click on <b>Save Current Species & Machine Values to Disk</b>. Figure 2 shows the
					window that will come up.<br />
					<center><img src={`${imgPath}hlpViewMachine.PNG`} className="helpFileImg"></img></center>
					Click in the box for “Backup values to flash” (as shown) and click “Accept.” The
					window will disappear and your values will be backed up. Now you should
					remove the compact flash card from the SanDisk reader and save it for later.<br />
				</div><br />
				<div>
					D – 3. Shut Down and Power off the black box
					Click on the Start button and choose “Shut Down.”
					<center><img src={`${imgPath}shuttingDown.PNG`} className="helpFileImgSmall"></img></center>
					When the drop down window says “Shut down,” Click “OK” on the Shut Down
					Windows dialog, as shown below in Figure 4.<br />
					<center><img src={`${imgPath}shutDownIndication.PNG`} className="helpFileImgSmall"></img></center>
					When the computer indicates you can turn the power off, turn off the power by
					pressing the red Power button on the lower left side of the front of the machine.
					At this time make sure that the Control Panel and PLC have been turned off as
					well.<br />
				</div><br />
				<div>
					<b>D – 4. Unplug all input leads</b><br /><br />
					After the computer has been turned off, remove the panel from the top of the
					black box. The top has two thumbscrews and should lift off easily after they have
					been loosened. After removing the top, shut off the power supply by flipping the
					switch next to the power cord (this switch is circled in Figure 5).<br />
					<center><img src={`${imgPath}blackBrickPower.PNG`} className="helpFileImgSmall"></img></center>
					Next, unplug all the input leads from the top of the computer. You may wish to
					label each lead so you know where it goes when you hook up the spare
					Here is a list of items to be removed:<br />
					<ul>
						<li>Power supply cable (black)</li>
						<li>USB connectors:</li>
							<ul>
								<li>Flash (Do not remove)</li>
								<li>Shape scan input</li>
								<li>Touch screen input</li>
								<li>UPS communication</li>
							</ul>
						<li>Remove the protective plastic strips from the top and bottom of the hole on
						the left and slide the uLinks USB to 485 converter out through the hole. Put
						the plastic strips back into their original position.</li>
						<li>Network cable to Ethernet Hub</li>
						<li>Keyboard and mouse cords (color coded plugs)</li>
						<li>Phone cord – Modem card (if present)</li>
						<li>Monitor cables (2) – Sawyer Display and Touch Screen</li>
						<li>Com 1 and Com 2 serial cables (gray)</li>
						<li>12V DC connection (black and yellow twisted wire)</li>
						<li>Laser scanner fiber optic cables (label these to maintain order)</li>
						<li>Remove the Ethernet hub from the right side of the black box</li>
						<li>Remove the compact flash card from the SanDisk reader.</li>
						<li>Last, unplug the five ribbon cables that plug into the left side of the black
						box. The ribbon cables are already labeled for installation convenience.</li>
					</ul>
				</div><br />
				<div>
					<b>D – 5. Remove black box from back panel</b><br /><br />
					Remove the four nuts from the bolts that hold the black box to the back panel,
					and lift it off the panel. Carefully package the black box for shipping to Lewis
					Controls for repair.<br /><br />
					<b>D – 6. Place spare black box on back panel</b><br /><br />
					Now that the old black box has been disconnected and removed, we start to
					assemble the spare system by following the reverse of what we have done so
					far.<br /><br />
					Place the spare black box on the back panel and secure it with the nuts you
					removed in Step VI.<br />
					<center><img src={`${imgPath}blackBoxSpare.PNG`} className="helpFileImg"></img></center>
				</div><br />
				<div>
					<b>D – 7. Plug in all leads</b><br /><br />
					Before putting on the top panel, you must reattach all the cables and cords that
					are attached to the top of the computer.<br /><br />
					Use this list and Figure 6 to assist you in plugging everything back in.<br />
					<ul>
						<li>Power supply cable (black)</li>
						<li>USB connectors:</li>
							<ul>
								<li>Flash (Should already be present in the new black box)</li>
								<li>Shape scan input</li>
								<li>Touch screen input</li>
								<li>UPS communication</li>
							</ul>
						<li>Attach Ethernet hub to outside of black box on the right side and reconnect</li>
						<li>network cable to Hub</li>
						<li>Keyboard and mouse cords (color coded plugs)</li>
						<li>Phone cord (if present)</li>
						<li>Monitor cables (2) – Sawyer Display and Touch Screen</li>
						<li>Com 1 and Com 2 serial cables</li>
						<li>12V DC connection (black and yellow twisted wire)</li>
						<li>Laser scanner fiber optic cables (order is important!)</li>
						<li>Insert the compact flash card into the SanDisk reader</li>
						<li>Remove the protective plastic strips from the top and bottom of the hole on
						the left and slide the uLinks USB to 485 converter back in through the hole.</li>
						<li>Reconnect to USB. Put the plastic strips back into their original position.</li>
						<li>Plug the five ribbon cables into the side connectors on the left side of the
						box.</li>
						<li>Flip the power switch near the power cord so the “I” is down.</li>
						<li>Replace the cover over the top of the black box.</li>
					</ul>
				</div><br />
				<div>
					<b>D – 8. Power on</b><br /><br />
					Turn the power on by pressing the red “Power” switch on the front of the black
					box. (It may be necessary to remove the small black plate at the bottom to gain
					access to the switch). You should prevent the Carriage software from starting.
					To do this, hold down the Shift key as Windows is booting up (start holding down
					the Shift key when a small window appears that says “Windows is starting up”).
					You will get a window prompting for a password; use the password “carriage” to
					continue. As soon as you enter the password, you must depress the Shift key
					again! If the Carriage software starts, close it before continuing on to Step IX.<br />
					<b>D – 9. Restore values from Flash</b><br /><br />
					If you were able to save your program values to the Flash disk (Step II), or even
					if you weren’t but had backup values saved previously, click on:<br /><br />
					 <i>Start->Programs->Carriage Menu->Recover Values From Flash.</i><br />
						<center><img src={`${imgPath}flashValues.PNG`} className="helpFileImg"></img></center>
					A new window will open, and before you can read the contents of the window,
					you will be presented with a dialog as shown in Figure 8. Clicking “Yes” will allow
					you to view the contents of the new window.<br /><br />
					<center><img src={`${imgPath}flashValues.PNG`} className="helpFileImg"></img></center>
					The new window is a web page with two buttons on the bottom. File names (and
					the dates that they were saved) will be displayed with “Current” files names on
					the left and the “Saved” file names on the right. Files under the “Current” column
					are backed up automatically by the system on a periodic basis. Files under the
					“Saved” column are backed up only when specifically commanded by using the
					system menus. (Main Menu / File Options / Save Current Species & Machine
					Values to Disk) Click the button on the right that says, “Recover from Saved
					Flash Values.”<br /><br />
					<center><img src={`${imgPath}recoverValuesFlash.PNG`} className="helpFileImg"></img></center>
					Click Yes to confirm the copy.<br /><br />
					When it is finished, you will be presented with a dialog confirming success, as<br />
					<center><img src={`${imgPath}flashOk.PNG`} className="helpFileImgSmall"></img></center>
					Click “OK,” close the window, and continue to the next step.<br /><br />
				</div><br />
				<div>
					<b>D – 10. Test and run</b><br /><br />
					Open the Carriage menu and see if the carriage can make lumber. Make sure
					the Control Panel and PLC have been switched on.<br /><br />
					<b>E. LCI Service</b><br /><br />
					The LCI engineering department is available to assist your maintenance efforts.
					We will provide phone support or, if needed, on-site support. Our support people
					include an in-house service technician, who can handle many of the mill
					problems through phone support, repair of defective parts, or by sending spare
					parts to the mill.<br />
				</div><br />
			</article>
		)
	}
}


export default SectionSix;