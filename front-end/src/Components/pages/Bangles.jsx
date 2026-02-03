import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Earings.css'
import bangle1 from '../../assets/bangle1.webp'
import bangle2 from '../../assets/bangle2.webp'
import bangle3 from '../../assets/bangle3.webp'
import bangle4 from '../../assets/bangle4.webp'
import bangle5 from '../../assets/bangle5.webp'
import bangle6 from '../../assets/bangle6.webp'
import bangle7 from '../../assets/bangle7.webp'
import bangle8 from '../../assets/bangle8.webp'
import bangle9 from '../../assets/bangle9.webp'
import bangle10 from '../../assets/bangle10.webp'
import bangle11 from '../../assets/bangle11.webp'
import bangle12 from '../../assets/bangle12.webp'
import bangle13 from '../../assets/bangle13.webp'
import bangle14 from '../../assets/bangle14.webp'
import bangle15 from '../../assets/bangle15.webp'
import bangle16 from '../../assets/bangle16.webp'
import bangle17 from '../../assets/bangle17.webp'
import bangle18 from '../../assets/bangle18.webp'
import bangle from '../../assets/bangless.jpg'






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
        <img src={bangle}/>
    <div className="container">
    <h1 className="text-center mt-4 bg-white"  >Showing (120) products</h1>
    <div className="row row-cols-2 row-cols-md-3 g-4 m-2">
      
        <div className="col">
        <div className="card">
            <img src={bangle1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Kalkata Bangle</h5>
            <p className="card-text">Rs.150000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:1,name:"Kalkata Bangle",price:150000,quantity:1})}>AddToCart</button>
        
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={bangle2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Design Bangle</h5>
            <p className="card-text">Rs.85000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:2,name:"Design Bangle",price:85000,quantity:1})}>AddToCart</button>
            
            
            
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={bangle3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Durky Bangle</h5>
            <p className="card-text">rs.145000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:3,name:"Durky Bangle",price:145000,quantity:1})}>AddToCart</button>
          
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={bangle4} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Casting Bangle </h5>
            <p className="card-text">Rs.185000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:4,name:"Casting Bangle",price:185000,quantity:1})}>AddToCart</button>
            </div>
        </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle5} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Kerala Design</h5>
                <p className="card-text">Rs.125000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:5,name:"Kerala Design",price:125000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle6}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stone Bangle</h5>
                <p className="card-text">Rs.250000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:6,name:"Stone Bangle",price:250000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle7} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stone Bangle</h5>
                <p className="card-text">Rs.300000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:7,name:"Stone Bangle",price:300000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle8} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stone Bangle</h5>
                <p className="card-text">Rs.342000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:8,name:"Stone Bangle",price:342000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle9} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stone Bangle</h5>
                <p className="card-text">Rs.251000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:9,name:"Stone Bangle",price:251000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle10} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Antique</h5>
                <p className="card-text">rs.345000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:10,name:"Antique",price:345000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle11} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Kalkata</h5>
                <p className="card-text">Rs.5Lacs</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:11,name:"Kalkata",price:500000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle12} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bambey Design </h5>
                <p className="card-text">Rs.85000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:12,name:"Bambey Design",price:85000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle13} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Ruby Bangle</h5>
                <p className="card-text">Rs.450000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:13,name:"Ruby Bangle",price:450000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle14} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Dmd Bangle</h5>
                <p className="card-text">Rs.350000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:14,name:"Dmd Bangle",price:350000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle15} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Emaraled bangle</h5>
                <p className="card-text">Rs.654200</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Emaraled bangle",price:654200,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle16} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Ruby BAngle</h5>
                <p className="card-text">Rs.545250</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Ruby BAngle",price:545250,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle17} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Normal Stone Bangle</h5>
                <p className="card-text">Rs.158500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Normal Stone Bangle",price:158500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={bangle18} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">18ct Bangle</h5>
                <p className="card-text">rs.245850</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:16,name:"18ct Bangle",price:245850,quantity:1})}>AddToCart</button>
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