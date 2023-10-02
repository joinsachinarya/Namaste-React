import { useState } from "react";
import { dataObject } from "../constants";

//This component is not used yet
function SearchBar() {
    const [searchText, setSearchText] = useState("");
    function handleSearchTextValue(e) {
        text = e.target.value
        setSearchText(text);
    }

    function filterCard() {
        return dataObject.filter((item) => item.info.name === searchText)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
            <button onInput={filterCard} className="button">Search</button>
        </div>
    )
}
export default SearchBar;