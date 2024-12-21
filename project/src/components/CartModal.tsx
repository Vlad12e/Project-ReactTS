import React, { useState } from 'react';  
import './Cart.css'

const ShoppingCart = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  // Функция для открытия и закрытия корзины  
  const toggleCart = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <div>  
      <button onClick={toggleCart}>  
        {isOpen ? 'Закрыть корзину' : 'Открыть корзину'}  
      </button>  
      
      {isOpen && (  
        <div className="cart">  
          <h2>Ваша корзина</h2>  
          <ul>  
            <li>Товар 1</li>  
            <li>Товар 2</li>  
            <li>Товар 3</li>  
          </ul>  
          <button onClick={toggleCart}>Закрыть</button>  
        </div>  
      )}  
    </div>  
  );  
};  

export default ShoppingCart;