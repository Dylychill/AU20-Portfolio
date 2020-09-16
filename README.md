# TA About Me Pages for UW CSE 154 AU20
This is the "mini-portfolio" About Me pages for Dylan McKone (author) for the students of 154. It is a simple briefing of who I am and some information and tips about the course. It is written using React, and much of it comes from previous personal projects in another courses.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Navigating the Project
This project has many components and is heavily compartmentalized. Each page and major chunk of information will likely be it's own component and each component is in its own file.

### resumeData.js
Most of the personalized information is loaded in from this text file to avoid repeating text in the js files.

### App.js
The 'landing' page, the central component that calls to the rest. Sets up the the navbar (component: `navbar.js`) using the Path and Router libraries and sets the Home page intro text.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
