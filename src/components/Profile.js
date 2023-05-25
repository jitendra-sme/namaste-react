import { useEffect, useState } from "react";

const Profile = (props) => {
  const [surname, setSurname] = useState("");
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    getFollowersData();
    const timer = setInterval(() => {
      //console.log("useEffect()");
    }, 1000);
    return () => {
      clearInterval(timer);
      //console.log("cleanup");
    };
  }, []);
  const getFollowersData = async () => {
    // async function getFollowersData() {
    const response = await fetch(
      "https://api.github.com/users/akshaymarch7/followers"
    );
    const data = await response.json();
    setFollowers(data);
  };
  return (
    <>
      <h2>Profile Functional Component {props.name + surname}</h2>
      <button onClick={() => setSurname(" Kumar")}>Add Surname</button>
      {/* {console.log("Profile Functional Component - " + props.name + surname)} */}
      <h2>Akshay Followers on Github</h2>
      {followers.map((item, index) => (
        <div key={index}>
          <p>Follower: {item.login}</p>
          <img src={item.avatar_url} width="100px" height="100px" />
        </div>
      ))}
    </>
  );
};
export default Profile;
