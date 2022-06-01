import NavLink from '../../Nav/NavLink/NavLink';
import './InfoBar.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function InfoBar () {
    return (
        <>
            <ul>
                <NavLink name="Instagram" href="https://www.instagram.com/" icon={faInstagram} target="_blank" />
                <NavLink name="WhatsApp" href="https://www.whatsapp.com/" icon={faWhatsapp} target="_blank" />
                <NavLink name="Carrito" href="cart" icon={faCartShopping} />
            </ul>
        </>
    );
}

export default InfoBar;