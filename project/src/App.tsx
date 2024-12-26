import React, { useState } from 'react';  
import './App.css';  

const App: React.FC = () => {  
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);  
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);  

  // Функция для открытия и закрытия корзины  
  const toggleCart = () => {  
    setIsCartOpen(prev => !prev);  
  };  

  // Функция для открытия и закрытия профиля  
  const toggleProfile = () => {  
    setIsProfileOpen(prev => !prev);  
  };  

  return (  
    <>  
      <header>  
        <div className="header__background"></div>  
        <h1 className='name__site'>Керамикъ</h1>  
        <h4 className='undername_site'>Фабрика декору</h4>  
        <h3 className='number__phone'>+380 95 486 8734</h3>  
        <a className='call__back' href='./index.html'>Зворотній дзвінок</a>  
        <div className="search">  
          <input type="text" className='search' placeholder='Поиск'/>  
          <a href=""><img src="src/img/Vector.png" alt="" className='search__button' /></a>  
        </div>  
        <a href=""><img src="src/img/bookmarks.png" alt="" className='book__marks'/></a>  
        <a href="#" onClick={toggleCart}>  
          <img src="src/img/cart.png" alt="" className='cart' />  
        </a>  
        <a href="#" onClick={toggleProfile}>  {/* Change this line to toggle the profile modal */}  
          <img src="src/img/profile.png" alt="" className='profile'/>  
        </a>  
        {/* ------------------------------------------------------------------------------------ */}  
        <a href=""><p className='catalog'>Каталог <img src="src/img/Vector (1).png" alt="" /></p></a>  
        <a href=""><p className='home'>Головна</p></a>  
        <a href=""><p className='about__us'>Про нас</p></a>  
        <a href=""><p className='discount'>Акція</p></a>  
        <a href=""><p className='news'>Новини</p></a>  
        <a href=""><p className='contact'>Контакти</p></a>  
        {/*-----------------------------------------------------------------------------------------------*/}  
        <h1 className='slider__h1'>Шукаєте де купити механізми Salvador?</h1>  
        <p className='slider__p'>Здійснюючи її замовлення на загальну суму від 100 000 рублів, під усі замовлені <br /> вимикачі та розетки для відкритої проводки в подарунок ви отримуєте рамки з <br /> натурального бука нашого власного виробництва.</p>  
        <button className='slider__button'>Подробнее</button>  

        {/* Компонент корзины */}  
        {isCartOpen && (  
          <div className="cart__modal">  
            <h2>Ваша корзина</h2>  
            <ul>  
              <li>Товар 1</li>  
              <li>Товар 2</li>  
              <li>Товар 3</li>  
            </ul>  
            <button onClick={toggleCart}>Закрыть</button>  
          </div>  
        )}  

        {/* Компонент профиля */}  
        {isProfileOpen && (  
          <div className="profile__modal">  
          <form action="">
            <h2>Регестрація</h2>  
            <input type="text" className='profile__name' placeholder="Ваше їм'я"/>
            <input type="text" className='profile__email' placeholder="Ваш Емаїл"/>
            <input type="text" className='profile__number_phone'placeholder="Ваш номер телефону"/>
            <button onClick={toggleProfile}>Закрити</button>  
            </form>
          </div>  
        )}  
      </header>  
    </>  
  );  
}  

export default App;