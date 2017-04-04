# TEAMPROJECT

##TEAM 2

### Prerequisites

Install node from https://nodejs.org/en/download/

### Setup the Development Environment

`npm install`

### Run a local emulator

`ionic serve`

or

`ionic lab`






### Notes
###Folders:

#Hooks:

    Scripts that are run before, during and after building and testing the app. "Not typically messed with."
    
#Node_mododules:

    This is where node js and npm store the dependencies of the app we will make.
    
#Platforms:

    Is where cordova generates platform specific code. Holds emulators.
    
#Plugins:

    Where cordova stores native plugin codes.
        Ex:Bluetooth, wifi.
        
#Resources:

    Stores our icon and splash screen that are generated wth cordova.
    
#Source:

    Where most of our app code runs. Where we will spend most of our time.
    
#WWW:

    Static output folder for our app. Everytime ionic builds our app that code goes into www folder.
    

###Files:

#edutorconfig:

    Helps better format code using ionic codestandards.
    
#gitignore:

    Makes it so you dont checkin unimported files into github.
    
#Config.xml:

    configuration file for cordova that lets you configure the cordova app, store plugins.
    
#Ionic.config.json:

    Node metadeta file that says what dependencies your app has. 
    
#Tsconfig.json:

    Specifies configuration for typescript. Generally you shouldnt modify this file.
    
#Tsling.json:

    Linter rule. Helps format your code and tells you when lines of codes are formatted correctly.
    We will spend most of our time in the source folder.
    
###srs folder files:
#App:

        Runs the initial code that jumpstarts your app.
        
#Assets:

        Store static assents like images.
        
#Pages:

        Code for every single one of our pages lives.
        
#Themes:

        We can change color settings of the app, changing how it looks.
        
#Declaration.ts:

        Ignore.

