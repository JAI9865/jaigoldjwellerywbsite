import React, { useState } from 'react';
import axios from 'axios';

const Delivery = ({ onClose }) => {
  const [formData, setFormData] = useState({
    building: '',
    area: '',
    landmark: '',
    pincode: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/delivery', formData);
      alert(response.data.message);
      onClose(); // Close modal on success
    } catch (error) {
      console.error(error);
      alert("Failed to deliver: " + (error.response?.data?.message || "Server Error"));
    }
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-light bg-opacity-75" style={{ zIndex: 1050 }}>
      <aside className="card shadow p-4" style={{ width: '400px', backgroundColor: "burlywood" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title mb-0" style={{ color: "Gold" }}>Deliver To</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <label className="text-dark">Flat/House no/Building/Apartment</label>
          <input type="text" name="building" value={formData.building} onChange={handleChange} className="w-100" style={inputStyle} /><br />

          <label className="text-dark">Area/Street/Sector/Village</label>
          <input type="text" name="area" value={formData.area} onChange={handleChange} className="w-100" style={inputStyle} /><br />

          <label className="text-dark">Landmark</label>
          <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="E.g. Manikoondu opposite" className="w-100" style={inputStyle} /><br />

          <label className="text-dark">Pincode</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="E.g. 614701" className="w-100" style={inputStyle} /><br />

          <label className="text-dark">Town/City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="E.g. Thanjavur" className="w-100" style={inputStyle} /><br /><br />

          <select name="state" value={formData.state} onChange={handleChange} className="w-100" style={inputStyle}>
            <option value="">Select</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Telangana">Telangana</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Karnataka">Karnataka</option>
          </select><br /><br />

          <button className="btn text-white w-100" style={{ backgroundColor: "green" }} onClick={handleSubmit}>Deliver to this Address</button>
        </div>
      </aside>
    </div>
  );
};

const inputStyle = {
  backgroundColor: "#e7f0ef",
  height: "40px",
  border: "2px solid black",
  borderRadius: "5px",
};

export default Delivery;
