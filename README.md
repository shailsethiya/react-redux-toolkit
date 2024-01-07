# React Redux-toolkit - 2022 <img src="public/logo512.png" height="100px" align="right"/>

React Redux-toolkit seed (some description here)

## Prerequisite

> - NodeJS ^14.19.0
> - npm ^6.14.16
> - Prettier - code formatter extension vscode

### Version

> - ReactJS v18.2.0
> - React Router v6.3.0
> - Redux Toolkit v1.8.5
> - Bootstrap v5

## Take Clone of project

> - git clone REPOSITORY_URL
> - git checkout -b YOUR_BRANCH
> - git pull origin DEVELOP_BRANCH
> - create an .env file and copy the code from the .env.sample file and paste it into the .env f

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm install`

To install all dependencies

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### A top-level directory layout

    .
    ├── build                   # Build files
    ├── public                  # Public folder for index.html and static content
    ├── src                     # Source files
    │   ├── api                 # Redux toolkit slice / query
    │   ├── components          # Custom common reusable components
    │   └── hooks               # Custom hooks
    │   └── Context             # Context providers
    │   └── modules             # All modules / pages
    │   └── routes              # App Routing
    │   └── store               # Redux store setup
    │   └── styles              # Global themes and styles
    │   └── utils               # Utils folder for common functions & untilities
    │   └── App.js              # Main App file
    │   └── index.js            # Entry JS file
    ├── .eslintrc.json          # Es lint configuration file
    ├── .prettierrc.json        # prettier configuration file
    ├── .env.sample             # Environment sample file for all configurations. Rename `.env.sample` to `.env`. Never commit `.env` file to git. Always update `.env.sample` file with dummy keys for reference.
    ├── package.json            # All dependencies
    └── README.md

> - Naming convention - Use camelCase for every folder name & PascalCase for every file name
> - React component file name should have .jsx extension.
> - Use prettier code formatter extension
> - Tab space - 2

## Scripts used

`
{ 
    "start": "react-scripts start", 
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint \"src/**/*.{js,jsx}\"",
    "lint:fix": "eslint \"src/**/*.{js,jsx}\" --fix",
    "format": "prettier -w .",
    "prepare:husky": "husky install",
    "pre-commit": "npm run format && npm run lint:fix"
}
`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
