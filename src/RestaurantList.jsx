import { dataObject } from "../constants"
import { useState } from "react";
import * as Restaurant from "./RestaurantCard";



function RestauRantList() {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(dataObject)
    function handleSearchTextValue(e) {
        setSearchText(e.target.value);
        console.log(searchText);
    }

    function filterCard(text, data) {
        const filteredData = data.filter((item) => item.info.name.includes(text));
        setFilteredData(filteredData);
    }

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
                <button onClick={() => filterCard(searchText, dataObject)}>Search</button>
            </div>

            <div className="restaurant-list">
                {filteredData.map((item, index) => (
                    <div className="restaurant-card" key={filteredData[index].info.name}>
                        <Restaurant.RestaurantCard data={filteredData[index].info} />
                        {parseInt(filteredData[index].info.rating.votes) > 1 && <Restaurant.Recommended />}
                    </div>
                ))}
            </div>
        </>
    )

}


export default RestauRantList;
