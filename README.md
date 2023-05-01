# Namaste React 🔥

# page structure

/\*
Header

- logo
- nav
  Body
- search
- cards
  Footer
- copyrights
- quick links
  \*/

# Notes

## VS Code Extensions:

Prettier\
Bracket Pair Colorization\
ESLint\
Better Comments

---

Emmet: it generates some code inside for you inside VS Code##
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
