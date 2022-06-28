import './CartWidget.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { CartContext } from '../../../../../../context/CartContext/CartContext';

function CartWidget () {
    const { cartCount } = useContext(CartContext);

    return (
        <>  
            <li className='cartWidget__container'>
                <Link to='cart'>
                    <FontAwesomeIcon icon={faCartShopping} />
                    { cartCount() > 0 && <span className='cartWidget__badge'>{cartCount()}</span>}
                </Link>
            </li>
        </>
    );
}

export default CartWidget;