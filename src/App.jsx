import './App.css';
import FilterProductTable from './components/FilterProductTable';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div>
      <FilterProductTable>
        <SearchBar/>
        <ProductTable/>
      </FilterProductTable>
    </div>
  );
}

export default App
