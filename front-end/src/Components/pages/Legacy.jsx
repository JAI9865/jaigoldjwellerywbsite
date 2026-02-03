import React from "react";

import about from "../../assets/about.jpg";
import "./Legacy.css";
import kanima from "../../assets/kanima1.jpg";
import Footer from "./Footer";
import Navbar from "../Navbar";

const Legacy = () => {
  return (
    <div>
      <Navbar/>
      <div className="legacy">
        
        <h2>About JAI Jewellery</h2>
        <img src={about} />
      </div>
      <div className="about  ">
        <h3 style={{fontSize:'30px',margin:'10px'}}>
          Welcome to the Online Home of Purity - over nine decades, driven by
          the pursuit of craft, a fixation with detail and a devotion to beauty
        </h3>
        <h2 style={{fontSize:'30px',margin:'10px'}}>The Our Jewellery Philosophy Of Brilliance </h2>
        <p style={{fontSize:'20px',textAlign:'center'}}>
          The 25 years of JAI history establish a long and exciting journey in
          the pursuit of excellence, a path manifested by jewellery that is
          recognised all over the world as masterpieces of style and
          artisanship. From the assortment of handpicked resources to their
          intricate fabrication to the smallest feature of every single product,
          the Bhima philosophy is found in the mission for continuous and
          adamant excellence. It is a tradition that is born of the commitment
          to creating jewellery of enduring value thanks to the incomparable
          quality of the materials and workmanship, as well as an unambiguous
          taste for exquisiteness.
        </p>

        <h3 style={{fontSize:'30px',margin:'10px'}}>Our Values</h3>
        <p style={{fontSize:'20px',textAlign:'center'}}>
          The JAI Brand core values secure success and fulfilment for its
          customers, employees, and the company. We are dedicated. We are
          timeless. We are creative. We are trustworthy. We are proudly Indian.
          We recycle. We are conflict-free. We believe in teamwork. We love
          experimenting. We celebrate life. We value our customers. We love
          colour. We are a family. We are passionate. We love to laugh. We touch
          lives. We live by principles. We believe in the power of our brand. We
          care for the environment.
        </p>
        <div className="kani d-flex mt-5 justify-content-Center ">
          <img src={kanima} style={{ width: "350px" }} />
          
          <p style={{marginTop:'150px',fontSize:'20px'}}>
            <h3>Responsible Sourcing</h3>
            Gold and Diamonds are most extensively used in our creations. It is
            due to this that we dedicate precise consideration to confirming
            that one of the major marks of our Journey to Sustainable Luxury
            would be the obtaining of responsibly mined gold and diamonds for
            our entire jewellery production. We are verified to meet
            international best practices in environmental and social standards
            in our workshops, so you can buy Bhima Gold and Diamonds with
            confidence, certificates of authenticity, and a buy-back guarantee.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Legacy;
