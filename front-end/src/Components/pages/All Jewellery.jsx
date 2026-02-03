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
import offer from '../../assets/offer1.png'
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
import ring1 from '../../assets/ring1.webp'
import ring2 from '../../assets/ring2.webp'
import ring3 from '../../assets/ring3.webp'
import ring4 from '../../assets/ring4.webp'
import ring5 from '../../assets/ring5.webp'
import ring6 from '../../assets/ring6.webp'
import ring7 from '../../assets/ring7.webp'
import ring8 from '../../assets/ring8.webp'
import ring9 from '../../assets/ring9.webp'
import ring10 from '../../assets/ring10.webp'
import ring11 from '../../assets/ring11.webp'
import ring12 from '../../assets/ring12.webp'
import ring13 from '../../assets/ring13.webp'
import ring14 from '../../assets/ring14.webp'
import ring15 from '../../assets/ring15.webp'
import ring16 from '../../assets/ring16.webp'
import ring17 from '../../assets/ring17.webp'
import ring18 from '../../assets/ring18.webp'
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






const AllJewellery = () => {
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
        <img src={offer}/>
    <div className="container">
    <h1 className="text-center mt-4 bg-white"  >Showing (1120) products</h1>
    <div className="row row-cols-2 row-cols-md-3 g-4 m-2">
      
        <div className="col">
        <div className="card">
            <img src={earings1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Casting Stud</h5>
            <p className="card-text">Rs.35000</p>
            
        <button className='btn bg-success text-white' onClick={()=>addItem({id:1,name:"Casting Stud",price:30000,quantity:1})}>AddToCart</button>
        
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
            <button className='btn bg-success text-white' onClick={()=>addItem({id:3,name:"Durky Stud",price:50000,quantity:1})}>AddToCart</button>
          
            </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
            <img src={earings4} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Kerala Stud </h5>
            <p className="card-text">35000</p>
            <button className='btn bg-success text-white' onClick={()=>addItem({id:4,name:"Kerala Stud ",price:35000,quantity:1})}>AddToCart</button>
            </div>
        </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings5} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Stud </h5>
                <p className="card-text">Rs.22000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:5,name:"stud",price:22000,quantity:1})}>AddToCart</button>
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
                <h5 className="card-title">Stud $ Drops</h5>
                <p className="card-text">Rs.20000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:8,name:"Stud $ Drops",price:20000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings9} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Casting Stud</h5>
                <p className="card-text">Rs.16000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:9,name:"Casting Stud",price:15900,quantity:1})}>AddToCart</button>
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
                <h5 className="card-title">Dmd Stud</h5>
                <p className="card-text">Rs.36750</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:13,name:"Dmd Stud",price:34750,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings14} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Antique Stud</h5>
                <p className="card-text">Rs.58750</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:14,name:"Antique Stud",price:58750,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings15} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Silver Stud</h5>
                <p className="card-text">Rs.7500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:15,name:"silver Stud",price:7500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings17} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Gold Stud</h5>
                <p className="card-text">Rs.45000</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:16,name:"Gold Stud",price:450000,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings18} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Flower Design</h5>
                <p className="card-text">Rs.24500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:17,name:"Flower Design",price:24500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
            <img src={earings16} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Casting Design</h5>
                <p className="card-text">Rs.17500</p>
                <button className='btn bg-success text-white' onClick={()=>addItem({id:18,name:"Casting Design",price:17500,quantity:1})}>AddToCart</button>
            </div>
            </div>
        </div> 
         <div className="col">
                <div className="card">
                    <img src={bangle1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Kalkata Bangle</h5>
                    <p className="card-text">Rs.150000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:19,name:"Kalkata",price:150000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Design Bangle</h5>
                    <p className="card-text">Rs.85000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:20,name:"Design Bangle",price:85000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Durky Bangle</h5>
                    <p className="card-text">Rs.145000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:21,name:"Durky Bangle",price:145000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Casting Bangle</h5>
                    <p className="card-text">Rs.185000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:22,name:"Casting Bangle",price:185000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle5} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Kerala Design</h5>
                    <p className="card-text">Rs.125000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:23,name:"Kerala Design",price:125000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle6} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Stone Bangle</h5>
                    <p className="card-text">Rs.250000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:24,name:"Stone Bangle",price:250000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle7} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Stone Bangle</h5>
                    <p className="card-text">Rs.300000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:25,name:"Stone Bangle",price:300000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle8} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Stone Bangle</h5>
                    <p className="card-text">Rs.342000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:26,name:"Stone Bangle",price:342000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle9} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Stone Bangle</h5>
                    <p className="card-text">Rs.251000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:27,name:"Stone Bangle",price:251000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle10} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Antique </h5>
                    <p className="card-text">Rs.345000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:28,name:"Antique",price:345000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle11} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Kalkata</h5>
                    <p className="card-text">Rs.5Lacs</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:29,name:"Kalkata",price:500000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle12} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Bambey Design</h5>
                    <p className="card-text">Rs.85000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:30,name:"Bambey Design",price:85000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle13} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Ruby Bangle</h5>
                    <p className="card-text">Rs.450000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:31,name:"Ruby Bangle",price:450000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle14} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Dmd Bangle</h5>
                    <p className="card-text">Rs.350000</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:32,name:"Dmd Bangle",price:350000,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle15} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Emaraled bangle</h5>
                    <p className="card-text">Rs.654200</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:33,name:"Emarald Bangle",price:654200,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle16} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Ruby BAngle</h5>
                    <p className="card-text">Rs.545250</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:34,name:"Ruby Bangle",price:545250,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle17} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Normal Stone Bangle</h5>
                    <p className="card-text">Rs.245850</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:35,name:"Normal Stone Bangle",price:245850,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
         <div className="col">
                <div className="card">
                    <img src={bangle18} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">18ct Bangle</h5>
                    <p className="card-text">Rs.158500</p>
                    
                <button className='btn bg-success text-white' onClick={()=>addItem({id:36,name:"18ct Bangle",price:158500,quantity:1})}>AddToCart</button>
                
                    </div>
                </div>
                </div>
                <div className="col">
                        <div className="card">
                            <img src={chain1} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Hollow</h5>
                            <p className="card-text">Rs.245000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:37,name:"Hollow",price:245000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Machine Chain</h5>
                            <p className="card-text">Rs.85000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:38,name:"Machine Chain",price:85000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Handmade Design</h5>
                            <p className="card-text">Rs.285000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:39,name:"Handmade Design",price:285000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain4} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Savitham</h5>
                            <p className="card-text">Rs.125000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:40,name:"Savitham",price:125000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain5} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Sundari Model</h5>
                            <p className="card-text">Rs.75000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:41,name:"Sundari Model",price:75000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain6} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Gents Chain</h5>
                            <p className="card-text">Rs.250000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:42,name:"Gents Chain",price:250000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain7} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Machine chian</h5>
                            <p className="card-text">Rs.275000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:1,name:"Machine chian",price:275000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain8} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Kerala Chain</h5>
                            <p className="card-text">Rs.175850</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:43,name:"Kerala Chain",price:175850,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain9} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">18ct Chain</h5>
                            <p className="card-text">Rs.75000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:44,name:"18ct Chain",price:75000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain10} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Thali Chain</h5>
                            <p className="card-text">Rs.545000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:45,name:"Thali Chain",price:545000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain11} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Icecream Chain</h5>
                            <p className="card-text">Rs.100000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:46,name:"Icecream Chain",price:100000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain12} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Hollow Chain</h5>
                            <p className="card-text">Rs.145200</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:47,name:"Hollow Chain",price:145200,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain13} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">18ct chain</h5>
                            <p className="card-text">Rs.75000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:48,name:"18ct chain",price:75000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain14} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Machine Chain</h5>
                            <p className="card-text">Rs.75000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:49,name:"Machine Chain",price:75000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain15} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">V Chain</h5>
                            <p className="card-text">Rs.85000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:50,name:"V Chain",price:85000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain16} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Katta Chain</h5>
                            <p className="card-text">Rs.145000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:51,name:"Katta Chain",price:145000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain17} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Sundari Chain</h5>
                            <p className="card-text">Rs.95000</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:52,name:"Sundari Chain",price:95000,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
                <div className="col">
                        <div className="card">
                            <img src={chain18} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">StoneChain</h5>
                            <p className="card-text">Rs.84560</p>
                            
                        <button className='btn bg-success text-white' onClick={()=>addItem({id:53,name:"StoneChain",price:84560,quantity:1})}>AddToCart</button>
                        
                            </div>
                        </div>
                        </div>
               <div className="col">
                       <div className="card">
                           <img src={ring1} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.25000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:54,name:"Ring",price:25000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring2} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.22000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:55,name:"Ring",price:22000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring3} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.25500</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:56,name:"Ring",price:25500,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring4} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.55000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:57,name:"Ring",price:55000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring5} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.45000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:58,name:"Ring",price:45000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring6} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.26520</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:59,name:"Ring",price:26520,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring7} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.51000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:60,name:"Ring",price:51000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring8} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.54500</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:61,name:"Ring",price:54500,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring9} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.25000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:62,name:"Ring",price:25000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring10} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.43000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:63,name:"Ring",price:43000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring11} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.25040</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:64,name:"Ring",price:25040,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring12} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.35670</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:65,name:"Ring",price:35670,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring13} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.27600</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:66,name:"Ring",price:27600,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring14} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.32750</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:67,name:"Ring",price:32750,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring15} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.21750</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:68,name:"Ring",price:21750,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring16} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.15000</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:69,name:"Ring",price:15000,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring17} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.27500</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:70,name:"Ring",price:27500,quantity:1})}>AddToCart</button>
                       
                           </div>
                       </div>
                       </div>
               <div className="col">
                       <div className="card">
                           <img src={ring18} className="card-img-top" alt="..."/>
                           <div className="card-body">
                           <h5 className="card-title">Diamond Ring</h5>
                           <p className="card-text">Rs.15850</p>
                           
                       <button className='btn bg-success text-white' onClick={()=>addItem({id:71,name:"Ring",price:15850,quantity:1})}>AddToCart</button>
                       
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

export default AllJewellery
