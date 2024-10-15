/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';
import FilterProductTable from './components/FilterProductTable';
import SearchBar from './components/SearchBar';
import ProductCard from './components/products/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
 const [query, setQuery] = useState("");
 const [stockChecked, setStockChecked] = useState(false);

 useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        setProducts(data);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getProducts();
    return () => {};
  }, []);

  return (
    <div>
      <FilterProductTable>
        <SearchBar query={query} setQuery={setQuery} stockChecked={stockChecked} setStockChecked={setStockChecked} />
        {!loading ? (
          <div className='flex flex-wrap gap-3'>
            {products.map((product) => (
              <ProductCard key={product.id} imageSrc={product.image} name={product.title} />))}
        </div>) : (<span>Loading...</span>)}
      </FilterProductTable>
    </div>
  );
}

export default App
