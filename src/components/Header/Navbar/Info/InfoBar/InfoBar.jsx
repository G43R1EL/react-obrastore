import NavLink from '../../../../Common/NavLink/NavLink';
import './InfoBar.css';

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget/CartWidget';

function InfoBar () {
    return (
        <>
            <ul>
                <NavLink name="Instagram" href="https://www.instagram.com/" icon={faInstagram} target="_blank" rel="noreferrer" />
                <NavLink name="WhatsApp" href="https://www.whatsapp.com/" icon={faWhatsapp} target="_blank" rel="noreferrer" />
                <CartWidget />
            </ul>
        </>
    );
}

export default InfoBar;