# Spotichip  

Work In Progress

## Git Workflow

Master - live work   
Staging - pre-live work for testing  
Dev - branch to save files to  

## Directory Structure  

https://bradfrost.com/blog/post/atomic-web-design/  

This goes for the entire application, weather were talking about programming/functional programming or css  

### `src`  

Top level of the directory struture inside `src`  

 
- [`/config`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/config) - settings for the app stores in a JS object  
- [`/context`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/context) - global Context  
- [`/hooks`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/hooks) - custom hooks  
- [`/routes`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/routes) - applicatoin routes  
- [`/services`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/services) - stores requests and api functions  
- [`/store`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/store) - global Redux store  
- [`/styles`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/styles) - cSS/Scss  
- [`/types`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/types) - TypeScript types
- [`/utils`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/utils) - Utilities, helpers and like - used globaly withing the app  
- [`/views`](https://github.com/AurelianSpodarec/spotichip-react/tree/dev/src/views) - Another word for `pages` or `screens` that contains the majority of app, that include pages and components 


- [`App`](https://github.com/AurelianSpodarec/spotichip-react/blob/dev/src/App.tsx)    - Used as a file that gets passed to index
- [`Index`](https://github.com/AurelianSpodarec/spotichip-react/blob/dev/src/index.tsx) - Connects Redux, stric mode etc...

### Views structure  
The views structure follows a REST naming;  

Great URL links:  
https://github.com/adamwathan/laracon2017  
https://www.youtube.com/watch?v=MF0jFKvS4SI  
https://restfulapi.net/resource-naming/  

## Styles  

Because the styles need to be in order when you load them, I prefer to name them with a prefix of a number, so the folder structure looks in the correct order

https://bradfrost.com/blog/post/atomic-web-design/  

- `/0-lib` - third party libraries such as tailwindcss and alike  
- `/1-helpers` - mixins  
- `/2-base` - global styles   
- `/3-layouts` - global layouts such as header, footer, navigation that are used though the app  
- `/4-objects` - molecules that build components, can include button, input and so on    
- `/5-components` - molecules give us building blocks to create organisms, such as: carousels, product grid, search form  
- `cheat` - any quick fix should go to this file  


## Design  

Spotify TailwindCSS Values  
Default gutter: 8  

## TODO
- Add testing  
- Improve SEO  
- Auto load files - https://www.npmjs.com/package/dot-index-webpack-plugin  
- Add meta data and title to each page that needs it, create dynamic react component - use https://www.npmjs.com/package/react-helmet  

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