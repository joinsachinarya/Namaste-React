import { useEffect, useState } from "react";
import { CDN_IMG_BASE_URL } from "../constants/constants";
import { useParams } from "react-router-dom";
import { fetchUrlData } from "../utils/fetchUrlData";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANT_DETAILS_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice"

function RestaurantCardDetails() {
    const [details, setDetails] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getRestaurantCardDetails();
    }, [])

    const url = FETCH_RESTAURANT_DETAILS_URL.replace("resId", id);
    async function getRestaurantCardDetails() {
        const response = await fetchUrlData(url)
        const data = response?.data?.cards[0]?.card?.card?.info;
        setDetails(data);
        const menuItems = response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
        setMenuItems(menuItems)
    }

    const handleAddItem = (item) => {
        dispatch(addItem(item?.card?.info));
    }

    return (
        <>
            {details ? (
                <div className="flex border m-10 rounded-lg">
                    <div className="bg-orange-50 text-center">
                        <img alt={details.name} src={`${CDN_IMG_BASE_URL}` + `${details.cloudinaryImageId}`} style={{ width: "500px" }} />
                        <p className="font-bold text-2xl py-2" style={{ color: "orange" }}>{details.name} <span style={{ fontSize: "22px" }}>, {details.city}</span></p>
                        <p className="text-red-600 py-2 font-semibold">Two plates only on: ₹{details.costForTwo}/-</p>
                    </div>
                    <div className="p-8">
                        <p className="text-red-400 font-semibold text-xl">Restaurant Type: {details.veg ? "Veg" : "NonVeg"}</p>

                        <p className="pt-5 tex-base">Cuisines Types:   👇</p>
                        {details?.cuisines?.map((cuisine, index) => (
                            <ul className="text-orange-500 pt-2" key={index}>
                                <li> 🍕 {cuisine}</li>
                            </ul>
                        ))}

                        <p className="pt-5 tex-base">Menu Items:   👇</p>
                        {menuItems?.map((item, index) => (
                            <ul className="text-red-400 pt-2" key={index}>
                                <li> 🍕 {item?.card?.info?.name} <button className="border bg-green-400 text-white rounded p-2 ml-2" onClick={() => handleAddItem(item)}>Add to Cart</button></li>
                            </ul>
                        ))}
                    </div>
                </div>
            ) : <Shimmer />}
        </>
    )
}
export default RestaurantCardDetails;