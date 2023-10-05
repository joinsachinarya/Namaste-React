import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "../constants";

function RestaurantDetails() {
    const [details, setDetails] = useState({});
    useEffect(() => {
        getRestaurantDetails();
    }, [])

    async function getRestaurantDetails() {
        const readableStream = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=413001&catalog_qa=undefined&submitAction=ENTER");
        const response = await readableStream.json();
        const data = response?.data?.cards[0]?.card?.card?.info;
        setDetails(data)
        console.log(data);
    }
    return (
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
    )
}
export default RestaurantDetails;