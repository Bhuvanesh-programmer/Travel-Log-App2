import 'semantic-ui-css/semantic.min.css';
import React from 'react'
import "./Booking.css"
import { useNavigate } from "react-router-dom";
function Booking()
{
  const nav = useNavigate();
  return (
    <>
    <div className='booking'>
    <h1>Book now</h1>
    <div class="ui large form">
    <div class="equal width fields">

    <div class="field">
      <label>Name</label>
      <input type="text" placeholder="Name" required></input>
    </div>
   
    <div class="field">
    <label>Phone Number</label> 

      <div class="field">
      <input type="text" placeholder="(xxx)" required></input>
      </div>
      </div>
    </div>

      <div class="equal width fields">
      <div class="field">
      <label>Address</label>
      <textarea rows="2"></textarea>
      </div>

      <div class="field">
      <label>Date</label>
      <input type="date" placeholder="Date/Time"></input>
      </div>
      </div>

        <div class="equal width fields">
        <div class="field">
        <label>No.of Members</label>
        <input type="number" placeholder="count" required></input>
        </div>

        <div class="field">
        <label>Mode of Transport</label>
        <div class="inline fields">
        <div class="field">
        <div class="ui radio checkbox">
        <input type="radio" name="frequency"></input>
        <label>Car</label>
        </div>
        </div>
        <div class="field">
        <div class="ui radio checkbox">
        <input type="radio" name="frequency" ></input>
        <label>Bus</label>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div class="equal width fields">
        <div class="field">
        <label>Payment</label>
        <input type="text" placeholder="pay" required></input>
        </div>
        <div class="field"></div>
        </div>

        <center>
          <button class="ui primary button" type="submit"onClick={()=>nav('/packages')}>Comfirm Booking</button>
          <button class="right attached ui secondary button" onClick={()=>nav('/button')}>Back</button>
        </center>
        
        </div>
      </div>
   </>
  )
}

export default Booking;       