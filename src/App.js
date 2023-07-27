import React from 'react';
import './index.css';
import Landing from './pages/Landing/Landing';
import ContactUs from './components/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Nav from './components/Nav/Nav';
import SignUp from './components/SignUp/Signup'
import OrderNav from './components/OrderNav/OrderNav';
import Navbar from './components/Nav/Nav';
import OrderElectricity from './components/OrderElectricity/OrderElectricity';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';


function App() {
  return (

    <div>    
      <OrderNav/>
      <OrderElectricity />
       
    </div>       
);
}

export default App;
