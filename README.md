# Spotichip  

## Dev Notes  


Atomic Design Principles  

## Directory Structure  


https://bradfrost.com/blog/post/atomic-web-design/  

This goes for the entire application, weather were talking about programming/functional programming or css  

### `SRC`  

Top level of the directory struture inside `src`  

- `/components` - reusable global components, such as but not limited to button, input, card, container  
- `/config` - settings for the app stores in a JS object  
- `/context` - global Context  
- `/hooks` - custom hooks  
- `/routes` - applicatoin routes  
- `/services` - stores requests and api functions  
- `/store` - global Redux store  
- `/styles` - stores CSS/Scss  
- `/types` - TypeScript  
- `/utils` - Utilities, helpers and like - used globaly withing the app  
- `/views` - Another word for `pages` or `screens` that contains the majority of app  
- `App`    - Used as a file that gets passed to index
- `Index` - Connects Redux, stric mode etc...

### Views structure  
The views structure follows a REST naming;  

Great URL links:  
https://github.com/adamwathan/laracon2017  
https://www.youtube.com/watch?v=MF0jFKvS4SI  
https://restfulapi.net/resource-naming/  

## Styles  

https://bradfrost.com/blog/post/atomic-web-design/  

- `/lib` - third party libraries such as tailwindcss and alike  
- `/helpers` - mixins  
- `/base` - global styles   
- `/layouts` - global layouts such as header, footer, navigation that are used though the app  
- `/objects` - molecules that build components, can include button, input and so on    
- `/components` - molecules give us building blocks to create organisms, such as: carousels, product grid, search form  
- `cheat` - any quick fix should go to this file  


## Design  

TailwindCSS Values  
Default gutter: 8  



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