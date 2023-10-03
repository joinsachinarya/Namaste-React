import { dataObject } from "../constants"
import { useState } from "react";
import * as Restaurant from "./RestaurantCard";



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


    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
                <button onClick={() => filterRestaurant(searchText, restaurantData)} className="button">Search</button>
            </div >

            <div className="restaurant-list">
                {filteredRestaurantData.map((item, index) => (
                    <div className="restaurant-card" key={filteredRestaurantData[index]?.info?.name}>
                        <Restaurant.RestaurantCard {...filteredRestaurantData[index]?.info} />
                        {parseInt(filteredRestaurantData[index]?.info?.rating?.votes) > 1 && <Restaurant.Recommended />}
                    </div>
                ))}
            </div>
        </>
    )

}


export default RestauRantList;
