import "./Packages.css";
import Navbar from './Navbar'
import Image1 from "./Images/munnar.png";
import Image2 from "./Images/kodai.png";
import Image3 from "./Images/Alappuzha.png";
import Image4 from "./Images/vagamon.png";
import Image5 from "./Images/Wayanad.png";
import Image6 from "./Images/mysore.png";
import { useNavigate } from "react-router-dom";
function Packages(){
    const nav = useNavigate();
    return(
    <>
        <Navbar/>
        <div className="Packages-Main">
        <div className="pac-content">
            <h1>Packages</h1>
            <center>
            <h3>Regular Packages</h3>
            </center>
        </div>
        <div className="first-row">
                <div className="first-div"  onClick={()=>nav('/button')}>
                    <div className="content">
                        <div className="textcontent">
                        </div>
                    </div>
                    <div className="image">
                        <img src={Image1} className="imgpac"></img>
                    </div>
                    
                </div>

                <div className="first-div"  onClick={()=>nav('/button')}>
                    <div className="image">
                        <img src={Image2}className="imgpac"></img>
                    </div>
                </div>

                <div className="first-div"  onClick={()=>nav('/button')}>
                    <div className="image">
                        <img src={Image3}className="imgpac"></img>
                    </div>
                </div>
          </div><br></br>
       <center> <h3>Seasonal Packages</h3></center>
        <div className="first-row">
                <div className="first-div"  onClick={()=>nav('/button')}>
                    <div className="image">
                        <img src={Image4}className="imgpac"></img>
                    </div>
                </div>

                <div className="first-div"  onClick={()=>nav('/button')}>
                    <div className="image">
                        <img src={Image5}className="imgpac"></img>
                    </div>
                </div>

                <div className="first-div"  onClick={()=>nav('/button')}>
                    <div className="image">
                        <img src={Image6}className="imgpac"></img>
                    </div>
                </div>
                </div>
        </div>
        </>
    )
}
export default Packages;