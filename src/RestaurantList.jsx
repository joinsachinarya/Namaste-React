import { dataObject } from "../constants"
import { useEffect, useState } from "react";
import * as Restaurant from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { fetchUrlData } from "./utils/fetchUrlData";



function RestauRantList() {
    const [searchText, setSearchText] = useState("");
    const [restaurantData, setRestaurantData] = useState(null);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState(null);

    function filterRestaurant(text, data) {
        const filtereData = data.filter((item) => item?.info?.name?.toLowerCase().includes(text.toLowerCase()));
        setFilteredRestaurantData(filtereData);
    }

    function handleSearchTextValue(e) {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        getRestaurantData();
    }, [])

    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    async function getRestaurantData() {
        const response = await fetchUrlData(url);
        const fetchedRestaurantData = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantData(fetchedRestaurantData)
        setFilteredRestaurantData(fetchedRestaurantData)
    }

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
                <button onClick={() => filterRestaurant(searchText, restaurantData)} className="button">Search</button>
            </div >

            {!filteredRestaurantData ? <Shimmer /> :
                <div className="restaurant-list">
                    {filteredRestaurantData.map((item, index) => (
                        <Link to={`/restaurant/${filteredRestaurantData[index]?.info?.id}`} key={filteredRestaurantData[index]?.info?.id}>
                            <div className="restaurant-card" >
                                <Restaurant.RestaurantCard {...filteredRestaurantData[index]?.info} />
                                {filteredRestaurantData[index]?.info?.avgRating > 4 && <Restaurant.Recommended />}
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </>
    )

}


export default RestauRantList;
