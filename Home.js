import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from './products.json';
import image from "./shirt.jpg";

const Home = ({ user, setTotal, setCartItems }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();
  const { category } = useParams();
  const items = products[category] || [];

  const categories = {
    female: {
      Traditional: ['Sarees', 'Kurtas'],
      Western: ['Tops', 'Womens Jeans'],
    },
    male: {
      Casual: ['Shirts', 'Mens Jeans'],
      Formal: ['Suits', 'Trousers'],
    },
    childrens: {
      Shirts: ['T-Shirts', 'Kids Jeans'],
      Formal: ['Kids Shirts', 'Kids Trousers'],
    },
    accessories: {
      Gadgets: ['Earphones', 'Smartwatches'],
      Wearables: ['Sunglasses', 'Jewllaries'],
    },
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <div className="sidebar">
        <div className='sidenav'>
          <ul>
            <li onClick={() => handleGenderClick('female')}>Female</li>
            <li onClick={() => handleGenderClick('male')}>Male</li>
            <li onClick={() => handleGenderClick('childrens')}>Childrens</li>
            <li onClick={() => handleGenderClick('accessories')}>Accessories</li>
          </ul>
        </div>
        {selectedGender && (
          <div className='subnav'>
            <ul>
              {Object.keys(categories[selectedGender]).map((category) => (
                <li key={category} onClick={() => handleCategoryClick(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedCategory && categories[selectedGender] && categories[selectedGender][selectedCategory] && (
          <div className='subnav2'>
            <ul>
              {categories[selectedGender][selectedCategory].map((item) => (
                <li key={item} onClick={() => navigate(`/products/${item}`)}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      
      <div className="content">
        {category ? (
          <div className='product'>
            <h2>{category}</h2>
            {items.length > 0 ? (
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <img src={image} alt={item.name} className='image' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <button onClick={() => { addToCart(item); }}>Add to Cart</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items found for this category.</p>
            )}
          </div>
        ) : (<></> )}
      </div>
    </div>
    </div>
  );
};

export default Home;
