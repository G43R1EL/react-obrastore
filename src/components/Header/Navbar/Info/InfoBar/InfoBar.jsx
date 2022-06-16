import './InfoBar.css';

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function InfoBar () {
    return (
        <>
            <ul>
                <li>
                    <Link to='https://www.instagram.com/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} /></Link>
                </li>
                <li>
                    <Link to='https://www.whatsapp.com/' target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></Link>
                </li>
                <CartWidget />
            </ul>
        </>
    );
}

export default InfoBar;