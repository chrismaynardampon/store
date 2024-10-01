/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

const products = [
  {id: 1, name: 'Tennis', price: 49.9, type: 1},
  {id: 2, name: 'Badminton', price: 99.9, type: 1},
  {id: 3, name: 'Basketball', price: 29.9, type: 1},

  {id: 4, name: 'Ipod Touch', price: 99.9, type: 2},
  {id: 5, name: 'Iphone 5', price: 399.9, type: 2},
  {id: 6, name: 'Nexus 7', price: 199.9, type: 2},
];

const headers = [
  "Sporting Goods", "Electronics"
];

function App() {
 const [query, setQuery] = useState("");

  return (
    <div>
      <FilterProductTable>
        <SearchBar query={query} setQuery={setQuery}/>
        <ProductTable headers={headers} products={products}/>
      </FilterProductTable>
    </div>
  );
}

export default App
