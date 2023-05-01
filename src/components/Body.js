import Card from "./Card";
import restroList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restroState, setRestroState] = useState(restroList);
  return (
    <section className="container">
      <div className="search-bar">
        <input type="search" /> <button>Search</button>
        <button
          onClick={() => {
            const topRatings = restroState.filter(
              (topRestro) => topRestro.data.avgRating >= 4
            );
            setRestroState(topRatings);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="card-container">
        {restroState.map((restaurant) => (
          <Card key={restaurant.data.id} restro={restaurant.data} />
        ))}
      </div>
    </section>
  );
};
export default Body;
