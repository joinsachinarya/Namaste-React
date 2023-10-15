import { useEffect, useState } from "react";
import * as Restaurant from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import Offline from "./Offline";
import useRestaurants from "../hooks/useRestaurants";
import { filterRestaurants } from "../utils/filterRestaurants"


function RestauRantList() {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurantData, setFilteredRestaurantData] = useState(null);

    const isOnline = useOnline();
    const restaurants = useRestaurants();
    console.log("render", "filteredRestaurantData:", filteredRestaurantData, "restaurants:", restaurants);

    useEffect(() => {
        setFilteredRestaurantData(restaurants);
    }, [restaurants])

    function filterRestaurant(text, data) {
        const filtereData = filterRestaurants(text, data);
        setFilteredRestaurantData(filtereData);
    }

    function handleSearchTextValue(e) {
        setSearchText(e.target.value);
    }

    return (
        <>
            <div className="px-10 py-6 text-center gap-4">
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} className="leading-10 h-10 border rounded-l-md text-center" />
                <button onClick={() => filterRestaurant(searchText, restaurants)} className="h-10 bg-purple-200 px-5 rounded-r-md">Search</button>
            </div >

            {!isOnline ? <Offline /> : !filteredRestaurantData ? <Shimmer /> :
                <div className="flex flex-wrap justify-center pb-10 gap-6 mb-10">
                    {filteredRestaurantData.map((item, index) => (
                        <Link to={`/restaurant/${filteredRestaurantData[index]?.info?.id}`} key={filteredRestaurantData[index]?.info?.id}>
                            <div className="flex flex-col w-64 h-full p-5 border rounded shadow-lg" >
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
