function handleSearchTextValue(text) {
    console.log(text);
}

function SearchBar() {
    const searchText = "Text"
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchText} />
        </div>
    )
}
export default SearchBar;