// src/components/AddToCartButton.js
import React, { useState } from 'react';

const AddToCartButton = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    // Perform the actual "Add to Cart" action
    // For now, just log the selected quantity to the console
    console.log(`Added ${quantity} item(s) to the cart`);
    
    // You can pass the quantity and other relevant information to a parent component
    // to update the cart state or perform additional actions
    onAddToCart({ quantity });
  };

  return (
    <div>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </label>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
