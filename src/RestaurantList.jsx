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
                <>
                    {parseInt(dataObject[index].info.rating.votes) > 1 && <Restaurant.Recommended data={dataObject[index].info.image} />}
                    <Restaurant.RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                </>
            ))}
            {dataObject.map((item, index) => (
                <>
                    {parseInt(dataObject[index].info.rating.votes) > 1 && <Restaurant.Recommended data={dataObject[index].info.image} />}
                    <Restaurant.RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                </>
            ))}
        </div>
    )

}

export default RestauRantList;
