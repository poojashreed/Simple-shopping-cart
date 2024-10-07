import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from './infosyslogo.png';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, cartItems, setCartItems }) => {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const navigate = useNavigate();

  const totalCartValue = cartItems.reduce((total, item) => total + item.price, 0);

  const handleLogoClick = () => {
    navigate('/home');
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#0056a2', color: '#fff' }}>
      <div>
        <img src={logo} alt="Logo" style={{ height: '40px' }} onClick={handleLogoClick} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        { user && <FaShoppingCart style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => setShowCart(!showCart)} />}
        {showCart && (
          <div style={{ position: 'absolute', top: '64px', right: '87px', backgroundColor: '#fff', color: '#000', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign:'center'}}>
            <h4>Cart Items</h4>
            <ul className='cart'>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                  <button onClick={() => handleRemoveItem(index)} style={{ marginLeft: '10px', cursor: 'pointer' }}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${totalCartValue}</p>
          </div>
        )}
        { user && <FaUser style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => setShowProfile(!showProfile)} />}
        {showProfile && (
          <div style={{ position: 'absolute', top: '64px', right: '10px', backgroundColor: '#fff', color: '#000', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>{user}</p>
            <p>Infosys</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
