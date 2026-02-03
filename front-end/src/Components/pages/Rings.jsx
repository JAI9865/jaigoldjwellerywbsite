import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import rings from '../../assets/rings.jpg'

const Rings = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      setCart(cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const totalSum = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
        <Navbar/>
        <img src={rings} />
    <div className="container mt-4">
    
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: 'gold' }}>Jewells</h2>
        <Link to="/add-product" className="btn text-white" style={{ backgroundColor: 'gold' }}>
          Add Product
        </Link>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => (
          <div className="col" key={product._id}>
            <div className="card h-100">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', width: '200px', marginLeft: '50px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <b style={{ fontSize: '20px' }}>₹{product.price}</b>
                </p>
                <button
                  className="btn text-white mt-auto"
                  style={{ backgroundColor: '#38a0a2' }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-5">
        <h3 style={{ color: 'gold' }}>My Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item._id}>
                <p>
                  {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                </p>
                <button
                  className="btn bg-success text-white me-2"
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn bg-success text-white me-2"
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  className="btn bg-danger text-white me-2"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
                <hr />
              </div>
            ))}
            <h2 className="text-success p-4">
              Total = ₹{totalSum}
            </h2>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Rings;
