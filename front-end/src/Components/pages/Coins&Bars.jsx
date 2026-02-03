import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Earings.css'
import coin from '../../assets/coins.webp'
import coin2 from '../../assets/coin2.webp'
import coin3 from '../../assets/coin3.webp'
import coin4 from '../../assets/coin4.webp'
import coin5 from '../../assets/coin5.webp'
import coin6 from '../../assets/coin6.webp'
import coin7 from '../../assets/coin7.webp'
import coin8 from '../../assets/coin8.webp'
import coin9 from '../../assets/coin9.webp'
import coin11 from '../../assets/coin11.webp'
import coin12 from '../../assets/coin12.webp'
import coin13 from '../../assets/coin13.webp'
import coin14 from '../../assets/coin14.webp'
import coin15 from '../../assets/coin15.webp'
import coin16 from '../../assets/coin16.webp'
import coin1 from '../../assets/coin1.webp'










const Coinsbar = () => {
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
        <img src={coin}/>
    <div className="container">
    <h1 className="text-center mt-4 bg-white"  >Showing (120) products</h1>
    <div className="row row-cols-2 row-cols-md-3 g-4 m-2">
      
        <div className="col">
        <div className="card">
            <img src={coin2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Coin</h5>
            <p className="card-text">Rs.25000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:1,name:"Coin",price:25000,quantity:1})}>AddToCart</button>
        
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={coin3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Coin</h5>
            <p className="card-text">Rs.87000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:2,name:"Coin",price:87000,quantity:1})}>AddToCart</button>
            
            
            
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={coin4
            } className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Coin</h5>
            <p className="card-text">rs.48000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:3,name:"Coin",price:48000,quantity:1})}>AddToCart</button>
          
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={coin5} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Coin </h5>
            <p className="card-text">Rs.34000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:4,name:"Coin",price:340000,quantity:1})}>AddToCart</button>
            </div>
        </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin6} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.50000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:5,name:"Coin",price:50000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin7}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.85000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:6,name:"Coin",price:85000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin8} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.25000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:7,name:"Coin",price:25000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin9} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.25200</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:8,name:"Coin",price:25200,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.12450</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:9,name:"Coin",price:12450,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin11} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.80000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:10,name:"Coin",price:80000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin12} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.15000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:11,name:"Coin",price:15000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin13} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.11500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:12,name:"Coin",price:11500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin14} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.11750</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:13,name:"Coin",price:11750,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin15} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.12500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:14,name:"Coin",price:12500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin16} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.60000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Coin",price:60000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.62750</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Coin",price:62750,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin12} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.62350</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Coin",price:62350,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={coin15} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Coin</h5>
                <p className="card-text">Rs.11230</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:16,name:"Coin",price:11230,quantity:1})}>AddToCart</button>
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

export default Coinsbar
