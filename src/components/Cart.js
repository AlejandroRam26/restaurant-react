import React from 'react'
import useMenuCart from '../hooks/useMenuCart'
// Assets
import '../assets/css/Cart.css'
//Components
import {CartItem} from './CartItem'
export const Cart = () => {
    const MenuCart = useMenuCart();
    const CategoryList = [...new Set(MenuCart.cartList.map(Item => Item.category))];
    
    return (
        <div className='container Cart'>
            <h1>Carrito</h1>
            <div className='Cart-List'>
                <ul className='Cart-Filt'>
                    {CategoryList.map((CategoryI, idG) => (
                        <li key={idG} className='Cart-Filt-li'>
                            <h3 className='Cart-Filt-Title'>{CategoryI}</h3>
                            <ul className='Cart-Filt-List'>
                                {MenuCart.cartList.filter(MItem => MItem.category === CategoryI).map((item, id) => (
                                    <li key={id} className='Cart-Filt-List-li' style={{ "--id-Item": id }}>
                                        <CartItem item={item}/>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='Cart-Info'>
                <p>Total: $ {MenuCart.Total.toFixed(2)}</p>
            </div>
            <div className='Client-Info'>
                <p>Cliente: {MenuCart.name}</p>
                <p>Domicilio: {MenuCart.address}</p>
            </div>
        </div>
    )
}
