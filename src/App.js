import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';
import './App.css';
import Shop from './pages/shop/Shop';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
