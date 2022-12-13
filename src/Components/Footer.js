import "./Styles/Footer.css";
import React from "react";
import { useState } from 'react'
import Popup from "./Popup";

function Footer() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="foot-wrapper">

      <div className="Footer">
        <div className="footer-left">
            <h3 className="ha3"> Our & Your Rights: </h3>
            <h4 className="ha4">Copyright 2021 © </h4>
            <i><p className="pa2"> 2022 Smashburger IP Holder LLC. All rights reserved.</p></i>
        </div>
    
   <div className="footer-middle">
            <h5><a href="#top">Franchising</a></h5>
            <h5><a href="#top">Deals</a></h5>
            <h5><a href="#top">Carrers</a></h5>
            <h5><a href="#top">News</a></h5>
    </div>

    <div className="footer-right">
            <h5><a href="#top">Privacy Policy</a></h5>
            <h5><a href="#top">Accessibility</a></h5>
            <h5><a href="#top">Terms & Conditions</a></h5>
            <h5><a href="#top">Contact Us</a></h5>
    </div>
    <div className="btn-p">
        <button onClick={() => setButtonPopup(true)}>Daily Free Coupons</button>
    </div>
      <form>
          <input type="text" placeholder="Email address" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form> 
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Congratulations, your Coupon code is:</h3>
        <h2 className="cpn">#42860175</h2> 
        <br/>
        <p className="p-cpn">go reedem it in your local Johnny's burger</p>
     </Popup>

    </div>


  )};

  export default Footer;