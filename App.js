import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

const reactElem = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React from React Element 🔥"
);
const jsxElem = <h2>Namaste React using JSX element</h2>;

const HeadingComp = () => {
  return (
    <>
      <h1 id="head" className="heading">
        Namaste React using Component 🔥
      </h1>
      <span>Span tag</span>
    </>
  );
};
const Heading = () => (
  <React.Fragment>
    <div id="container">
      {reactElem}
      {jsxElem}
      <HeadingComp />
      <h1>Namaste React from Reach Component</h1>
    </div>
    <React.Fragment>
      <div id="container2"></div>
    </React.Fragment>
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

const root2 = ReactDOM.createRoot(document.getElementById("root2")).render(
  <HeadingComp />
);
