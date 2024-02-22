import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import "./Reviews.css";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
function Reviews()
{
  const nav =useNavigate()
    return(
      <>
      <Navbar/>
        <div className='reviews'>
        <div>
        <h1>Reviews</h1>
        </div>
        <div class="ui inverted red segment">
         bhuvi<br></br>
         covai<br></br>
         nice
        </div>
        <div class="ui secondary inverted red segment">
        bhuvi<br></br>
         covai<br></br>
         nice
        </div>
        <div class="ui tertiary inverted red segment">
        bhuvi<br></br>
         covai<br></br>
         nice
        </div>
        <center>
          <button class="ui primary button" onClick={()=>nav('/feedback')}>Your Feedback</button>
        </center>
      </div>
      </>
    )
}
export default Reviews;