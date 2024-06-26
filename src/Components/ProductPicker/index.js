import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../api';

const ProductPicker = ({ onSelectProducts, onClose }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await fetchProducts(query, page);
      setProducts(prev => [...prev, ...response.data]);
      setLoading(false);
    };

    loadProducts();
  }, [query, page]);

  const handleSelect = (product) => {
    onSelectProducts([product]);
    onClose();
  };

  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight &&
      !loading
    ) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div onScroll={handleScroll}>
      <input
        type="text"
        placeholder="Search Products"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(0);
          setProducts([]);
        }}
      />
      <div>
        {products.map((product) => (
          <div key={product.id} onClick={() => handleSelect(product)}>
            <img src={product.image.src} alt={product.title} />
            {product.title}
          </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ProductPicker;
