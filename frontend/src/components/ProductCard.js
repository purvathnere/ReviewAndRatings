import React, { useState } from 'react';
import axios from 'axios';

const ProductCard = ({ product }) => {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/review', {
        product_id: product.id,
        ...form
      });
      alert('Submitted!');
    } catch (err) {
      alert(err.response.data.error || 'Error');
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <input placeholder="Your Name" onChange={e => setForm({ ...form, user: e.target.value })} />
      <input type="number" placeholder="Rating (1-5)" min="1" max="5" onChange={e => setForm({ ...form, rating: e.target.value })} />
      <textarea placeholder="Write a review..." onChange={e => setForm({ ...form, review: e.target.value })}></textarea>
      <input placeholder="Photo URL (optional)" onChange={e => setForm({ ...form, photo_url: e.target.value })} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProductCard;
