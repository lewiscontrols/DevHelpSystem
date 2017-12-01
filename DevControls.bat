@echo off
CLS
echo Dev Help System 

echo Please select an option
echo 1.Start App
echo 2.Build App
echo 3.Package and Deploy Release
echo 4.Install Dev Environment

CHOICE /C 1234 /M "Enter your choice:"

:: Note - list ERRORLEVELS in decreasing order
IF ERRORLEVEL 4 GOTO InstallDevEnvironment
IF ERRORLEVEL 3 GOTO PackageAndDeployReleaseApp
IF ERRORLEVEL 2 GOTO BuildApp
IF ERRORLEVEL 1 GOTO StartApp

:StartApp
ECHO StartApp 
@echo off 
npm start
pause
GOTO End

:BuildApp
ECHO BuildApp 
@echo off
npm run build
pause
GOTO End

:PackageAndDeployReleaseApp
ECHO PackageAndDeployReleaseApp
@echo off
npm run package
pause
GOTO End

:InstallDevEnvironment
ECHO InstallDevEnvironment
@echo off
npm install
pause
GOTO End