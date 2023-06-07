import { useEffect, useState } from "react";

const Api = () => {
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await res.json();
      setDataState(dataState);
      return dataState;
    };
    getData();
  }, []);
};
export default Api;
