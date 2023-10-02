function handleSearchTextValue(e, text) {
    text = e.target.value
    console.log(text);
}

function SearchBar() {
    let searchText = "Text"
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} onChange={() => handleSearchTextValue(event, searchText)} />
        </div>
    )
}
export default SearchBar;