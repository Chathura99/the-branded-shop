import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>The Branded-Shop</h1>
            <p>For over 5 years, The Branded SHop clothes and garment have been synonymous with luxury, quality and premium selection. As the premier designer, manufacturer, and supplier of luxurious clothes, apparels such as vintage printed or embroidered t-shirts, jacket, for the entire wholesale and retail, industries, our capabilities are endless when it comes to creating the perfect quality merchandise.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>12, Kegalle Road, Polgahawela </li>
              <li>Email: thebrandedshop@gmail.com</li>
              <li>Phone: +94372255889</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
