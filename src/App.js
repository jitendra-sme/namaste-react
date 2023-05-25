import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

const App = () => {
  /* const [signup, setSignup] = useState(false);
  const signupHandler = (bool) => {
    setSignup(bool);
  }; */
  return (
    <Fragment>
      {/* {!signup && <Signup sendDataBack={signupHandler} />}
      {signup && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )} */}
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resid",
        element: <Restaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
