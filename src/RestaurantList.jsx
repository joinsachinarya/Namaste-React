import { dataObject } from "../constants"
import { useState } from "react";
import * as Restaurant from "./RestaurantCard";

function filterCard(text, data) {
    const filteredData = data.filter((item) => item.info.name === text);
    return filteredData;
}

function RestauRantList() {
    const [searchText, setSearchText] = useState("");
    function handleSearchTextValue(e) {
        setSearchText(e.target.value);
        console.log(searchText);
    }

    let arr = [];
    dataObject.forEach((item, index) => {
        arr.push(
            <Restaurant.RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
        )
    })
    for (let index = 0; index < dataObject.length; index++) {
        arr.push(<Restaurant.RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />)
    }

    return (
        <>
            {/* <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
                <button onClick={() => filterCard(searchText, dataObject)}>Search</button>
            </div>
            <div className="restaurant-list"> */}
            {/* {
                    // dataObject.map((item, index) => (
                    //     <RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                    // ))

                    dataObject.forEach((item, index) => {
                        arr.push(
                            <Restaurant.RestaurantCard data={dataObject[index].info} key={dataObject[index].info.resId} />
                        )
                    })

                    // for(let i = 0; i<dataObject.length; i++){
                    //     return{
                    // <RestaurantCard data={dataObject[i].info} key={dataObject[i].info.resId} />
                    // }}

                } */}
            {arr}

            {/* {dataObject.map((item, index) => (
                    <div key={dataObject[index].info.resId} style={{ display: "flex" }}>
                        {parseInt(dataObject[index].info.rating.votes) > 1 && <Restaurant.Recommended />}
                        <Restaurant.RestaurantCard data={dataObject[index].info} />
                    </div>
                ))} */}
            {/* </div> */}
        </>

    )

}



// function SearchBar({ data }) {
//     const [searchText, setSearchText] = useState("");
//     function handleSearchTextValue(e) {
//         text = e.target.value
//         setSearchText(text);
//     }

//     function filterCard() {
//         return data.filter((item) => console.log(item.info.name === searchText));

//     }

//     return (
//         <div className="search-bar">
//             <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
//             <button onClick={filterCard}>Search</button>
//         </div>
//     )
// }


export default RestauRantList;
