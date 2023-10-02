import { dataObject } from "../constants"
import * as Restaurant from "./RestaurantCard";
function RestauRantList() {
    return (
        <div className="restaurant-list">
            {
                // dataObject.map((item, index) => (
                //     <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                // ))

                // dataObject.map((item, index) => {
                //     return (
                //         <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                //     )
                // })

                // dataObject.forEach((item, index) => {
                //     return (
                //         <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                //     )
                // })

                // for(let i = 0; i<dataObject.length; i++){
                //     return{
                // <RestaurantCard data={dataObject[i].info} key={dataObject[i].info.resId} />
                // }}

            }

            {dataObject.map((item, index) => (
                <div key={dataObject[index].info.resId} style={{ display: "flex" }}>
                    {parseInt(dataObject[index].info.rating.votes) > 1 && <Restaurant.Recommended />}
                    <Restaurant.RestaurantCard data={dataObject[index].info} />
                </div>
            ))}
            {dataObject.map((item, index) => (
                <div key={dataObject[index].info.resId} style={{ display: "flex" }} >
                    {parseInt(dataObject[index].info.rating.votes) > 1 && <Restaurant.Recommended />}
                    <Restaurant.RestaurantCard data={dataObject[index].info} />
                </div>
            ))}
        </div>
    )

}

export default RestauRantList;
