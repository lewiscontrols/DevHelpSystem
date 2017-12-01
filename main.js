const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {ipcMain} = require('electron');


var myWindow = null;

var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  // Someone tried to run a second instance, focus window.
  if (myWindow) {
    if (myWindow.isMinimized()) myWindow.restore();
    global.sharedObject.hlpOne = process.argv[1];
    myWindow.focus();
  }
});

if (shouldQuit) {
  app.quit();
  return;
}

app.on('ready', () => {
  myWindow = new BrowserWindow({
    height: 725,
    width: 1100,
    resizable: false,
	icon: __dirname + '/app/img/sawIcon.ico',
	title: 'Lewis Controls'
  });


global.sharedObject = {
  hlpZero: process.argv[0],
  hlpOne: process.argv[1],
  hlpTwo: process.argv[2]
};

  // load the local HTML file
let url = require('url').format({
    protocol: 'file',
    slashes: true,
    pathname: require('path').join(__dirname, 'index.html')
  })
  //console.log(url)
  myWindow.loadURL(url)
});

 app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
      app.quit();
    }
 });
