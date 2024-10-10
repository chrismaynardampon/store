/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState([]);
 const [query, setQuery] = useState("");
 const [stockChecked, setStockChecked] = useState(false);

 useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      setProducts(data);
    };

    getProducts();
    return () => {};
  }, []);

  return (
    <div>
      <FilterProductTable>
        <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked} />
        <div className='flex flex-col gap-3'>
        {products.map((product) => <span key={product.id}> {product.title}</span>)}
        </div>
      </FilterProductTable>
    </div>
  );
}

export default App
