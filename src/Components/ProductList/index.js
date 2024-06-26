import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import AddProductButton from '../ProductButton';
import ProductPicker from '../ProductPicker';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const addProduct = () => {
    const newProduct = { name: '', variants: [] };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const applyDiscount = (index, discount) => {
    const newProducts = [...products];
    newProducts[index].discount = discount;
    setProducts(newProducts);
  };

  const handleEditProduct = (index) => {
    setCurrentEditIndex(index);
    setShowPicker(true);
  };

  const handleSelectProducts = (selectedProducts) => {
    const newProducts = [...products];
    newProducts.splice(currentEditIndex, 1, ...selectedProducts);
    setProducts(newProducts);
    setShowPicker(false);
  };

  return (
    <div>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          onRemove={() => removeProduct(index)}
          onApplyDiscount={(discount) => applyDiscount(index, discount)}
          onEdit={() => handleEditProduct(index)}
        />
      ))}
      <AddProductButton onAdd={addProduct} />
      {showPicker && (
        <ProductPicker
          onSelectProducts={handleSelectProducts}
          onClose={() => setShowPicker(false)}
        />
      )}
    </div>
  );
};

export default ProductList;
