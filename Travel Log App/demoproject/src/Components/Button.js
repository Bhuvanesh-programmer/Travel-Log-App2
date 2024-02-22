import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import  "./Button.css"
import { useNavigate } from 'react-router-dom';
function Button(){
    const nav =useNavigate()
  return (
    <>
    <div className='details'>
    <h1>Munnar Details</h1>
    <div className='details-content'>
        <h2>Rs:2000/person</h2>
        <h2>No.of Days:2days/1night</h2>
        <ul>
            <h2>First Day</h2>
            <li> TATA Tea Museum</li>
            <li>Cycling at Blossom Park</li>
            <li>Kolukkumalai Tea Estate</li>
            <li>Attukal Waterfalls</li>
            <li>Camp Fire</li>
            <h2>Second Day</h2>
            <li>Take a stroll at Pothamedu view point</li>
            <li>Eravikkulam National Park</li>
            <li>Lakkom Waterfalls</li>
            <li>Top Station</li>
            <li> Return to native</li>
        </ul>
    </div>
    <div>
   <center>
         <button class="ui primary left attached button" onClick={()=>nav('/booking')}>For Booking</button>
         <button class="right attached ui secondary button" onClick={()=>nav('/packages')}>Back</button>
   </center>
    </div>
    </div>
    </>
  );
};

export default Button;