import Card from "./Card";
import restroList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const filterData = (input, listData) => {
  const filterData = listData.filter((resList) =>
    resList.data.name.toLowerCase().includes(input)
  );
  return filterData;
};

const Body = () => {
  const [restroState, setRestroState] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    const restaurantsData = jsonData?.data?.cards[2]?.data?.data?.cards;
    setRestroState(restaurantsData);
  }

  return restroState.length <= 1 ? (
    <Shimmer />
  ) : (
    <section className="container">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchText.toLowerCase(), restroState);
            setRestroState(data);
          }}
        >
          Search
        </button>
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
