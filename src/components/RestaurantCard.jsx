import { CDN_IMG_BASE_URL } from "../constants/constants"

export function RestaurantCard({ name, cloudinaryImageId, costForTwo, cuisines, sla }) {
    return (
        <>
            <img alt={name} src={`${CDN_IMG_BASE_URL}` + `${cloudinaryImageId}`} style={{ height: "150px" }} />
            <h2 style={{ color: "orange" }}>{name}</h2>
            <h5 style={{ color: "black" }}>{[cuisines[0], cuisines[1]].join(", ")}</h5>
            <b style={{ color: "green" }}>{costForTwo}</b>
            <p>{sla.lastMileTravelString}</p>
        </>
    )
}

export function Recommended() {

    return (
        <div className="opacity-75" >
            Recommended 🌟
        </div>
    )

}

