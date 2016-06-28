# Recipi Web application

Site for listing Recipi and Ingredients.

## Architecture

Its is a single-page app (SPA) based on AngularJS and Gulp.
The Api's request is been processed with mock data from the app side itself.

## Coding Guidelines
If you want to contribute, please refer to the [Rangle.io coding guidelines](http://rangle.io/guidelines/) and [GitHub Flow](https://guides.github.com/introduction/flow/).

## Getting Started
1. Download and install Node.js from [here](http://nodejs.org/download/).
2. Clone this repo and in the terminal, `npm install`
3. Then `gem install scss-lint -v 0.35.0`
3. Then `gulp serve`
5. Finally open [localhost:3000](http://localhost:3000) in your browser

## Running the Tests
To run all tools in the quality pipeline, type: `npm test`.  This task does the following things:
* Checks JavaScript code best practices using [ESLint](https://www.npmjs.com/package/eslint)
* Checks SASS code for best practices using [SCSS-lint](https://rubygems.org/gems/scss-lint/versions/0.35.0)
* Enforces JavaScript and HTML code formatting conventions using [jsbeautify](https://www.npmjs.com/package/jsbeautify)
* Runs the unit tests in PhantomJS.

To check the coverage go to: coverage -> phantomJs -> index.html open this in a browser to check the code and validate the code coverage.

Gladson Robinson contact information: gladsonrobinson@gmail.com
