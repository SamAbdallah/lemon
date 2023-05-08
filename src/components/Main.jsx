import React from 'react'
import './Main.css'
import photo from '../images/Hero image.png'
import bruschetta from '../images/Bruschetta.png'
import {Link} from 'react-router-dom'

function Main() {
  return (
 
    <div id='conatiner'> 
        <div id='intro'>
            <div id='info'>
                <h1 id='title'>Little Lemon</h1>
                <h2 className='text'>Chicago</h2>
                <h3 className='text'>We are a family owned mediterranean restaurant,<br/> focused on traditional recipes served with a modern twist.</h3>
                <Link to='/Booking'> <button>Reserve a Table</button></Link> 
            </div>
            <div id='imageConatiner'>  <img src={photo} className='photo' alt=''/></div>
        </div>
        <div id='MenuHeader'><h1 >This Week Specials!</h1></div>

        <div id='itemsConatiner'>
            <div id='item'>
                <img src={bruschetta} alt='' className='photo2'/>
                <div id='itemInfo'>
                    <p>Greek Salad</p>
                    <p id='price'>$12.99</p>
                </div>

                <p>Famous greek salad with all fresh vegetables</p>

            </div>

        </div>


    </div>

  )
}

export default Main