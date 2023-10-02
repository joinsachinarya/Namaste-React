import { useState } from "react";
import { dataObject } from "../constants";



function SearchBar() {
    const [searchText, setSearchText] = useState("");
    function handleSearchTextValue(e) {
        text = e.target.value
        setSearchText(text);
        console.log(searchText);
    }

    function filterCard() {
        return dataObject.filter((item) => item.info.name === searchText)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
            <button onClick={filterCard}>Search</button>
        </div>
    )
}
export default SearchBar;