import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginPage';
import HomeProduct from './Home';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <Router>
      <div className="app-container">
        <Header user={user} cartItems={cartItems} total={total} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/home" element={<HomeProduct user={user} total={total} setTotal={setTotal} setCartItems={setCartItems} />} />
          <Route path="/products/:category" element={<HomeProduct setCartItems={setCartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
