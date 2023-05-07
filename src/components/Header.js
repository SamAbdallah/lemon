import React from 'react'
import './Header.css'
import header from '../images/Logo.png' 
import {Route,Link,Routes} from 'react-router-dom'
import Main from './Main'
import Booking from './Booking'

function Header() {

  return (
    <div id='container'>
  <nav>
    <ul>
     <Link to='/'><li>Home</li></Link>
     <Link to='/Booking'><li>Booking</li></Link>

      {/* <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Log In</a></li> */}

    </ul>
  </nav>      
  <li id='logo'><img src={header} alt=''/></li>
  {/* <Routes>
        <Route path='/' element={Main}/>
        <Route path='/Booking' element={Booking}/>
      </Routes> */}
  </div>

  )
}

export default Header