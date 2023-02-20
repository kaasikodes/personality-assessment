# Personality Assessment

This project was created to determine the personality of individuals by having the participant answer a series of carefully crafted questions designed to ascertain wether an individual is either an introvert or an extrovert.

## Features

The features of the application include:

- A landing page where the individual can begin the assessment
- An assessment that consists of a series of questions that will determine the individual's personality based on the answers selected
- A result page where the individual will be able to see the result of the assessment (i.e Whether or not they are introverted or extriverted), as well as the questions and their answers to the assessment taken



## Theory Behind Determining personality

The concept behind determining wether person is introverted or extroverted is as follows:
 - Each option in a question is indicative of how introverted or extroverted an individual is i.e introVal, & extroVal (these values are created in such a way that there sum is always 5)
 - The sum of the values is always 5 to ensure that at the end of the assesment, the individual is either introverted or extroverted as 5 cannot be shared evenly
 - Provided the sum of these 2 values are 5, the individual will always be one or the other but never both
 - As a result of this constraint one value will always be greater than the other, and the greater value will determine the individual's personality

## Available Scripts

In the project directory, you can run:

### `yarn dev-backend`

This runs a server for you in development.\
The server will provide a rest api for you on [http://localhost:8000](http://localhost:8000) to view it in the browser.\
The endpoints include `[http://localhost:8000/questions](Get questions | GET)` and `[http://localhost:8000/questions/:id](For updating questions | PATCH)`

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


