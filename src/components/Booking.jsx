import React, { useState } from 'react';

function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [occassion, setOccassion] = useState('');


  



  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as submitting it to a server or updating the UI
  };

  return (
    <form onSubmit={handleSubmit}>
    <label for="res-date">Choose date</label>
    <input type="date" id="res-date" value={date} onChange={(e)=>setDate(e.target.value)}/>
    <label for="res-time">Choose time</label>
    <select id="res-time " value={time} onChange={(e)=>setTime(e.target.value)}>
       <option>17:00</option>
       <option>18:00</option>
       <option>19:00</option>
       <option>20:00</option>
       <option>21:00</option>
       <option>22:00</option>
    </select>
    <label for="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={numPeople} onChange={(e)=>setNumPeople(e.target.value)}/>
    <label for="occasion">Occasion</label>
    <select id="occasion" value={occassion} onChange={(e)=>setOccassion(e.target.value)}>
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation"/>
 </form>
  );
}

export default Booking;