## Evaluate News Project
A website that uses natural language processing to evaluate text entered by user.
# Project setup
To get started:
* install all project dependencies with `npm install`
* start the development server with `npm start`

# Files
```bash
├── README.md - This file.
├── package.json     #npm package manager file.
├── .babelrc
├── .env             #Contains API key   
├── .webpack.dev.js  #Config file for webpack in development.
├── .webpack.prod.js #Config file for webpack in production.
├── __test__
│   └──  handleSubmit.test.js   #Running the test causes an error.
└── src
    ├── client
    │    └── js
    │        └── formHandler.js #Contains all form submition functionality.
    ├── styles #Importing the styles files in the index.js files causes an error.
    │   ├── base.scss
    │   ├── footer.scss
    │   ├── form.scss
    │   ├── header.scss
    │   └── resets.scss
    ├── server
    │   └── index.js #Contains express server code.
    └── index.js