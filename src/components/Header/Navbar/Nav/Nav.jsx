import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav () {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='' className={({isActive})=>isActive?'link__active':undefined}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='about' className={({isActive})=>isActive?'link__active':undefined}>Sobre nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className={({isActive})=>isActive?'link__active':undefined}>Productos</NavLink>
                    </li>
                    <li>
                        <NavLink to='services' className={({isActive})=>isActive?'link__active':undefined}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to='contact' className={({isActive})=>isActive?'link__active':undefined}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;