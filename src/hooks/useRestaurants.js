import { useState, useEffect } from "react"
import { FETCH_ALL_RESTAURANTS_URL } from "../constants/constants";
import { fetchUrlData } from "../utils/fetchUrlData";
function useRestaurants() {
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        getRestaurantData();
    }, [])

    const url = FETCH_ALL_RESTAURANTS_URL
    async function getRestaurantData() {
        const response = await fetchUrlData(url);
        const data = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(data)
    }

    return restaurants;
}

export default useRestaurants;