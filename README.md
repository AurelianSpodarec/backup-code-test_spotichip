# Spotichip 
Work in progress.

## Contributing


## Developer Reference
API used https://developer.spotify.com/documentation/web-api/reference/#/


## Directory Structure

The actual files of a software projects are stored in the `src` folder. 

### src

```
├── /config    
├── /context   
├── /hooks    
├── /routes    
├── /services     
├── /store    
├── /styles  
├── /types  
├── /utils          
├── /views                                                                    # Anything to do with UI  
│   ├── [atoms](https://atomicdesign.bradfrost.com/chapter-2/#atoms)          # Used for building blocks i.e button, input   
│   └── [molecules](https://atomicdesign.bradfrost.com/chapter-2/#molecules)  # Made from atoms i.e search bar  
│   └── [organisms](https://atomicdesign.bradfrost.com/chapter-2/#organisms)  # Complex UI components i.e carousel   
│   └── [pages](https://atomicdesign.bradfrost.com/chapter-2/#pages)          # Respresents a page  
```

Note: Views follows [Brad Frosts Atomic desng principles](https://bradfrost.com/blog/post/atomic-web-design/).  


### Styles

Because the folders are a mess, I put a prefix to put some order on them for easier redability.

```
├── /0-vendor       # 3rd party libraries i.e tailwindcss
├── /1-helpers      # mixins 
├── /2-base         # global styles
├── /3-layouts      # global layouts such as: header, footer, nav, sidebar
├── /4-atoms        # Used for building blocks i.e button, input   
├── /5-molecules    # Complex UI components i.e carousel   
├── cheat           # hot fixes - should be cleaned once a while
├── styles          # imports all above
 
```

Note: Styles also follow [Brad Frosts Atomic desng principles](https://bradfrost.com/blog/post/atomic-web-design/).  

 
==========

Work In Progress

## Git Workflow

Master - live work   
Staging - pre-live work for testing  
Dev - branch to save files to  

## Directory Structure  
 
 
### Views structure  
The views structure follows a REST naming;  

Great URL links:  
https://github.com/adamwathan/laracon2017  
https://www.youtube.com/watch?v=MF0jFKvS4SI  
https://restfulapi.net/resource-naming/  



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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.