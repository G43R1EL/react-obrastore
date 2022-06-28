import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext/CartContext';
import './Cart.css';
import RemoveItemBtn from './RemoveItemBtn/RemoveItemBtn';

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
                        <h1>Contenido del carro</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre del producto</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            cart.map(product=>{
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>{product.count}</td>
                                        <td>{product.count*product.price}</td>
                                        <td><RemoveItemBtn id={product.id} /></td>
                                    </tr>
                                );
                            })
                        }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="cart__total">
                            <b>TOTAL:</b><span> {pesoArg.format(cartTotal()) + '-'}</span>
                        </div>
                    </>
            }
        </>
    );
}

export default Cart;