function Searchbar({ searchText, setSearchtext }) {

    function handleChange(e) {
        setSearchtext(e.target.value)
    }

    return (
        <input type="text" 
        placeholder="Find Your Hero" 
        value={searchText} 
        onChange={handleChange} />
    )
}

export default Searchbar;