import React from 'react'
import useMenuCart from '../hooks/useMenuCart'
export const MenuItem = ({item = {item: null, price: 0, category: null}}) => {
    const MenuCart = useMenuCart();
  return (
    <React.Fragment>
        <div className='infoBox'>
            <h3>{item.item}</h3>
            <h3>$ {item.price.toFixed(2)}</h3>
        </div>
        <button onClick={() => {
            let newItem = {...item, count: 1};
            if (MenuCart.cartList.some(el => el.item === newItem.item && el.category === newItem.category)) {
                let ItemModf = MenuCart.cartList.find(el => el.item === newItem.item && el.category === newItem.category);
                ItemModf.count = ItemModf.count + 1;
                MenuCart.setCartList(
                    MenuCart.cartList.map(el => el === newItem ? ItemModf : el)
                );
            } else {
                MenuCart.setCartList([...MenuCart.cartList, newItem]);
            }
            MenuCart.setTotal(MenuCart.cartList.map(el => el.count * el.price).reduce(function(prev, current){return prev + current},0));
            }} >Agregar al Carrito</button>
    </React.Fragment>
  )
}
