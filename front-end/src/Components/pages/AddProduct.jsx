import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    img: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jaigoldjwellerywbsite-back-end.onrender.com', product);
      navigate('/Rings');
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color:'coral' }}>Add Rings</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'price', 'img'].map((field) => (
          <div key={field} className="mb-3">
            <label className="form-label">{field.toUpperCase()}</label>
            <input
              type={field === 'price' ? 'number' : 'text'}
              name={field}
              className="form-control"
              value={product[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button className="btn text-white" style={{ backgroundColor: '#38a0a2' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
