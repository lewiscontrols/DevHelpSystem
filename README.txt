/////////////////////////////
//// CURRENT RELEASE VERSION  
/////////////////////////////

	11/20/2017 - 11:08pm



/////////////////////////////
//// TO RUN THE DEV SERVER!  
/////////////////////////////

Steps to install and run the dev server

1. Make sure Node.js is downloaded and installed on the system.
2. Make sure Google Chrome is downloaded and installed on the system.
3. Open the DevHelpSystem folder
4. Click and run 'DevControls.bat'
      A series of options will be availble to you.
          1 - Run the application:  This will start the application in the dev environment
          2 - Build the application: This will build and compile any changes you have made
          3 - Package and Deploy: This will package the app and create a release version under the release folder
          4 - Init the app: RUN THIS ONE TIME.  This will initialize the development server and enable you to start / build the application.
5. Select option 4 and initialize the app.  Name the app 'lewiscontrols' and click past all other options you may be prompted with.
6. Click and run 'DevControls.bat'
7. Choose options 2, and build the application.

The application should now be built and ready to be deployed / executed.  You can open up DevControls.bat and select option 1 'run' if you wish to start the app and check it out.


/////////////////////////////
//// AFTER DEV SERVER IS INSTALLED
/////////////////////////////

You can build, run, and deploy new release versions of the application by using 'DevControls.bat'.  
You can also run all of these command options from the CMD or Powershell.
They must be ran from the folder home /DevHelpSystem
For reference the commands are...
  npm start
  npm run build
  npm run package


/////////////////////////////
//// CREATING HELP FILES AND TOGGLING MENU OPTIONS 
/////////////////////////////

1. Navigate to and open the file Options.json located at  /DevHelpSystem/app/data/Options.json
2. Turn "on" createhlp.   It should read "createhlp" : "on" in order to turn the option on.
3. Click and run DevControls.bat
4. Select Option 2 and build the application.
5. Click and run DecControls.bat
6. Select Option 1 and run the application.
7. A new menu button will be located on the bottom left labeled "create help file". Click on this button.
8. Fill out the form and click submit.  Exit the program.
9. Repeat steps 1 - 4 but this time turn createhlp to "off"    -  ex  "createhlp" : "off"
    NOTE:  You must exit than rebuild the application in order for your new help file to loaded into the application.


/////////////////////////////
//// DELETING HELP FILES
/////////////////////////////

1. Turn on "deletehlp" option located at /DevHelpSystem/app/data/Options.json
2. Rebuild the application using DevControls.bat - select option 2.
3. Open the application using DevControls.bat option 1.
4. Click the menu button option 'Detele Help File'
5. Type the Dialog title you wish to delete.  This is case sensitive ex. Kerfs is 'Kerfs' and not kerfs or KERFS.
6. BEFORE clicking the delete button, if you type in a dialog title correctly and it is found in the data base the help file
   will be displayed before.  If this appears, click delete and the file will be deleted.
7. Exit the program and rebuild.


/////////////////////////////
//// EDITING HELP FILES
/////////////////////////////

1. Turn on "edithlp" option located at /DevHelpSystem/app/data/Options.json
2. Rebuild the application using DevControls.bat - select option 2.
3. Open the application using DevControls.bat option 1.
4. Click the menu button option 'Edit Help File'
5. Type Dialog title you wish to edit into the top input field.  This is case sensitive ex. Kerfs is 'Kerfs' and not kerfs or KERFS.
6. If the help file is found, all fields will be filled out in the form.  THESE are placeholders and cannot be added to.  You can view
   the entire help file below the form.  Copy and paste any content you may want to retain from here.  
   NOTE: You don't have to fill out fields that you are not planning on updating / editing - BUT you do have to fill out the Dialog Title field.
7. Click UPDATE when you're ready to submit your changes. 
8. Exit the program and rebuild. 


/////////////////////////////
//// DEPLOYING RELEASE VERSIONS OF THE APPLICATION
/////////////////////////////

Anytime you add help files or make changes to the application you will probably want to deploy a new version of the application for release.

1. Click and run DevControls.bat
2. Select option 3 and package the app for release.
3. This will create a new folder inside /DevHelpSystem/release/ named 'LewisHelp-win32-x64'
4. Copy this folder and paste it inside of the /Help to update the help file system.
    NOTE: Make sure you have turned off on dev options before packaging the application for release.  Dev options are inside of the Options.json file.


/////////////////////////////
//// CREATING READYSCAN 2 PDF
/////////////////////////////

NOTE: This option is not working atm.  When I added the new JSON data I noticed that this is no longer printing PAGE numbers and SECTION numbers with the manual.  
      I'll update this again once it is working correctly.  

1. Turn on "pdf" option located at /DevHelpSystem/app/data/Options.json
2. Rebuild the application using DevControls.bat - select option 2.
3. Run the program and selecgt the menu options Create PDF
4. Click the print button.
5. Now select to either PRINT the document or SAVE AS PDF in the printer options.  Saving as a PDF will take a few minutes as it is a large file.  

/////////////////////////////
//// EDIT SECTIONS READYSCAN 2 PDF
/////////////////////////////
