# Spotichip 
Work in progress.

## Developer Reference

API used https://developer.spotify.com/documentation/web-api/reference/#/

## Git Workflow

Master Branch - ultimate source of truth for live app    
Staging Branch- pre-live work for testing   
Dev/feature/es - features developed  

### Methodology when commiting

Workflow when commiting or pushing, written by [Robin  Wieruch](https://www.robinwieruch.de/git-team-workflow/)

- feat - actual feature implementation  
- style - code style and code clean up  
- test - actual test implementation  
- fix - bug fix  
- refactor - refactoring that doesn't affect the behavior of the code  
- chore - no production code changes, but more like configuration and setup  

Commit message could look like the following:  

- feat(users) add authentication  
- fix(logout) clean up cookie  
- test(login) cookie set with access token  
- style(*) fix indentation  
- chore(.gitignore) add .env file  


## Directory Structure

The actual files of a software projects are stored in the `src` folder. 

The project UI and views rely on Atomic desing principle by [Brad Frosts - Atomic desng principles](https://bradfrost.com/blog/post/atomic-web-design/)  
[Atoms](https://atomicdesign.bradfrost.com/chapter-2/#atoms) - Building blocks  
[Molecules](https://atomicdesign.bradfrost.com/chapter-2/#molecules) - Small component  
[Organisms](https://atomicdesign.bradfrost.com/chapter-2/#organisms) - Complex component  
[Pages](https://atomicdesign.bradfrost.com/chapter-2/#pages) - A web page  

### src

```
/src
├── /__tests__      
├── /config         # Text for the app
├── /context   
├── /hooks    
├── /routes      
├── /services       # Requests and API
├── /store          # Global Redux store
├── /styles  
├── /types  
├── /utils          # Common used functions
├── /views          # Anything to do with UI  
│   ├── atoms       # Used for building blocks i.e button, input   
│   └── molecules   # Made from atoms i.e search bar  
│   └── organisms   # Complex UI components i.e carousel   
│   └── pages       # Respresents a page  
```

### Styles

On a TailwindCSS styles in a folder aren't as used.   

To configure constants or styling of the website, check `tailwind.config.js` file for any configuration. 

Instead of using variables in Scss, tailwindcss does all of that for us, automatic with a good naming convention for styles.  


If needed, we can always write CSS(Scss) 
 
Because the folders are a mess, I put a prefix to put some order on them for easier redability.  

``` 
/styles  
├── /0-vendor       # 3rd party libraries i.e tailwindcss   
├── /1-helpers      # mixins   
├── /2-base         # global styles   
├── /3-layouts      # global layouts such as: header, footer, nav, sidebar  
├── /4-atoms        # Used for building blocks i.e button, input     
├── /5-molecules    # Complex UI components i.e carousel     
├── cheat           # hot fixes - should be cleaned once a while  
├── styles          # imports all above  
 
```

Some worth mentionds to popular CSS methodologies when working without TailwindCSS.

[BEM](http://getbem.com/) - Block Element Modified  
[SMACSS](http://smacss.com/) - Scalable and Modular Architecture for CSS  
OOCSS - Object Oriented CSS  

## Learning

Talks about naming and conventions.  

https://github.com/adamwathan/laracon2017    
https://www.youtube.com/watch?v=MF0jFKvS4SI    
https://restfulapi.net/resource-naming/    


## Design Guide

Brand color:  
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