import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/style.css";

import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import TimerCounter from './TimerCounter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container className='py-5'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/timeCounter" element={<TimerCounter/>} />
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
