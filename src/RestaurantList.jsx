import { dataObject } from "../constants"
import { useEffect, useState } from "react";
import * as Restaurant from "./RestaurantCard";
import Shimmer from "./Shimmer";



function RestauRantList() {
    const [searchText, setSearchText] = useState("");
    const [restaurantData, setRestaurantData] = useState(dataObject);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState(dataObject);

    function filterRestaurant(text, data) {
        const filtereData = data.filter((item) => item?.info?.name?.toLowerCase().includes(text.toLowerCase()));
        setFilteredRestaurantData(filtereData);
    }

    function handleSearchTextValue(e) {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        getRestaurantData();
        console.log("useEffect");
    }, [])

    async function getRestaurantData() {
        const readableStream = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await readableStream.json();
        const fetchedRestaurantData = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantData(fetchedRestaurantData)
        setFilteredRestaurantData(fetchedRestaurantData)
    }
    console.log("render");
    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
                <button onClick={() => filterRestaurant(searchText, restaurantData)} className="button">Search</button>
            </div >

            <div className="restaurant-list">
                {filteredRestaurantData.map((item, index) => (
                    <div className="restaurant-card" key={filteredRestaurantData[index]?.info?.id}>
                        <Restaurant.RestaurantCard {...filteredRestaurantData[index]?.info} />
                        {filteredRestaurantData[index]?.info?.avgRating > 4 && <Restaurant.Recommended />}
                    </div>
                ))}
            </div>
        </>
    )

}


export default RestauRantList;
