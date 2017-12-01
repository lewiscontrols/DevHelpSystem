import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sass from '../scss/application.scss'


class TableContents extends Component {
   
	render() {
		return (
			<article className="artPDF">
			<div>
				<p className="pdfText">
					<center>
					<span className="addBold">TABLE OF CONTENTS</span><br /><br />
					</center>
					<span className="addBold">Section I. System Installation</span> <br /><br />
					&nbsp;A &nbsp;&nbsp;<span className="addBold">Introduction</span><br />
					&nbsp;A-1&nbsp;&nbsp; What is supplied by Lewis Controls<br />
					&nbsp;A-2&nbsp;&nbsp; Mill or Others’ Responsibilities<br />
					&nbsp;A-3&nbsp;&nbsp; Site Preparation<br />
					&nbsp;A-4&nbsp;&nbsp; System Drawing Package<br />
					&nbsp;B &nbsp;&nbsp;<span className="addBold">Sawyers Cab and Computer Installation </span><br />
					&nbsp;B-1&nbsp;&nbsp; Mill Responsibilities<br />
					&nbsp;B-2&nbsp;&nbsp; General Recommendations<br />
					&nbsp;C &nbsp;&nbsp;<span className="addBold">Carriage Electrical</span><br />
					&nbsp;C-1&nbsp;&nbsp; Mill Responsibilities<br />
					&nbsp;C-2&nbsp;&nbsp; Electrical Noise<br />
					&nbsp;C-3&nbsp;&nbsp; Carriage Electrical Detail<br />
					&nbsp;D &nbsp;&nbsp;<span className="addBold">Setworks Hydraulics</span><br />
					&nbsp;D-1&nbsp;&nbsp; Mill Responsibilities   <br />
					&nbsp;D-2&nbsp;&nbsp; Setworks Plumbing Schedule<br />
					&nbsp;D-3&nbsp;&nbsp; Hydraulic Recommendations<br />
					&nbsp;D-4&nbsp;&nbsp; Hydraulic System Startup<br />
					&nbsp;E &nbsp;&nbsp;<span className="addBold">Scanner – 3D Shape Scan Systems</span><br />
					&nbsp;E-1&nbsp;&nbsp;  Mill Responsibilities<br />
					&nbsp;E-2&nbsp;&nbsp; Scanner Support Structure and Wire Duct<br />
					&nbsp;E-3&nbsp;&nbsp; Scan Bar Location<br />
					&nbsp;F &nbsp;&nbsp;<span className="addBold">Scanner – Photocell Systems</span><br />
					&nbsp;F-1&nbsp;&nbsp; Mill Responsibilities<br />
					&nbsp;F-2&nbsp;&nbsp; Photocell Scanner Assembly Installation<br />
					&nbsp;F-3&nbsp;&nbsp; Scan Line Location<br />
					&nbsp;F-4&nbsp;&nbsp; Locating the Lower Scanner Housing<br /> <br />


					<span className="addBold">Section II. System Start-up & Adjustments</span><br /><br />
					&nbsp;A &nbsp;&nbsp; System Start-up<br />
					&nbsp;B &nbsp;&nbsp; Initial Power-up<br />
					&nbsp;C &nbsp;&nbsp; Hydraulics System Adjustments <br />
					&nbsp;D &nbsp;&nbsp; Hydraulic Cushion Adjustment<br /> <br />
			
					<span className="addBold">Section III. Scanning and Solution Options</span><br /><br />
					&nbsp;A &nbsp;&nbsp;<span className="addBold">Scanning</span><br />
					&nbsp;A-1 &nbsp;&nbsp; Shape Scan Systems <br />
					&nbsp;A-2 &nbsp;&nbsp; Photocell Systems<br />
					&nbsp;A-3 &nbsp;&nbsp; Scan Set Disable<br />
					&nbsp;B &nbsp;&nbsp;<span className="addBold"> Solution Options</span><br />
					&nbsp;B-1 &nbsp;&nbsp; Cant Matrix<br />
					&nbsp;B-2 &nbsp;&nbsp; Opening Faces<br /><br />

					<span className="addBold">Section IV. LCI Carriage Menus</span><br /><br />
					<span className="addBold">&nbsp;A <i>LCI Main Menu / Sub Menu Directory</i></span><br />
					<span className="addBold">&nbsp;B  <i>System Adjustments and Terminal Use</i></span><br />
					&nbsp;B-1 &nbsp;&nbsp;Main Menu<br />
					&nbsp;B-2 &nbsp;&nbsp;Main Menu / File Options<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Load Default Values<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Open Species Values from Disk<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. Save Current Species & Machine Values to Disk<br />
						&nbsp;&nbsp;&nbsp;&nbsp;d. Recover Machine Values<br />
				
					&nbsp;B-3 &nbsp;&nbsp;Main Menu / Setup Options<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Startup Options<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Automatic Positioner calibration <br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Basic Positioner Setup<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Positioner Movement Setup<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Console Mapping<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Spares Setup<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. System Setup 7. Password Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Runtime Options<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Kerfs<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Limits<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Delays<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Oiler Adjustments<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Opening Face Parameters<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Package Mode / Max Set Setup<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Timber Bind Adjustments<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Slabber Setup<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9. Auto Saw Guide<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. Scanner Setup<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Scanner Options <br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. L4 Scanner Setup <br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Photocell Setup <br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Auto Taper Rates <br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Shapescan Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;d. Tally Parameters Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;e. Zero Tally and Downtime<br />
						&nbsp;&nbsp;&nbsp;&nbsp;f. Set View Options<br />
						&nbsp;&nbsp;&nbsp;&nbsp;g. Saw Deviation Setup<br />

					&nbsp;B-4 &nbsp;&nbsp; Main Menu / Lumber Options<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Species Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Board and Cant Sizes Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. Cant Face Width Table<br />
						&nbsp;&nbsp;&nbsp;&nbsp;d. Patterns<br />
						&nbsp;&nbsp;&nbsp;&nbsp;e. Optimizer Adjustments<br />
					&nbsp;B-5 &nbsp;&nbsp; Main Menu / Shift Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Add a Shift<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Delete a Shift<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. Shift Name<br />
					&nbsp;B-6 &nbsp;&nbsp; Main Menu / View and Report Options<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Downtime Summary<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Individual Log Monitor<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. View Current Log<br />
						&nbsp;&nbsp;&nbsp;&nbsp;d. Sawyer’s 2D Display<br />
						&nbsp;&nbsp;&nbsp;&nbsp;e. Shift Tally Summary<br />
						&nbsp;&nbsp;&nbsp;&nbsp;f. Tally Report Setup<br />
						&nbsp;&nbsp;&nbsp;&nbsp;g. View Machine Adjustments<br />
						&nbsp;&nbsp;&nbsp;&nbsp;h. Saw Deviation Monitor<br />
					&nbsp;B-7 &nbsp;&nbsp; Main Menu / Troubleshooting<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Targets and Positions<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Last Scan<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. Encoder Info Display<br />
						&nbsp;&nbsp;&nbsp;&nbsp;d. Setworks History<br />
						&nbsp;&nbsp;&nbsp;&nbsp;e. Solution History<br />
						&nbsp;&nbsp;&nbsp;&nbsp;f. System Overview<br />
						&nbsp;&nbsp;&nbsp;&nbsp;g. View Voltages<br />
						&nbsp;&nbsp;&nbsp;&nbsp;h. View Pvalues Console<br />
						&nbsp;&nbsp;&nbsp;&nbsp;i. View Setworks Diagnostics Console<br />
						&nbsp;&nbsp;&nbsp;&nbsp;j. View L4 Diagnostics<br />
						&nbsp;&nbsp;&nbsp;&nbsp;k. Positioner Graph<br />
						&nbsp;&nbsp;&nbsp;&nbsp;l. Last Scan Log Line<br /><br />
				
					<span className="addBold">Section V. System Overview and Sawyer’s Console</span><br /><br />
					&nbsp;A <span className="addBold"><i>Systems and subsystems interface</i></span><br />
					&nbsp;A-1 Windows User Interface<br />
					&nbsp;A-2 Sawyer Display subsystem interface<br />
					&nbsp;A-3 Carriage positioning detection switches<br />
					&nbsp;A-4 The Scanner subsystem interface<br />
					&nbsp;A-5 The Sawyer Console interface<br />
					&nbsp;A-6 The Computer to PLC interface<br />
					&nbsp;A-7 Shaft encoder interface<br />
					&nbsp;A-8 Linear Positioner interface<br />
					&nbsp;A-9 Programmable Logic Controller<br />
					&nbsp;B <span className="addBold"><i>Faces and Axes</i></span><br />
					&nbsp;C <span className="addBold"><i>Button Light Description</i></span><br />
					&nbsp;C-1 &nbsp;Group 1<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Control Power, Setworks Lock Out, Set Enable, Scan Set Disable, <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Hydraulic Pressure, Hydraulics Enabled, Set Achieved, Stack Computed, <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Knees Tapered, Console Status lights, Saw Deviation.<br />
					&nbsp;C-2 &nbsp;Group 2<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Saw Guide Auto, Saw Guide Up/Down, Slabber Auto, Slabber Sets, <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Slabber Retract, Slab Attach, Individual Knee Controls, <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Cancel Taper,Limit Override, Skew Left, Skew Right<br />
					&nbsp;C-3 &nbsp;Group 3<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Scanner On, Taper (Auto, Full, Half, None), Calibrate, Down Time<br />
					&nbsp;C-4 &nbsp;Group 4<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Species, Bark On, Grade Face, Package Modes (Single, Package, Resaw), <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Face 1F - 1B - 2F - 2B, Patterns, Boards, Cants, Multiples, <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Fill Mask, Default Set, Cancel Entries.<br />
					&nbsp;C-5 &nbsp;Group 5<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Species, Multiples, Patterns, Cants, Boards<br />
					&nbsp;C-6 &nbsp;Group 6<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Backset, Jog Reverse, Jog Forward, Set, Compute, Dogs Up/Dn, <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Dogs In/Out, Other handle functions, Log Loader, Other Foot Switches<br />
				
					&nbsp;D &nbsp;<span className="addBold"><i>Species</i></span><br />
					&nbsp;E &nbsp;<span className="addBold"><i>Set and Compute</i></span><br />
					&nbsp;F &nbsp;<span className="addBold"><i>The Fill Mask & Fill With Last Board Parameter Stack Entry</i></span><br />
					&nbsp;G &nbsp;<span className="addBold"><i>Stack Entry</i></span><br />
					&nbsp;H &nbsp;<span className="addBold"><i>Sawyers Tutorial</i> </span>(How to Saw a Log)<br />
					&nbsp;H-1 &nbsp;Simple Dimension Sawing<br />
					&nbsp;H-2 &nbsp;Grade Sawing<br />
					&nbsp;I &nbsp;<span className="addBold"><i>Scanner Calibration Procedure</i></span><br />
					&nbsp;I-1  &nbsp;Laser 3D Scanner Calibration Procedure<br />
					&nbsp;I-2  &nbsp;Photocell Scanner Calibration Procedure<br /><br />
			
					<span className="addBold">Section VI. System Maintenance Tools</span><br /><br />
					&nbsp;A &nbsp;&nbsp;<span className="addBold"><i>Hardware Maintenance Tools</i></span><br />
					&nbsp;A-1 &nbsp;&nbsp;System Back Panel Terminator Boards<br />
						&nbsp;&nbsp;&nbsp;&nbsp;a. Digital I/O Terminator<br />
						&nbsp;&nbsp;&nbsp;&nbsp;b. Transducer Input Terminator<br />
						&nbsp;&nbsp;&nbsp;&nbsp;c. Analog Output Terminator<br />
						&nbsp;&nbsp;&nbsp;&nbsp;d. Shaft Encoder Input Terminator<br />
						&nbsp;&nbsp;&nbsp;&nbsp;e. Analog Input Terminator<br />
					&nbsp;A-2 &nbsp;&nbsp;Hydraulic System Pressure Gauges<br />
					&nbsp;A-3 &nbsp;&nbsp;Hydraulic Control and Status mini-console<br />
					&nbsp;A-4 &nbsp;&nbsp;Hydraulic Test Box (Battery Box) <br />
					&nbsp;B &nbsp;&nbsp;<span className="addBold"><i>Software Maintenance Tools</i></span><br />
					&nbsp;C &nbsp;&nbsp;<span className="addBold"><i>Drawing Package</i></span><br /><br />
			
					<span className="addBold">Section VII. - Troubleshooting</span><br /><br />
					&nbsp;A &nbsp;&nbsp;<span className="addBold"><i>The Troubleshooting Starting Point</i></span><br />
					&nbsp;B &nbsp;&nbsp;<span className="addBold"><i>Peripheral power supplies</i></span><br />
					&nbsp;C &nbsp;&nbsp;<span className="addBold"><i>Subsystem component failures</i></span><br />
					&nbsp;C-1 &nbsp;&nbsp;Digital Inputs<br />
					&nbsp;C-2 &nbsp;&nbsp;Digital Outputs<br />
					&nbsp;C-3 &nbsp;&nbsp;Linear Positioner Problems<br />
					&nbsp;C-4 &nbsp;&nbsp;Hydraulic Power system<br />
					&nbsp;C-5 &nbsp;&nbsp;Linear Positioner Valves<br />
					&nbsp;C-6 &nbsp;&nbsp;Temposonic Linear Position Probe<br />
					&nbsp;C-7 &nbsp;&nbsp;Positioner Problem Identification<br />
					&nbsp;C-8 &nbsp;&nbsp;Shaft encoder problems<br />
					&nbsp;D &nbsp;&nbsp;<span className="addBold"><i>Mill reported problems and solutions</i></span><br /><br />

					<span className="addBold">Section VIII - Maintenance Notes</span><br /><br />
					&nbsp;A &nbsp;&nbsp;<span className="addBold"><i>The Setworks hydraulic system</i></span><br />
					&nbsp;A-1 &nbsp;&nbsp;Hydraulic cleanliness<br />
					&nbsp;A-2 &nbsp;&nbsp;Hydraulic filters<br />
					&nbsp;A-3 &nbsp;&nbsp;Hydraulic Oil<br />
					&nbsp;B &nbsp;&nbsp;<span className="addBold"><i>Component Handling</i></span><br />
					&nbsp;B-1 &nbsp;&nbsp;Wiring<br />
					&nbsp;B-2 &nbsp;&nbsp;Circuit Boards<br />
					&nbsp;C &nbsp;&nbsp;<span className="addBold"><i>Intermittent Problems</i></span><br />
					&nbsp;D &nbsp;&nbsp;<span className="addBold"><i>Installing the Spare Black Box</i></span><br />
					&nbsp;D-1 &nbsp;&nbsp;Determine that a replacement black box is needed<br />
					&nbsp;D-2 &nbsp;&nbsp;Save Pvalues to Compact Flash<br />
					&nbsp;D-3 &nbsp;&nbsp;Shut Down and Power off the black box<br />
					&nbsp;D-4 &nbsp;&nbsp;Unplug all input leads<br />
					&nbsp;D-5 &nbsp;&nbsp;Remove black box from back panel<br />
					&nbsp;D-6 &nbsp;&nbsp;Place spare black box on back panel<br />
					&nbsp;D-7 &nbsp;&nbsp;Plug in all leads<br />
					&nbsp;D-8 &nbsp;&nbsp;Power on<br />
					&nbsp;D-9 &nbsp;&nbsp;Restore values from flash<br />
					&nbsp;D-10 &nbsp;&nbsp;Test and run<br />
					&nbsp;E &nbsp;&nbsp;<span className="addBold"><i>LCI Service</i></span><br /><br />
				</p>
			</div>
			</article>
		)
	}
}


export default TableContents;
