import React from 'react'
import logo from '../assets/jai logo jewel.png'
import search from '../assets/searchimg.webp'
import './Logosearch.css'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";



const Logosearch = () => {
  return (
    
    <div>
        <div className='logo'>
        <div className='image' >
        
      </div>
      
      <div className='item' >
      <input type="text" placeholder='Search...'   />
     
      </div>
      <button type='submit' ><img src={search} className='button' /></button>
      <div className="d-flex align-items-center gap-5 flex-wrap justify-content-end mt-2 mt-md-0 p-5">
          
          <NavLink className="nav-link d-flex align-items-center text-nowrap" to="/Delivery">
            <button className="btn p-0 d-flex align-items-center" style={{ color: "white" }} >
              <CiLocationOn className="fs-4 me-1" />
              <span className="d-none d-md-inline">Delivery Address</span>
            </button>
          </NavLink>

          <NavLink className="nav-link d-flex align-items-center" style={{ color: "white" }} to="/HomeEssentials">
            <BiSolidOffer className="fs-4 me-1" />
            <span className="d-none d-md-inline">Offers</span>
          </NavLink>

          <NavLink className="nav-link d-flex align-items-center" style={{ color: "white" }} to="/Login">
            <FaUser className="fs-4 me-1" />
            <span className="d-none d-md-inline">Login</span>
          </NavLink>
          <button
            className="btn"
            style={{ color: "white" }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mySidebar"  
            aria-controls="mySidebar"
          >
            <FaCartShopping className="fs-4 me-1" />
            <span className="d-none d-md-inline">Cart</span>
          </button> 
        </div>
      </div>
      
      
    </div>
    
    
  )
}

export default Logosearch
