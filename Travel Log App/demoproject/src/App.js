import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Packages from './Components/Packages';
import Reviews from './Components/Reviews';
import Contactus from './Components/Contactus';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Feedback from './Components/Feedback';
import Button from './Components/Button';
import Booking from './Components/Booking';
import AdminLogin from './Components/AdminPage/Adminlogin';
import Dashboard from './Components/AdminPage/Dashboard';

function App() {
  return (
   <>
   {/* <Navbar/> */}
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/packages' element={<Packages/>}></Route>
    <Route path='/reviews' element={<Reviews/>}></Route>
    <Route path='/contactus' element={<Contactus/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/feedback' element={<Feedback/>}></Route>
    <Route path='/button' element={<Button/>}></Route>
    <Route path='/booking' element={<Booking/>}></Route>
    <Route path='/admin' element={<Dashboard/>}></Route>
    <Route path='/Adminlogin' element={<AdminLogin/>}></Route>
    </Routes>
    
   </>
  );
}

export default App;

