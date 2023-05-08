import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import Booking from './components/Booking';
import Header from './components/Header';
import Main from './components/Main';
import { BookingContext } from './Context/BookingContext';

function App() {
  const [time, setTime] = useState('');
  const [ AvailableTime, setAvailableTime] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);



  return (
    <BookingContext.Provider value={[time, setTime,AvailableTime,setAvailableTime]}> 
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Booking' element={<Booking/>}></Route>

      </Routes>
      {/* <Header/>
      <Main/> */}

    </div>
    </BookingContext.Provider>
  );
}

export default App;
