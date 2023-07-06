import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import useAPI from "../hooks/useAPI";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Restaurant = () => {
  const { resid } = useParams();
  const restaurantID =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
    resid;
  const restaurantInfo = useAPI(restaurantID);
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };
  // restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name
  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <Fragment>
      <div className="flex justify-around">
        <Card
          key={restaurantInfo?.data?.cards[0]?.card?.card?.info?.id}
          restro={{
            name: restaurantInfo?.data?.cards[0]?.card?.card?.info?.name,
            cuisines:
              restaurantInfo?.data?.cards[0]?.card?.card?.info?.cuisines,
            avgRating:
              restaurantInfo?.data?.cards[0]?.card?.card?.info?.avgRating,
            deliveryTime:
              restaurantInfo?.data?.cards[0]?.card?.card?.info?.sla
                ?.deliveryTime,
            costForTwo:
              restaurantInfo?.data?.cards[0]?.card?.card?.info?.costForTwo,
            cloudinaryImageId:
              restaurantInfo?.data?.cards[0]?.card?.card?.info
                ?.cloudinaryImageId,
          }}
        />
        <div>
          <h2 className="font-bold">What's New</h2>
          <ul>
            {Object.values(
              restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                ?.cards[1]?.card?.card?.itemCards
            ).map((item) => (
              <li className="pb-2" key={item.card?.info?.id}>
                {item.card?.info?.name}
                <button
                  onClick={() => addItemHandler(item.card?.info)}
                  className="bg-blue-700 text-white p-1 cursor-pointer"
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Restaurant;
