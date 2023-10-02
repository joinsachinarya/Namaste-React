import { useState } from "react";



function SearchBar() {
    const [searchText, setSearchText] = useState("");
    function handleSearchTextValue(e) {
        text = e.target.value
        setSearchText(text);
        console.log(searchText);
    }
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} onChange={(event) => handleSearchTextValue(event)} />
        </div>
    )
}
export default SearchBar;