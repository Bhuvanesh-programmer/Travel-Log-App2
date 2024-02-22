import { Link } from "react-router-dom";
import './Navbar.css'
import  Logo from"./Logo.png";

function Navbar()
{
    return(
        <>
        <nav>
           <div className="navbar">
            <img className="logo-image"  src={Logo}></img>         
            <Link className="ab" to='/'>Home</Link>
            <Link to='/packages'>Packages</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/contactus'>Contact Us</Link>
            <Link to='/login'>Login</Link>
            {/* <Link to='/admin'>Admin</Link> */}
            </div>
        </nav>
        </>
    )
}
export default Navbar;