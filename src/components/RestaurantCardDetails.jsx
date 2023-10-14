import { useEffect, useState } from "react";
import { CDN_IMG_BASE_URL } from "../constants/constants";
import { useParams } from "react-router-dom";
import { fetchUrlData } from "../utils/fetchUrlData";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANT_DETAILS_URL } from "../constants/constants";

function RestaurantCardDetails() {
    const [details, setDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getRestaurantCardDetails();
    }, [])

    const url = FETCH_RESTAURANT_DETAILS_URL.replace("resId", id);
    async function getRestaurantCardDetails() {
        const response = await fetchUrlData(url)
        const data = response?.data?.cards[0]?.card?.card?.info;
        setDetails(data)
        console.log("restaurant details", response);
    }

    return (
        <>
            {details ? (
                <div className="restaurant-details">
                    <div style={{ marginTop: "32px" }}>
                        <img alt={details.name} src={`${CDN_IMG_BASE_URL}` + `${details.cloudinaryImageId}`} style={{ width: "500px" }} />
                        <h1 style={{ color: "orange" }}>{details.name} <span style={{ fontSize: "22px" }}>, {details.city}</span></h1>
                        <h4 style={{ color: "greenyellow" }}>Two plates only on: ₹{details.costForTwo}/-</h4>
                    </div>
                    <div style={{ margin: "32px" }}>
                        <h2 style={{ color: "gold" }}>Restaurant Type: {details.veg ? "Veg" : "NonVeg"}</h2>
                        <h2>Menu Items:</h2>
                        {details?.cuisines?.map((cuisine, index) => (
                            <ul style={{ marginLeft: "16px", color: "green" }} key={index}>
                                <li>{cuisine}</li>
                            </ul>
                        ))}

                    </div>
                </div>
            ) : <Shimmer />}
        </>
    )
}
export default RestaurantCardDetails;