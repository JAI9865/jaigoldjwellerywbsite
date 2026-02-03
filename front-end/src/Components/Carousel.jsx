import React from 'react'
import { useState } from 'react';
import './Carousel.css'


const Carousel = ({images}) => {
    const[index,setIndex]=useState(0);

    

    const nextSlide=()=>setIndex((prev)=>(prev+1)%images.length)
    const prevSlide=()=>setIndex((prev)=>(prev-1 + images.length)% images.length)
  return (
    <div className='caro'>
        <div className='carousel-inner'>
            {images.map((img,i)=>(
                <div className={`carousel-item ${i===index ? "active":""}`} key={i}> 
                <img src={img} alt={`Slide ${i+1}`} />
                 </div>        
      ))
      }
      <button className='carousel-control-prev' type='button' onClick={prevSlide} aria-label='previous'>
        <span className='carousel-control-prev-icon'></span>
      </button>
      <button className='carousel-control-next' type='button' onClick={nextSlide} aria-label='next'>
        <span className='carousel-control-next-icon'></span>
      </button>

        </div>
      
    </div>
  )
}

export default Carousel
