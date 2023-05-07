import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking';
import Header from './components/Header';
import Main from './components/Main';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Booking' element={<Booking/>}></Route>

      </Routes>
      {/* <Header/>
      <Main/> */}

    </div>
  );
}

export default App;
