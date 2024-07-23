// import React from 'react'
// import"./Footer.css"
// import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//         <div className="footer-content">
//             <div className="footer-content-left">
//                 <img src={assets.logo} alt="" />
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quod tempore repellendus eius minima ad, maiores molestias fugit, dolores esse velit reiciendis voluptas consectetur delectus deleniti modi voluptate non debitis?</p>
//                 <div className="footer-social-items">
//                     <img src={assets.facebook_icon} alt="" />
//                     <img src={assets.twitter_icon} alt="" />
//                     <img src={assets.twitter_icon} alt="" />
//                 </div>
//                 <div className="footer-content-center">
//                     <h2>COMPANY</h2>
//                     <ul>
//                         <li>Home</li>
//                         <li>About Us</li>
//                         <li>Delivary</li>
//                         <li>Privacy</li>
//                     </ul>
//                     <div className="footer-content-right">
//                         <h2>Get in Touch</h2>
//                         <ul>
//                             <li>7034279363</li>
//                             <li>contact@tomato.com</li>
//                         </ul>


//                     </div>
//                 </div>
//             </div>
//         </div>

//         <hr/>
//         <p className='footer-copyright'> Copyright 2024@ Tomato.com -All Right Reserved</p>
      
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company Logo" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quod tempore repellendus eius minima ad, maiores molestias fugit, dolores esse velit reiciendis voluptas consectetur delectus deleniti modi voluptate non debitis?</p>
          <div className="footer-social-items">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>703-427-9363</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'> Copyright 2024 @ Tomato.com - All Rights Reserved</p>
    </div>
  );
}

export default Footer;

