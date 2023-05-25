import React from "react";
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: "",
      name2: "",
    };
    // console.log("Child 2 - Constructor");
  }
  componentDidMount() {
    // console.log("Child 2 - ComponentDidMount");
  }
  render() {
    // console.log("Child 2 - Render");
    return (
      <>
        <h2>Class Component {this.state.name1}</h2>
        <p>Class Component Description {this.state.name2}</p>
        <button onClick={() => this.setState({ name1: "G1" })}>
          Change Name
        </button>
        <button onClick={() => this.setState({ name2: "G2" })}>
          Change Name 2
        </button>
      </>
    );
  }
}
export default ClassComponent;
