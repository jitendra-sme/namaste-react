import Card from "./Card";
import restroList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAPI from "../hooks/useAPI";

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
  // console.log("before API call");
  const restaurantList = useAPI(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
  );
  // console.log("after API call");
  useEffect(() => {
    // getRestaurants();
    // console.log("body - useEffect()");
    const restaurantsData = restaurantList?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(restaurantsData);
    setFilterRestaurant(restaurantsData);
  }, [restaurantList]);

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
    <section className="bg-gray-50">
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
          className="bg-blue-700 text-white py-1 px-4 rounded-full m-2"
          onClick={() => {
            const data = filterData(searchText.toLowerCase(), allRestaurants);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
        <button
          className="bg-blue-700 text-white py-1 px-4 rounded-full m-2"
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
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : filterRestaurant?.length === 0 ? (
        <p>No restaurant found</p>
      ) : (
        <div className="flex flex-wrap gap-8 m-8">
          {filterRestaurant?.map((restaurant) => (
            <Link
              className="flex"
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {/* <Card user={user} restro={restaurant.data} /> */}
              <Card restro={restaurant.data} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
export default Body;
