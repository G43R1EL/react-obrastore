import './NotFound.css';
import { NavLink } from 'react-router-dom';

export default function NotFound () {
    return (
        <div className="container__404">
            <div className="message">
                <h1>404<span>!</span></h1>
                <p>Lo sentimos, la pagina o producto que usted busca no se encuentra o ha sido removido.</p>
                <p>Si lo desea lo invitamos a visitar nuestra tienda.</p>
                <NavLink to="/products">Ir a la tienda...</NavLink>
            </div>
        </div>
    );
}