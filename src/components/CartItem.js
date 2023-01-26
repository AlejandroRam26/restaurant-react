import React, {useState} from 'react'
import useMenuCart from '../hooks/useMenuCart'

export const CartItem = ({item = {item: 'Item', price: 0, category: null, count: 1}}) => {
    const [Cant, setCant] = useState(item.count);
    const MenuCart = useMenuCart();
    const IncrementCount = () => {
      setCant(Cant + 1)
      loadTotal();
    };
    const DencrementCount = () => {
      if (Cant > 1) {
        console.log('Decrement - Eliminar');
      }
      setCant(Cant - 1);
      loadTotal(-1);
    };
    const loadTotal = (oper = 1) => {
      let NewItem = item;
      NewItem.count = Cant + oper;
      if ((Cant + oper) < 1) {
        MenuCart.setCartList(
          MenuCart.cartList.filter(el => el !== item)
        );
      } else {
        MenuCart.setCartList(
          MenuCart.cartList.map(el => el === item ? NewItem : el)
        );
      }
      MenuCart.setTotal(MenuCart.cartList.map(el => el.count * el.price).reduce(function(prev, current){return prev + current},0));
    }
  return (
    <React.Fragment>
    <div className='cart-info'>
        <h3>{item.item}</h3>
        <h4>$ {(Cant * item.price).toFixed(2)}</h4>
    </div>
    <div className='cart-count'>
        <button onClick={() => DencrementCount()}>-</button>
        <input type='number'
        value={Cant} onChange={(e) => setCant(e.target.value)}/>
        <button onClick={() => IncrementCount()} disabled={Cant >= 99}>+</button>
    </div>
    </React.Fragment>
  )
}
