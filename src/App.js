import React, {useState} from 'react'
//Context
import MenuCartContext from './context/MenuCartContext'
//Assets
import logo from './assets/image/logo.svg'
import './assets/css/App.css'
import './assets/css/palette.css'
import './assets/css/container.css'
//Components
import {Inicio} from './components/Inicio'
import {Menu} from './components/Menu'
import {Cart} from './components/Cart'
function App() {
  const [name, setName] = useState('Consumidor Final');
  const [address, setAddress] = useState('A la Vuelta');
  const [cartList, setCartList] = useState([]);
  const [Total, setTotal] = useState(0);
  const MenuCartData = {name, setName, address, setAddress, cartList, setCartList, Total, setTotal};
  let nameRestaurant = 'Restaurante';
  const [ActualPage, setActualPage] = useState('Menu');
  return (
    <MenuCartContext.Provider value={MenuCartData}>
      <div className="App">
        <header>
          <div className='title-logo'>
            <img src={logo} alt=''/>
            <span>{nameRestaurant}</span>
          </div>
          <div className='navbar'>
            <button onClick={() => setActualPage('Inicio')} className={ActualPage === 'Inicio' ? 'OnPage' : undefined}>Inicio</button>
            <button onClick={() => setActualPage('Menu')}  className={ActualPage === 'Menu' ? 'OnPage' : undefined}>Menu</button>
            <button onClick={() => setActualPage('Carrito')}  className={ActualPage === 'Carrito' ? 'OnPage' : undefined}>Carrito</button>
          </div>
        </header>
        <div className='great-container'>
          {ActualPage === 'Inicio' && <Inicio />}
          {ActualPage === 'Menu' && <Menu />}
          {ActualPage === 'Carrito' && <Cart />}
        </div>
      </div>
    </MenuCartContext.Provider>
  );
}

export default App;
