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

Project structure was taken from [stemmlerjs/ddd-forum](https://github.com/stemmlerjs/ddd-forum/tree/master/public/app)

```
/react-app
  /build
  /node_modules
  /public
  /src
    /assets
    /config
    /contexts
    /lib
    /modules
      /dummy-module
        /components
        /models
        /redux
          /operators
          actionCreators.ts
          actions.ts
          index.ts
          reducers.ts
          states.ts
    /pages
    /services
    /shared
      /components
      /services
    /stories
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

- `/config` - environment variables and initialization used by the app.

- `/modules` - organizing the pages and component by related topic.
  
  - `/modules/dummy-module` - This should be substitute with whatever name the modules has.

    - `/modules/dummy-module/components` - components made with module related context.

    - `/modules/dummy-module/models` - data models with module related context.

    - `/modules/dummy-module/redux` - module related actions, operators and reduced will be here.

- `/pages` - Pages are also react components, but they represent a page or screen of an app. These map 1:1 with a route in the AppRoutes.tsx file.

- `/shared` - any item that could be shared between the project.

  - `/shared/components` - components that are shared between multiple pages.
  
  - `/shared/layouts` - pages layouts.

  - `/shared/services` - All the API methods are put in a folder called services. It is a good practise so that we don't put the business logic of an API call directly into a component, and so that any component can easily reference a service that it needs.

- `/stories` - components that should be used in storybook.

- `/styles` - This styles folder is where the generated styles and any custom css goes.

- `AppRoutes` - This file contains all the routes of the application.

- `index.tsx` - This is your typical index file, where you render your React app to the document.

## Setting up Styling

[Setting Up Tailwind CSS In A React Project](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)

## Component Library with Storybook

[Start a component library with Storybook, Tailwind, and Typescript.](https://dev.to/elisealcala/start-a-component-library-with-storybook-tailwind-and-typescript-2ofa)