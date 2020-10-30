# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Stucture

Project structure was taken from [An Opinionated Guide to React: Folder Structure & File Naming](https://dev.to/farazamiruddin/an-opinionated-guide-to-react-folder-structure-file-naming-1l7i)

```
/react-app
  /build
  /node_modules
  /public
  /src
    /assets
    /components
    /contexts
    /lib
    /pages
    /services
    /styles
    AppRoutes.tsx
    index.tsx
    react-app-env.d.ts

  package.json
  README.md
  tsconfig.json
  package-lock.json
```

- `/assets` - images, logos.

- `/components` - components that are shared between multiple pages.

- `/components/__tests__` - for component testing

```
/components
  /__tests__
    Button.test.tsx
Button.tsx
```


- `/contexts` - To keep all of the context components in a separate folder, to not confuse them with plain old react components. A common context I like to implement is UserAuthContext.tsx.

- `/lib` - When using a 3rd party library, let's say like Firebase for example, I like to put all of the initialization in a folder called lib. I'll then export the instance of that initialized library.

``` ts
import firebase from "firebase/app";
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});
export default firebase;
```

- `/pages` - Pages are also react components, but they represent a page or screen of an app. These map 1:1 with a route in the AppRoutes.tsx file.

- `/services` - All the API methods are put in a folder called services. It is a good practise so that we don't put the business logic of an API call directly into a component, and so that any component can easily reference a service that it needs.

- `/styles` - This styles folder is where the generated styles and any custom css goes.

- `AppRoutes` - This file contains all the routes of the application. 

- `index.tsx` - This is your typical index file, where you render your React app to the document.

## Setting up Styling

[Setting Up Tailwind CSS In A React Project](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)

## Component Library with Storybook

[Start a component library with Storybook, Tailwind, and Typescript.](https://dev.to/elisealcala/start-a-component-library-with-storybook-tailwind-and-typescript-2ofa)