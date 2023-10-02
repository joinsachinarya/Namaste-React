import { dataObject } from "../constants"
import { useState } from "react";
import * as Restaurant from "./RestaurantCard";



function RestauRantList() {
    const [searchText, setSearchText] = useState("");
    const [configData, setConfigData] = useState(dataObject)
    function handleSearchTextValue(e) {
        setSearchText(e.target.value);
    }

    function filterCard(text, data) {
        const filteredData = data.filter((item) => item.info.name.includes(text));
        setConfigData(filteredData);
    }

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText}
                    onChange={(event) => handleSearchTextValue(event)}
                    onInput={() => setConfigData(dataObject)}
                />
                <button onClick={() => filterCard(searchText, configData)} className="button">Search</button>
            </div >

            <div className="restaurant-list">
                {configData.map((item, index) => (
                    <div className="restaurant-card" key={configData[index].info.name}>
                        <Restaurant.RestaurantCard {...configData[index].info} />
                        {parseInt(configData[index].info.rating.votes) > 1 && <Restaurant.Recommended />}
                    </div>
                ))}
            </div>
        </>
    )

}


export default RestauRantList;
