import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Popup from './Components/Popup';
import { useState, useEffect } from 'react'


function MyComponent() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      setTimedPopup(true);
    }, 2000);
     
  }, []);

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment> <div>

        <div className='hero'>

          <h1>Find out more </h1>
          <p className='p1'>About our local business :</p>
         <b> <a href='https://lutfimuaremi.info/' className='b1' target="_blank" rel="noreferrer" >Click here !</a></b>
        </div>
        <div className="my-div">
      

     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup</h3>
     </Popup>

     <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>Sign up for daily Coupons ! </h3>
        
     </Popup>

    </div>
    <div className='baba-links'>
          <div className='outer-links'>
            <div className='linkat'>
              <ul id='linkat-horizontal'>
              <h1> Look at the delicious food in our new shop ! </h1>
             
                <li><a className='a1' href='#'>Show all</a></li>
                <li><a className='a2' href='#'>Branding</a></li>
                <li><a className='a3' href='#'>Creative</a></li>
                <li><a className='a4' href='#'>Design</a></li>
              </ul>
          </div>
        </div>
      </div>
        <div className='nav'>
          <img width="29.3%" height="349px" src='1.jpg'></img>
          <img width="29.3%" height="349px" src='2.jpg'></img>
          <img width="29.3%" height="349px" src='3.jpg'></img>
          <img width="29.3%" height="349px" src='4.jpg'></img>
          <img width="29.3%" height="349px" src='5.jpg'></img>
          <img width="29.3%" height="349px" src='6.jpg'></img>
          <img width="29.3%" height="349px" src='7.jpg'></img>
          <img width="29.3%" height="349px" src='8.jpg'></img>
          <img width="29.3%" height="349px" src='9.jpg'></img>
          <img width="29.3%" height="349px" src='10.jpg'></img>
          <img width="29.3%" height="349px" src='11.jpg'></img>
          <img width="29.3%" height="349px" src='12.jpg'></img>
        </div>
       
        <Footer />

      </div></>
  


  







  )
}
export default MyComponent ;

