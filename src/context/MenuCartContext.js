import { createContext} from 'react'
    const DefMenuCart = {
        name: null,
        setName: () => {},
        address: null,
        setAddress: () => {},
        cartList: [null],
        setCartList: () => {},
        Total: 0,
        setTotal: () => {}};
// const MenuCartContext = createContext({
//     name: null,

//     address: null,
//     setaddress: () => {},
//     CartListF: [null],
//     setCartListF: () => {},
//     Total: null
// })
const MenuCartContext = createContext(DefMenuCart)
export default MenuCartContext