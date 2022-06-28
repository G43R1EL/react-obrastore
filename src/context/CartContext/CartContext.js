import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    function cartCount () {
        return cart.reduce((acum,prod) => acum += prod.count, 0);
    }

    function cartTotal () {
        return cart.reduce((acum,prod) => acum += prod.count * prod.price, 0);
    }

    function addItem (product) {
        if (isInCart(product.id)) {
            const idx = cart.findIndex(prod => prod.id === product.id);
            cart[idx].count += product.count;
            setCart(cart);
        } else {
            setCart([...cart,product]);
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
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartCount, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}