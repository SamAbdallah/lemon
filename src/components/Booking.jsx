import React, { useState,useContext } from 'react';
import './Booking.css'
import grilled from '../images/Grilled fish.png'
import greek from '../images/Greek salad.png'
import { BookingContext } from '../Context/BookingContext';

function Booking() {
  const [time, setTime, AvailableTime, setAvailableTime] = useContext(BookingContext);
  const[submit,setSubmit]=useState(false)


  // useEffect(() => {
  //   const fetchAPIFunctions = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
  //       );
  //       const scriptCode = await response.text();
  //       const script = document.createElement('script');
  //       script.appendChild(document.createTextNode(scriptCode));
  //       document.head.appendChild(script);
  //       console.log(script)



  //       script.addEventListener('load', () => {
  //         const seededRandom = window.seededRandom;
  //         const fetchAPI = window.fetchAPI;
  //         const submitAPI = window.submitAPI;
  
  //         // Use the functions here
  //         const date1 = new Date();
  //         const random = seededRandom(date1.getDate());
  //         const result = fetchAPI(date);
  //         // const isSubmitted = submitAPI(formData);
  
  //         console.log(result);
  //         // console.log(isSubmitted);
  //       });
  //     } catch (error) {
  //       console.error('Error fetching API functions:', error);
  //     }
  //   };

  //   fetchAPIFunctions();
  // }, []);

 
 

  const [date, setDate] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [occassion, setOccassion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name,setName]=useState('')
  const checker=()=>{
    if(name.length<1||phoneNumber.length<1||occassion.length<1||date.length<1||numPeople<1){
      setSubmit(false)
    }
    else{
      setSubmit(true)
    }
  }
      console.log(AvailableTime)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(time)
  };
  const handleTimeChange = (event) => {
    event.preventDefault();
    const selectedTime = event.target.value;

    setTime(selectedTime);
    setAvailableTime(prevAvailableTime => {
      const newAvailableTime = prevAvailableTime.filter(item => item !== selectedTime);
      console.log(AvailableTime)

      return newAvailableTime;
    }
    
    );
  };

  const handleDate=(e)=>{
    setDate(e.target.value)
    checker()
    
  }
  const handlenameChange=(e)=>{
    setName(e.target.value)
    checker()
    
  }
  const handleNumOfPeopleChange=(e)=>{
    setNumPeople(e.target.value)
    checker()
    
  }
  const handlePhoneNumberChange=(e)=>{
    setPhoneNumber(e.target.value)
    checker()
    
  }
  const handleOcassionChange=(e)=>{
    setOccassion(e.target.value)
    checker()
    
  }

  function DropdownOptions(list1) {
    const options = list1.items.map((item) =>
      <option key={item}>{item}</option>
    );
    return options;
  }

  // checker()
  return (
    <form id='form1'>
    <div>

      <div className='intro'>
        <h1>{time}</h1>

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
    <input type="date" id="res-date" value={date} onChange={handleDate} className='input1' required/>
  </div> 
    

  <div className='container'>
    <label  className='label1'>Choose time</label>
    <select  className='input1'  value={time} onChange={handleTimeChange} required>

       <DropdownOptions items={AvailableTime} />

    </select>
  </div> 

  <div className='container'> 
    <label  className='label1'>Number of guests</label>
    <input required type="number" placeholder="1" min="1" max="10" id="guests" className='input1' value={numPeople} onChange={handleNumOfPeopleChange}/>
  </div> 

  <div className='container'>    
    <label  className='label1'>Occasion</label>
    <select required id="occasion" value={occassion} onChange={handleOcassionChange} className='input1'>
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
  </div>

  <div className='container'> 
    <label  className='label1'>Full Name:</label>
    <input required type="text" placeholder="Mikel Jordan"  className='input1' value={name}  onChange={handlenameChange}/>
  </div> 

  <div className='container'> 
    <label  className='label1'>Phone Number:</label>
    <input required type="tel" placeholder="96181000000" min="8" max="11"  className='input1' value={phoneNumber}  onChange={handlePhoneNumberChange}/>
  </div> 
  <button disabled={!submit}  id='button1' onClick={handleSubmit}>Make Your Reservation!</button>
  
  </div>

  

 </div></form>
  );
}

export default Booking;