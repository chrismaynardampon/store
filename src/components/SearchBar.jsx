const SearchBar = ({query, setQuery, stockChecked, setStockChecked, sort, setSort}) => {
  return (
    <div>
      <input type="text" placeholder="Type here" className="border-2 rounded-md p-2 border-violet-300" name="search" id="search" value={query} onChange={(event) => setQuery(event.target.value) } />
      <div>
      <input type="checkbox" name="checkbox" id="checkbox" checked={stockChecked} onChange={(event) => setStockChecked(event.target.checked)}/>
      Only show products in stock
      </div>
      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option name="sort" className="border-2 rounded-md p-2 border-violet-300" value="asc">asc</option>
        <option name="sort" className="border-2 rounded-md p-2 border-violet-300" value="desc">desc</option>
      </select>
      

    </div>
  )
}

export default SearchBar;
