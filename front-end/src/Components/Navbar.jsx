import React from 'react'
import './Navbar.css'

import {NavLink} from 'react-router-dom'
import Logosearch from './logosearch'
import Delivery from './pages/Delivery'




const Navbar = () => {
  
  return (
    <nav>
    <Logosearch />
      
    <div className='navbar'>
      
       
        <ul className='nav-menu'>
        <li> <NavLink to='/Earings'>Earings</NavLink> </li>
         <li><NavLink to='/Bangles'>Bangles</NavLink> </li>
         <li><NavLink to='/Chains' >Chains</NavLink> </li>
         <li><NavLink to='/Rings' >Rings</NavLink> </li>
         <li><NavLink to='/Coinsbar'>Coins&Bars</NavLink> </li>
        <li> <NavLink to='/AllJewellery'>All Jewellery</NavLink> </li>
         <li><NavLink to='/Collections'>Collections</NavLink> </li>
         <li><NavLink to='/Legacy'>Legacy</NavLink> </li>
         

        
        
        </ul>  
      
    </div>
    </nav>
  )
}

export default Navbar