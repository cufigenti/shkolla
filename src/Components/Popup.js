import React from 'react'
import "./Styles/Popup.css";

function Popup(props) {

return (props.trigger) ? (
    <div className="popup">
         <div className="popup-inner">

    <button className="close-btn" onClick={() => props.setTrigger(false)}>☒</button>
    { props.children }
        </div>
I
    </div>
  )  : "";
}

export default Popup