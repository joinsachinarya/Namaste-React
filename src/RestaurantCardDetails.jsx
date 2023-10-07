import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "../constants";
import { useParams } from "react-router-dom";
import { fetchUrlData } from "./utils/fetchUrlData";
import Shimmer from "./Shimmer";

function RestaurantCardDetails() {
    const [details, setDetails] = useState(null);
    useEffect(() => {
        getRestaurantCardDetails();
    }, [])
    const param = useParams();
    console.log(param);

    const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=413001&catalog_qa=undefined&submitAction=ENTER";
    async function getRestaurantCardDetails() {
        const response = await fetchUrlData(url)
        const data = response?.data?.cards[0]?.card?.card?.info;
        setDetails(data)
        console.log(data);
    }
    return (
        <>
            {details ? (
                <div className="restaurant-details">
                    <div>
                        <img alt={details.name} src={`${CDN_IMG_URL}` + `${details.cloudinaryImageId}`} style={{ width: "500px" }} />
                        <h1 style={{ color: "orange" }}>{details.name} <span style={{ font: "initial", color: "darkmagenta" }}>{details.city}</span></h1>
                        <h4 >Two plates only on ₹{details.costForTwo}/-</h4>
                    </div>
                    <div>
                        <h2>Menu Items:</h2>
                    </div>
                </div>
            ) : <Shimmer />}
        </>
    )
}
export default RestaurantCardDetails;