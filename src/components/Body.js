import Card from "./Card";
import restroList from "../utils/mockData";
import { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const filterData = (input, listData) => {
  const filterData = listData.filter((resList) =>
    resList.data.name.toLowerCase().includes(input)
  );
  return filterData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
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
    setAllRestaurants(restaurantsData);
    setFilterRestaurant(restaurantsData);
  }

  return (
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
            const data = filterData(searchText.toLowerCase(), allRestaurants);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const topRatings = filterRestaurant.filter(
              (topRestaurant) => topRestaurant.data.avgRating >= 4
            );
            setFilterRestaurant(topRatings);
          }}
        >
          Top Restaurant
        </button>
      </div>
      {allRestaurants.length === 0 ? (
        <ShimmerSimpleGallery card imageHeight={300} caption />
      ) : filterRestaurant.length === 0 ? (
        <p>No restaurant found</p>
      ) : (
        <div className="card-container">
          {filterRestaurant.map((restaurant) => (
            <Card key={restaurant.data.id} restro={restaurant.data} />
          ))}
        </div>
      )}
    </section>
  );
};
export default Body;
