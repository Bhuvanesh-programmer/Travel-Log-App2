import 'semantic-ui-css/semantic.min.css';
import "./Contact.css";
import Navbar from './Navbar'
function Contactus(){
    return(
        <>
        <Navbar/>
        <div className='contact'>
        <h1>Contact Us</h1>
        <div class="ui large form">
    <div class="equal width fields">
    <div class="field">
      <label>First name</label>
      <input type="text" placeholder="First Name" required></input>
    </div>
   
    <div class="field">
      <label>Last name</label>
      <input type="text" placeholder="Last Name" required></input>
    </div>
    </div>
    <div class="field">
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com" required></input>
  </div>
  <div class="field">
    <label>Phone Number</label>
    <div class="field">
      <input type="text" placeholder="(xxx)" required></input>
    </div>
    </div>
    <div class="field">
    <label>Message</label>
    <textarea rows="2"></textarea>
  </div>
    <div class="ui primary submit button">Submit</div>
    </div>
        </div>
        <div className='about'>
            <h2>Visit our Team</h2>
            <h3>Phone</h3>
            <i class="phone icon">&#160;8889995555 </i><br></br>
            <i class="phone icon">&#160;9998883333 </i><br></br>
            <h3>Address</h3>
            <i class="map marker alternate icon">&#160;111&#160;SST&#160;Complex,<br></br>Anna&#160;Street,Coimbatore.<br></br>641011.</i>
             </div>
        </>
    )
}
export default Contactus;