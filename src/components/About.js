import ClassComponent from "./ClassComponent";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    // console.log("Parent - Constructor");
  }
  componentDidMount() {
    // console.log("Parent - ComponentDidMount");
  }
  render() {
    // console.log("Parent - Render");
    return (
      <>
        <h1>About Us</h1>
        <h2>You landed to the About Us page</h2>
        <Profile name={"Jitendra"} />
        <ProfileClass name={"Jitu"} />
        <ClassComponent />
      </>
    );
  }
}
export default About;
/**
 * Parent - Constructor
 * Parend - Render
 *  Child - Constructor
 *  Child - Render
 *  Child 2 - Constructor
 *  Child 2 - Render
 *  Child - componentDidMount
 *  Child 2 - componentDidMount
 * Parent - componentDidMount
 */
