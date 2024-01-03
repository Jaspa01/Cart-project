import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
