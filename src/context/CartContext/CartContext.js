import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    function addItem (product, qty) {
        if (isInCart(product.id)) {
            const idx = cart.findIndex(prod => prod.id === product.id);
            cart[idx].qty += qty;
            setCart(cart);
        } else {
            setCart([...cart,{...product, qty}]);
        }
    }

    function removeItem(id) {
        setCart(cart.filter(product => product.id !== id));
    }

    function clear () {
        setCart([]);
    }

    function isInCart(id) {
        if (cart.find(product => product.id === id )) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}