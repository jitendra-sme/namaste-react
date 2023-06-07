import { useState, useEffect } from "react";
const useAPI = (url) => {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setFetchData(data);
    };
    getData();
    console.log("custome hook - useEffect()");
  }, []);
  console.log("custome hook");
  return fetchData;
};
export default useAPI;
