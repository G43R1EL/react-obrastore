import './CartWidget.css';
import NavLink from '../../../Nav/NavLink/NavLink';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget () {
    return (
        <>
            <NavLink name="Carrito" href="cart" icon={faCartShopping} />
        </>
    );
}

export default CartWidget;