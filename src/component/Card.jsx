// src/components/Card.jsx
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';


const Card = () => {
  const { products } = useContext(ProductContext);

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition">
          <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
          <h2 className="text-lg font-semibold mt-2 line-clamp-2">{product.title}</h2>
          <p className="text-green-600 font-bold mt-1">${product.price}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
