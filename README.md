# Namaste React 🔥

### page structure

> Header
>
> > logo  
> > nav

> Body
>
> > search  
> > cards

> Footer
>
> > copyrights  
> > quick links

## Notes

### VS Code Extensions:

Prettier\
Bracket Pair Colorization\
ESLint\
Better Comments

---

Emmet: it generates some code inside for you inside VS Code  
CDN: what and why we use it  
Crossorigin

NPM manages packages but it doesn't stand for node package manager  
package.json is a configuration for npm  
npm init  
jest - for testing

webpack, parcel, veet = bundler bundles/packages your app so that it can be shipped to prod.  
npm install -D parcel (dev and normal dependancy)  
caret will automatically upgrades the version  
tilde will upgrade to major version  
transitive dependancy  
npx - execute package  
npm - install package  
npx parcel index.html  
npm install react, react-dom  
read about parceljs.org

Babel - transpile code to JS so JS Engine can undderstand it  
JSX code is transpiled by Parcel via Babel while executing/building

props = arguments to function  
config driven ui - frontend system design  
ui layer, data layer

resData?.data = optional chaining  
Key => when there component at same level, they should be uniquely represented

Index as a key is an anit-pattern (never use index as a key)

Reach folder structure  
default and named export/import  
UI Layer, Data Layer  
Fast DOM manipulation

Hooks => it's normal JS utility function which is given to us by React, it's a pre-built function  
Two most important hooks => useState(), useEffect()  
whenever a state variable is updated, React will re-render the component.

Reconciliation Algorithm (React Fiber - https://github.com/acdlite/react-fiber-architecture)  
Diff. Algorithm

Hooks method/function trigger the diff. algorithm which push the difference b/w old and new Virtual DOM to Actual DOM

### From Live Demo

state variable re-render the component but updates only the element where the state variable is used. (fiber architecture)

Microservices, Monolith

UI Microservice, API Microservice, Data Microservice, Logs Microservice, Auth Microservice

support@namastedev.com - https://discord.gg/TesmMGGe

Shimmer Design - loading effect  
Conditional Rendering  
home work = filteredRestaurant, no result of filter, shimmer at initial load, login & logout, async and await with error handling

JS Expression and Statement => only JS Expression can be written inside JSX  
JSX Curly braces

## E:7 - Finding the path

useState is a hook which is used as a local variable inside a component  
useEffect is called after initial render of the component.  
two parameters => callback, dependency array  
Never create a component inside a component  
Do not create a hook inside a condition, loop like if/else, for loop  
Array(10).fill("").map((e,index)=>(<div>Shimmer</div>))

React Router  
npm install react-router-dom  
2 side routing: client side and server side routing  
Dynamic routing  
Object.values - study  
Login page with Formik

## E:8 - Let's get Classy

Profile component using router  
Class based component cannot be created without render method.  
WE DO NOT MUTATE STATE DIRECTLY, NEVER do this.state = something  
Class component => constructor(), super(), this.state = {}, this.setState(), componentDidMount()  
lifecycle => 1. Render phase 2. Commit phase  
componentDidMount => will be triggered after first render  
componentDidUpdate => will be triggered after every next render
Render => the render() method is the only required method in a class component.

### Class component

componentDidMount() => it is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

componentDidUpdate(prevProps, prevState, snapshot) => it is invoked immediately after updating occurs. This method is not called for the initial render.

componentWillUnmount() => it is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

> Research:
>
> > 1. constructor(props) and super(props) in class comp. =>  
> >    If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.  
> >    The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, **this.props will be undefined in the constructor**, which can lead to bugs.
> > 2. async works with componentDidMount but not with useEffect() hook =>  
> >    You cannot directly make the callback function supplied to the useEffect hook async because: (1) async functions implicitly return a promise, and; (2) useEffect expects its callback to either return nothing or a clean-up function.  
> >    Therefore, to use async/await inside the useEffect hook, you can do either of the following: (1) Create a Self-Invoking Anonymous Function; (2) Create a Nested Named Function.

## E:9 Optimizing our app

Function are Reusable, Readable, Maintainable, Testable  
Modularity?  
Custom Hooks => API calls, isOnline (first try with custom function and then hook - check with optional chaining)  
Chunking / Code Splitting / Dynamic Bundling / Lazy Loading / On Demand Loading / Dynamic Import  
System Design (architecture)  
Upon On Demand Loading => upon render => suspend loading  
Never ever load your dynamic component inside another component

## E:10 Jo Dikhta Hai Vo Bikta Hai - What is seen is sold

CSS
Markup: 1. Native CSS  
2. Sass  
3. Inline CSS  
4. Styled Components  
5. CSS Component Library:

- Pros: Easy to use
  - Fast development
  - Reuability
  - Consistency
- Cons: Builder size is heavy
  - No customization - lose control on design

Homework: PostCSS - transform CSS with JS, tailwind.config.js  
.postcssrc = takes the configuration and takes Parcel to compile tailwind css to normal css  
Extensions: Tailwind CSS IntelliSense

## E:11 Data is the new Oil

support@namastedev.com

STUDY: Suspense from React  
Props Drilling - passing props to grand-children through direct child  
React Developer Tools  
Lifting the State Up - control children comp. from parents instead of children comp.  
Context - createContext, useContext, createContext Object.Provider  
HW: nesting context

## E:12 Let's build our app

Context => any component can modify the Context and it can be accessed by any component

Redux = old way  
Redux Toolkit = new way  
Redux Store (Big Object) => an event/click on a button Dispatches an Action which calls a Reducer function which updates the slice of the Redux Store  
Write mode => fire an event >> dispatches an action >> calls a reducers function >> updates the slice of the store  
Read mode => using useSelector to read Redux Store  
Installation => npm i @reduxjs/toolkit (core job of redux is maintain/manage the store)  
Installlation=> npm i react-redux (creating the bridge b/w react and redux)

=> configureStore, Provider component, createSlice, useDispatch, useSelector  
redux-toolkit documentation - middleware, thunk, RTK query  
Redux DevTools chrome extension
