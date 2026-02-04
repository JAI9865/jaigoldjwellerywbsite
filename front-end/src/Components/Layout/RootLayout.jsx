import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Carousel from '../Carousel'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import Card from '../pages/cart'
import kanima2 from '../../assets/kanima2.webp'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.avif'
import home4 from '../../assets/home4.jpg'
import home5 from '../../assets/home5.jpeg'



const Rootlayout = () => {
  return (
    <div>
    <div>
      <Navbar/>
      <Outlet/>
      <Carousel
      images={[
        banner1,banner2,banner3,banner4
      ]}/>
  
      <h2 style={{textAlign:'center'}}>Choose what fits your style from our exquisite collections </h2>
      <h5 style={{textAlign:'center'}}>Blending tradition with modernity. We set the standard for the ultimate in Diamond Jewellery.</h5>
      <div style={{backgroundColor:'bisque'}}>
      <Card
        title="Trational Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={kanima2}
        
        
      />
      <Card
        title="Antique Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={home1}
        
      />
      <Card
        title="New Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={home2}
        
      />
      <Card
        title="Bambey Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={home3}
        
      />
      <Card
        title="Wedding Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={home4}
        
      />
      <Card
        title="Engagement Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={home5}
        
      />
      </div>
 
      
      
    </div>
    
    </div>
  )
}

export default Rootlayout
