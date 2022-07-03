import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext/CartContext';
import './Cart.css';
import Checkout from './Checkout/Checkout';
import ProductLine from './ProductLine/ProductLine';

function Cart () {
    const { cart, cartCount, cartTotal } = useContext(CartContext);
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })

    return (
        <>
            {
                cartCount() === 0
                ?
                    <>
                        <div className="cart__empty">
                            <h2>Carrito vacío</h2>
                            <Link to={`/products`}><button className='cart__button'>Ir a la tienda</button></Link>
                        </div>
                    </>
                :
                    <>
                        <div className='cart__container'>
                            <div className='cart__details'>
                                <h2>Contenido del carro</h2>
                                {
                                    cart.map(product=>{
                                        return (
                                            <ProductLine product={product} key={product.id} />
                                        );
                                    })
                                }
                                <div className="cart__total">
                                    <b>TOTAL:</b><span> {pesoArg.format(cartTotal()) + '-'}</span>
                                </div>
                            </div>
                            <Checkout cart={cart} />
                        </div>
                    </>
            }
        </>
    );
}

export default Cart;