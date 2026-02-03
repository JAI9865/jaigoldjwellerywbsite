
import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Earings.css'
import chain from '../../assets/chains.jpg'
import chain1 from '../../assets/chain1.webp'
import chain2 from '../../assets/chain2.webp'
import chain3 from '../../assets/chain3.webp'
import chain4 from '../../assets/chain4.webp'
import chain5 from '../../assets/chain5.webp'
import chain6 from '../../assets/chain18.webp'
import chain7 from '../../assets/chain6.webp'
import chain8 from '../../assets/chain7.webp'
import chain9 from '../../assets/chain8.webp'
import chain10 from '../../assets/chain9.webp'
import chain11 from '../../assets/chain10.webp'
import chain12 from '../../assets/chain11.webp'
import chain13 from '../../assets/chain12.webp'
import chain14 from '../../assets/chain13.webp'
import chain15 from '../../assets/chain14.webp'
import chain16 from '../../assets/chain15.webp'
import chain17 from '../../assets/chain16.webp'
import chain18 from '../../assets/chain17.webp'







const Bangles = () => {
    const [cart,setCart]=useState([]);
    const addItem=(item)=>{
        const existingItem=cart.find((cartItem)=>cartItem.id===item.id);
        if(existingItem){
            setCart(cart.map(cartItem=>
            cartItem.id===item.id ?{...cartItem,quantity:cartItem.quantity+1}:cartItem
        ))
        }
        else{
            setCart([...cart,{...item,quantity:1}])
        }
    }
    const updateQuery=(id,quantity)=>{
        setCart(cart.map(item=>item.id===id?{...item,quantity:quantity}:item))
    }
    const removeItem=(id)=>{
        setCart(cart.filter(item=>item.id !==id))
    }
    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div>
        <Navbar/>
        <img src={chain} />
    <div className="container">
    <h1 className="text-center mt-4 bg-white"  >Showing (120) products</h1>
    <div className="row row-cols-2 row-cols-md-3 g-4 m-2">
      
        <div className="col">
        <div className="card">
            <img src={chain1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Hollow</h5>
            <p className="card-text">Rs.245000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:1,name:"Hollow",price:245000,quantity:1})}>AddToCart</button>
        
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={chain2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Machine Chain</h5>
            <p className="card-text">Rs.85000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:2,name:"Machine Chain",price:85000,quantity:1})}>AddToCart</button>
            
            
            
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={chain3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Handmade Design</h5>
            <p className="card-text">rs.285000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:3,name:"Handmade Design",price:285000,quantity:1})}>AddToCart</button>
          
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={chain4} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Savitham</h5>
            <p className="card-text">rs.125000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:4,name:"Savitham ",price:125000,quantity:1})}>AddToCart</button>
            </div>
        </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain5} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Sundari Model</h5>
                <p className="card-text">Rs.75000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:5,name:"Sundari Model",price:75000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain6}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Gents Chain</h5>
                <p className="card-text">Rs.250000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:6,name:"Gents Chain",price:250000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain7} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Machine chian</h5>
                <p className="card-text">Rs.275000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:7,name:"Machine chian",price:275000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain8} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Kerala Chain</h5>
                <p className="card-text">Rs.175850</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:8,name:"Kerala Chain",price:175850,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain18} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">18ct Chain</h5>
                <p className="card-text">Rs.75000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:9,name:"18ct Chain",price:75000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain9} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">18ct Chain</h5>
                <p className="card-text">Rs.760000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:10,name:" 18ct Chain",price:760000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain10} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Thali Chain</h5>
                <p className="card-text">Rs.545000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:11,name:"Thali Chain",price:545000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain11} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Icecream Chain </h5>
                <p className="card-text">Rs.100000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:12,name:"Icecream Chain",price:100000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain12} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Hollow Chain</h5>
                <p className="card-text">Rs.145200</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:13,name:"Hollow Chain",price:145200,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain13} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">18ct chain</h5>
                <p className="card-text">Rs.75000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:14,name:"18ct chain",price:75000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain14} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Machine Chain</h5>
                <p className="card-text">Rs.75000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Machine Chain ",price:75000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain15} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">V Chain</h5>
                <p className="card-text">Rs.85000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"V Chain",price:85000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain16} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Katta Chain</h5>
                <p className="card-text">Rs.145000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Katta Chain",price:145000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={chain17} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Sundari Chain</h5>
                <p className="card-text">Rs.95000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:16,name:"Sundari Chain",price:95000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div> 
        </div>
        <div className="col">
            <div className="card">
            
            <div className="card-body w-100">
                <h2 className="card-title text-success">My Cart</h2>
                {cart.length===0 ? <p>Cart is Empty</p> : (
                 cart.map(item=>(
                <div key={item.id}>
                <p>{item.name} - &#8377;{item.price}x{item.quantity} = {item.price*item.quantity} </p>
                <button className='btn bg-success text-white' onClick={()=>updateQuery(item.id,item.quantity +1)}>+</button>
                <button className='btn bg-success text-white' onClick={()=>updateQuery(item.id,item.quantity -1)} disabled={item.quantity===1}>-</button>
                <button className='btn bg-success text-white' onClick={()=>removeItem(item.id)}>Remove</button><br /><br />
                
            </div>
        ))
        )
        }  
            </div>
            <h2 className='text-success p-4'>Total = &#8377;{totalSum}</h2>
            </div>
            
        </div>
    </div>
    // </div>
  )
}

export default Bangles