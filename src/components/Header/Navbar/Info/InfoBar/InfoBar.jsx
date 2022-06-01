import NavLink from '../../Nav/NavLink/NavLink';
import './InfoBar.css';

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget/CartWidget';

function InfoBar () {
    return (
        <>
            <ul>
                <NavLink name="Instagram" href="https://www.instagram.com/" icon={faInstagram} target="_blank" />
                <NavLink name="WhatsApp" href="https://www.whatsapp.com/" icon={faWhatsapp} target="_blank" />
                <CartWidget />
            </ul>
        </>
    );
}

export default InfoBar;