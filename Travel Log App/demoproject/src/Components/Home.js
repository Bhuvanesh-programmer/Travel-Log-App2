import "./Home.css";
import Navbar from './Navbar'
import { Carousel } from "react-bootstrap";
import Home1 from "./Images/H1.png";
import Home2 from "./Images/H2.png";
import Homebg from "./Images/Homebg1.png";
function Home(){
    return(
        <>
        <Navbar/>
        <div class="head">
        <h1><p className="quotes">To Travel Is To Live...</p></h1>
        </div>
       
        <Carousel>
            <Carousel.Item interval={1000}>
                <img src={Homebg} class = "img"></img>
            <Carousel.Caption>
          
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={Home2} class = "img"></img>
            <Carousel.Caption>
          
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Home1} class = "img"></img>
            <Carousel.Caption>
         
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}
export default Home;
