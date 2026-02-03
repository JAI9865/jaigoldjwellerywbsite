import React from "react";
import Navbar from "../Navbar";
import Card from "./cart";
import kanima2 from "../../assets/kanima2.webp";
import kanima3 from "../../assets/kanima3.webp";
import kanima4 from "../../assets/kanima4.jpg";
import kanima5 from "../../assets/kanima5.jpg";
import kanima6 from "../../assets/kanima6.jpg";
import Carousel from '../Carousel'
import banner1 from '../../assets/banner9/10597066.jpg'
import banner2 from '../../assets/banner6/9464166.jpg'
import banner3 from '../../assets/banner7/2305.i305.012.S.m005.c13.realistic ring wedding poster.jpg'
// import banner4 from '../../assets/banner8/8944373.jpg'

const Collections = () => {
  return (
    <div>
      <Navbar />
      <Carousel
      images={[
        banner1,banner2,banner3
      ]} interval={1000}/>
      <Card
        title="Trational Design"
        body="Jewelry theory explores the meaning, purpose, and impact of jewelry, encompassing its symbolic significance, psychological effects, and cultural context. It delves into the principles of design, materials, and techniques used in jewelry making, as well as the broader role of jewelry in personal expression, social status, and cultural identity. "
        imageUrl={kanima2}
      />
      <Card
        title="New Design"
        body="Emotional and Mnemonic Value:
Jewelry can hold deeply personal meaning, representing relationships, memories, and emotions, according to a thesis by Roberta Bernabei. A broken piece of jewelry can trigger strong feelings associated with the person or event it represents. "
        imageUrl={kanima3}
      />
      <Card
        title="Antique Design"
        body="Materials and Textures:
Knowledge of different metals, gemstones, and their properties is essential for creating unique and durable pieces. 
Gemology:
Understanding the characteristics and properties of gemstones is crucial for their selection and use in jewelry. "
        imageUrl={kanima4}
      />
      <Card
        title="Collection"
        body="Global Traditions:
Jewelry making has a rich history and cultural significance in various societies, with different styles and materials reflecting local traditions and beliefs."
        imageUrl={kanima5}
      />
      <Card
        title="Kerala Design"
        body="Jewelry design has evolved over time, influenced by various factors such as technological advancements, artistic movements, and cultural trends. "
        imageUrl={kanima6}
      />
    </div>
  );
};

export default Collections;
