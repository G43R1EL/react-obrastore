import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext/CartContext';
import './Cart.css';

function Cart () {
    const { cart } = useContext(CartContext);
    return (
        <>
            <h1>Cart Works!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Actions</th>
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
                            <td>{product.qty}</td>
                            <td>{product.qty*product.price}</td>
                            <td>Quitar / Modificar</td>
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
        </>
    );
}

export default Cart;