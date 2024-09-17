const SearchBar = () => {
  return (
    <div>
      <input type="text" name="search" id="search" />
      <div>
      <input type="checkbox" name="checkbox" id="checkbox" />
      Only show products in stock
      </div>
    </div>
  )
}

export default SearchBar;
