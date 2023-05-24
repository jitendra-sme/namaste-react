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
Research: 1. constructor, super() in class comp. 2. async works with componentDidMount but not with useEffect() function - WHY?  
WE DO NOT MUTATE STATE DIRECTLY, NEVER do this.state = something  
Class component => constructor(), super(), this.state = {}, this.setState(), componentDidMount()  
lifecycle => 1. Render phase 2. Commit phase  
componentDidMount => will be triggered after first render  
componentDidUpdate => will be triggered after every next render
