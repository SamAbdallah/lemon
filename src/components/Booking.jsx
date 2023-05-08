import React, { useState } from 'react';
import './Booking.css'
import grilled from '../images/Grilled fish.png'
import greek from '../images/Greek salad.png'

function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [occassion, setOccassion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name,setName]=useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(time)
  };
  const handleTimeChange=(event)=>{
    event.preventDefault()
    setTime(event.target.value)
  }

  return (
    <div  id='form1'>

      <div className='intro'>
        <h1 id='title'>Little Lemon</h1>
        <h2 className='text'>Chicago</h2><br/><br/>
        <h1 className='text'>Find a Table For Your Occasion!!</h1>

        <div id='ImagesContainer'>
          <img src={greek} alt=''/>
          <img src={grilled} alt=''/>

        </div>

      </div>
      <div className='f'>
      
  <div className='container'>
    <label  className='label1'>Choose date</label>
    <input type="date" id="res-date" value={date} onChange={(e)=>setDate(e.target.value)} className='input1'/>
  </div> 
    

  <div className='container'>
    <label  className='label1'>Choose time</label>
    <select  className='input1'  value={time} onChange={handleTimeChange}>
       <option value="17:00">17:00</option>
       <option value="18:00">18:00</option>
       <option value="19:00">19:00</option>
       <option value="20:00">20:00</option>
       <option value="21:00">21:00</option>
       <option value="22:00">22:00</option>
    </select>
  </div> 

  <div className='container'> 
    <label  className='label1'>Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" className='input1' value={numPeople} onChange={(e)=>setNumPeople(e.target.value)}/>
  </div> 

  <div className='container'>    
    <label  className='label1'>Occasion</label>
    <select id="occasion" value={occassion} onChange={(e)=>setOccassion(e.target.value)} className='input1'>
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
  </div>

  <div className='container'> 
    <label  className='label1'>Full Name:</label>
    <input type="text" placeholder="Mikel Jordan"  className='input1' value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
  </div> 

  <div className='container'> 
    <label  className='label1'>Phone Number:</label>
    <input type="tel" placeholder="96181000000" min="8" max="11"  className='input1' value={name}  onChange={(e)=>setName(e.target.value)}/>
  </div> 
  <button onClick={handleSubmit}>Make Your Reservation!</button>
  
  </div>

 </div>
  );
}

export default Booking;