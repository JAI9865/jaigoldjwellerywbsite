import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='main'>
      <div className="footer">
              {/* <div className="socialicon"> */}
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>

        <div className="footer2" style={{paddingleft: "20px", paddingright: "200px",textAlign:"center"}}>
          <footer>
            <address>
              <h2 id="contact">Contact us</h2>
              <a href=" mail to:jaijewellery2001@gmail.com"
                >jaijewellery2001@gmail.com</a
              ><br /><br />
              +91 7010496602
              <h2 id="web">Website</h2>
              <a href="#">www.jaijewellery.com</a>
            </address>
            <br />
            <center>
              &copy; since2001Jaijewelleryprivatelimited . All Rights Reserved
            </center>
          </footer>
        </div>
      </div>
    
    // </div>
  )
}

export default Footer
