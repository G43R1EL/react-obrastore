import './Nav.css';
import NavLink from '../../../Common/NavLink/NavLink';

function Nav () {
    return (
        <>
            <nav>
                <ul>
                    <NavLink name="Inicio" href="home" />
                    <NavLink name="Sobre nosotros" href="about" />
                    <NavLink name="Productos" href="products" />
                    <NavLink name="Servicios" href="services" />
                    <NavLink name="Contacto" href="contact" />
                </ul>
            </nav>
        </>
    );
}

export default Nav;