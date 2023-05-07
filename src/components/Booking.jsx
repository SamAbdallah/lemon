import React, { useState } from 'react';
import './Booking.css'

function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [occassion, setOccassion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name,setName]=useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as submitting it to a server or updating the UI
  };

  return (
    <form onSubmit={handleSubmit} id='form1'>

      <div className='intro'>
        <h1 id='title'>Little Lemon</h1>
        <h2>Chicago</h2><br/><br/>
        <h2>Find a Table For Your Occasion!!</h2>

      </div>
      
  <div className='container'>
    <label for="res-date" className='label1'>Choose date</label>
    <input type="date" id="res-date" value={date} onChange={(e)=>setDate(e.target.value)} className='input1'/>
  </div> 
    

  <div className='container'>
    <label for="res-time" className='label1'>Choose time</label>
    <select id="res-time " value={time} onChange={(e)=>setTime(e.target.value)} className='input1' defaultValue="time">
       <option>17:00</option>
       <option>18:00</option>
       <option>19:00</option>
       <option>20:00</option>
       <option>21:00</option>
       <option>22:00</option>
    </select>
  </div> 

  <div className='container'> 
    <label for="guests" className='label1'>Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" className='input1' value={numPeople} onChange={(e)=>setNumPeople(e.target.value)}/>
  </div> 

  <div className='container'>    
    <label for="occasion" className='label1'>Occasion</label>
    <select id="occasion" value={occassion} onChange={(e)=>setOccassion(e.target.value)} className='input1'>
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
  </div>

  <div className='container'> 
    <label for="Name" className='label1'>Full Name:</label>
    <input type="text" placeholder="Mikel Jordan"  className='input1' value={phoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
  </div> 

  <div className='container'> 
    <label for="number" className='label1'>Phone Number:</label>
    <input type="tel" placeholder="96181000000" min="8" max="11"  className='input1' value={name}  onChange={(e)=>setName(e.target.value)}/>
  </div> 

    <input type="submit" value="Make Your reservation" id='submit'/>
 </form>
  );
}

export default Booking;