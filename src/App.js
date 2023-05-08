import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import Booking from './components/Booking';
import Header from './components/Header';
import Main from './components/Main';
import { BookingContext } from './Context/BookingContext';

function App() {
  const [time, setTime] = useState('');


  return (
    <BookingContext.Provider value={[time, setTime]}> 
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
