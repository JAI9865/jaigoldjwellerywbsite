import React, { useState } from 'react'
import Navbar from '../Navbar';
import './Earings.css'
import earings1 from '../../assets/earings1.webp'
import earings2 from '../../assets/earings2.webp'
import earings3 from '../../assets/earings3.webp'
import earings4 from '../../assets/earings4.webp'
import earings5 from '../../assets/earings5.webp'
import earings6 from '../../assets/earings6.webp'
import earings7 from '../../assets/earings7.webp'
import earings8 from '../../assets/earings8.webp'
import earings9 from '../../assets/earings9.webp'
import earings10 from '../../assets/earings10.webp'
import earings11 from '../../assets/earings11.webp'
import earings12 from '../../assets/earings12.webp'
import earings13 from '../../assets/earings13.webp'
import earings14 from '../../assets/earings14.webp'
import earings15 from '../../assets/earings15.webp'
import earings16 from '../../assets/earings16.webp'
import earings17 from '../../assets/earings17.webp'
import earings18 from '../../assets/earings18.webp'
import stud from '../../assets/studs.jpg'





const Earings = () => {
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
        <img src={stud}/>
    <div className="container">
    <h1 className="text-center mt-4 bg-white"  >Showing (120) products</h1>
    <div className="row row-cols-2 row-cols-md-3 g-4 m-2">
      
        <div className="col">
        <div className="card">
            <img src={earings1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Casting Stud</h5>
            <p className="card-text">Rs.35000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:1,name:"Casting Stud",price:35000,quantity:1})}>AddToCart</button>
        
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={earings2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Design stud</h5>
            <p className="card-text">Rs.45000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:2,name:"Design stud",price:45000,quantity:1})}>AddToCart</button>
            
            
            
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={earings3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Durky Stud</h5>
            <p className="card-text">rs.55000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:3,name:"Durky Stud",price:55000,quantity:1})}>AddToCart</button>
          
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={earings4} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Kerala Stud </h5>
            <p className="card-text">RS.35000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:4,name:"Kerala Stud ",price:35000,quantity:1})}>AddToCart</button>
            </div>
        </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings5} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stud</h5>
                <p className="card-text">Rs.22000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:5,name:"Stud",price:22000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings6}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Dmd Stud</h5>
                <p className="card-text">Rs.35000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:6,name:"Dmd Stud",price:35000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings7} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Casting Stud</h5>
                <p className="card-text">Rs.56000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:7,name:"Casting Stud",price:56000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings8} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Ruby Stud</h5>
                <p className="card-text">Rs.55650</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:8,name:"Ruby Stud",price:55650,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings9} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stud $ Drops</h5>
                <p className="card-text">Rs.20000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:9,name:"Stud $ Drops",price:20000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings10} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Dmd Stud</h5>
                <p className="card-text">Rs.11500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:10,name:"Dmd Stud",price:11500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings11} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Antique Stud</h5>
                <p className="card-text">Rs.85000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:11,name:"Antique Stud",price:85000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings12} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">stud </h5>
                <p className="card-text">Rs.14500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:12,name:"stud",price:14500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings13} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Antique Stud</h5>
                <p className="card-text">Rs.58750</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:13,name:"Antique Stud",price:58750,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings14} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Silver Stud</h5>
                <p className="card-text">Rs.7500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:14,name:"Silver Stud",price:7500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings15} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Gold Stud</h5>
                <p className="card-text">Rs.45000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Gold Stud",price:45000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings17} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Flower Design</h5>
                <p className="card-text">Rs.24500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Flower Design",price:24500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings18} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Casting Design</h5>
                <p className="card-text">Rs.17500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"Casting Design",price:17500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings16} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bambey Stud </h5>
                <p className="card-text">Rs.35000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:16,name:"Bambey Stud",price:35000,quantity:1})}>AddToCart</button>
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
     </div>
  )
}

export default Earings