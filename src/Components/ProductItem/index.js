import React from 'react';

const ProductItem = ({ product, onRemove, onApplyDiscount, onEdit }) => {
  const handleDiscountChange = (e) => {
    const discount = e.target.value;
    onApplyDiscount(discount);
  };

  return (
    <div>
      <input type="text" value={product.name} placeholder="Product Name"  />
      <button onClick={onRemove}>Remove</button>
      <button onClick={onEdit}>Edit</button>
      <input type="number" placeholder="Discount" onChange={handleDiscountChange} />
      {/* Add more fields and functionality as needed */}
    </div>
  );
};

export default ProductItem;
