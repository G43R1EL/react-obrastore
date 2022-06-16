import './CartWidget.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartWidget () {
    return (
        <>  
            <li>
                <Link to='cart'><FontAwesomeIcon icon={faCartShopping} /> Carrito</Link>
            </li>
        </>
    );
}

export default CartWidget;