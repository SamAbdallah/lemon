import React from 'react'
import './Header.css'
import header from '../images/Logo.png' 

function Header() {
  return (
    <div id='container'>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Log In</a></li>

    </ul>
  </nav>      
  <li id='logo'><img src={header} alt=''/></li>
  </div>

  )
}

export default Header