## Weather widget
This applicaton contains an editor that allows users to set up a widget that can then be embedded on any site.

## Editor
The widget editor has a form that allow the user to create a new widget. 

This form includes the following fields:

1. Title
2. Unit: metric or imperial
3. Show Wind: true or false

The widget editor has a script besides the form that displays a snippet of code that allows that widget to be embedded. The script contains the code of the latest edited widget form.

Widget
The widget script is a piece of Javascript that reads the end user’s current location using navigator.geolocation, and retrieves the current weather conditions for that location using the Open Weather Map API.

The data the widget displays is determined by the latest settings in the editor; i.e. if the user created a widget called “Imperial with Wind Data” and chose imperial units, and Show Wind, the user should be able to embed that widget and see those two options reflected in the widget display.

> This application is coded in **React JS framework**, depending on the inputs in the editor, if the user clicks on Create widget, the new widgets created will be appended below the form. 

## Tools and framework used

1. React js with redux - JavaScript library for building user interfaces and to store the state of the application. 
2. Webpack -  Module Bundler.
3. Babel - JavaScript compiler.
4. Eslint - Linter tool to maintain the code quality.
5. Mocha/Chai, Sinon - Testing framework 

## Getting started

```
To see the widget output, there is a HTML file with the script already included.

So, the user can run it without installing in the local machine. Just open the widget.html file in the browser (present in the following location ..\public\widget.html)

```
```
Please follow the below steps to install and run the project in the local machine.

```

## To install the project

1. Install [node server v5.4.1](https://nodejs.org/download/release/v5.4.1/)
2. Open the terminal and go to root folder of this project 
3. Run `npm install`  (This command will download all the dependencies of this project)

## To start the project

1. Open the terminal and go to root folder of this project 
2. Run `npm run start`
3. Open browser and hit http://localhost:3000

## To run test cases 

1. Open the terminal and go to root folder of this project 
2. Run `npm run test`

## To find the test coverage

1. Open the terminal and go to root folder of this project 
2. Run `npm run test-cover`

Note: if test-cover is not working, then Run `npm install babel-cli -g` and re-run `test-cover`

## Features 

1. Users can edit the widget editor form.
2. On click of `Create widget` button, a preview of the widget is displayed below with the current settings of the editor.
3. The embeddable script of the weather widget to be included in the HTML is displayed
4. If the users want to use the widget they can create a HTML file, add the script present and include a DIV with id "weatherWidgetContainer" in the HTML.
