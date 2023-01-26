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
            <div className='Cart-Form'>
                <h2>Formulario del Cliente</h2>
                <div className='Form-container'>
                    <div className='Form-input'>
                        <label>Nombre</label>
                        <input/>
                    </div>
                    <div className='Form-input'>
                        <label>Direccion</label>
                        <input/>
                    </div>
                    <div className='Form-input'>
                        <label>Costo de Envio</label>
                        <input disabled={true}/>
                    </div>
                    <div className='Form-input'>
                        <label>Metodos de Pago</label>
                        <label><input type='radio' id='TjaRad' name='MetPag'/>
                            Tarjeta de Credito/ Debito</label>
                        <label><input type='radio' id='EfvoRad' name='MetPag'/>
                            Mercado Pago</label>
                    </div>
                </div>
            </div>
            <div className='Cart-cart'>
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
                <button className='Cart-button'>Realizar Pedido</button>
            </div>
        </div>
    )
}
