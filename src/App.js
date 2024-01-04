import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './pages/cart/Cart';
// import Shop from './pages/shop/Shop';
import Navbar from './components/Navbar';
import Adidas from './pages/products/Adidas';
import Jordan from './pages/products/Jordan';
import NewBalance from './pages/products/NewBalance';
import Slides from './pages/products/Slides';
import Nike from './pages/products/Nike';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Jordan />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/adidas" element={<Adidas />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/jordans" element={<Jordan />} />
          <Route path="/newbalance" element={<NewBalance />} />
          <Route path="/slides" element={<Slides />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
