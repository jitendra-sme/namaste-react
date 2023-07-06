import React, { Fragment, Suspense, useState, useContext } from "react";
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
import Shimmer from "./components/Shimmer";
import InstaMart from "./components/InstaMart";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";

// const user = { name: "Jitendra", email: "dummy@test.com" };
const App = () => {
  /* const [signup, setSignup] = useState(false);
  const signupHandler = (bool) => {
    setSignup(bool);
  }; */
  // const user = useContext(UserContext);
  const [user, setUser] = useState({
    name: "Jitu",
    email: "test@gmail.com",
  });
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
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
        // element: <Body user={{ user }} />,
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
