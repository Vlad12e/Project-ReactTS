import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <header>
    <div className="header__background"></div>
    <h1 className='name__site'>Керамикъ</h1>
    <h4 className='undername_site'>фабрика декора</h4>
    <h3 className='number__phone'>+380 95 486 8734</h3>
    <a className='call__back' href='./index.html'>Обратный звонок</a>
    <div className="search">
    <input type="text" className='search' placeholder='Поиск'/>
    <a href=""><img src="src/img/Vector.png" alt="" className='search__button' /></a>
    </div>
    <a href=""><img src="src/img/bookmarks.png" alt="" className='book__marks'/></a>
    <a href=""><img src="src/img/cart.png" alt=""className='cart' /></a>
    <a href=""><img src="src/img/profile.png" alt="" className='profile'/></a>
    {/* ------------------------------------------------------------------------------------ */}
   <a href=""><p className='catalog'>Каталог <img src="src/img/Vector (1).png" alt="" /></p></a>
   <a href=""><p className='home'>Главная</p></a>
   <a href=""><p className='about__us'>О нас</p></a>
   <a href=""><p className='discount'>Акция</p></a>
   <a href=""><p className='news'>Новости</p></a>
   <a href=""><p className='contact'>Контакти</p></a>
  {/*-----------------------------------------------------------------------------------------------*/}
  
    </header>
    </>
  )
}

export default App
