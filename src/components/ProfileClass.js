import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      userInfo: {
        name: "",
        avatar: "",
      },
    };
    console.log("Child - Constructor " + this.props.name);
  }
  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/jitendra-sme");
    const data = await response.json();
    //console.log(data);
    this.setState({
      userInfo: {
        name: data.name,
        avatar: data.avatar_url,
      },
    });
    console.log("Child - ComponentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.name1 !== prevState.name1) {
      // it is handled in useEffect by second parameter Array
      console.log("Hello");
      // Code
    }
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount"); // cleaning function
  }
  render() {
    console.log("Child - Render - " + this.props.name);

    return (
      <>
        <h2>Profile Class Component {this.state.name1}</h2>
        <p>Profile Class Component Description {this.state.name2}</p>
        <button onClick={() => this.setState({ name1: "G1" })}>
          Change Name
        </button>
        <button onClick={() => this.setState({ name2: "G2" })}>
          Change Name 2
        </button>
        <h2>Github:</h2>

        <p>Name: {this.state.userInfo.name}</p>
        <img src={this.state.userInfo.avatar} width="100px" height="100px" />
      </>
    );
  }
}
export default ProfileClass;
