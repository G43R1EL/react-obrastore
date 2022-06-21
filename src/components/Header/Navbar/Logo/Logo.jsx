import './Logo.css';
import logo from '../../../../logo.svg';
import { Link } from 'react-router-dom';

function Logo () {
    return (
        <Link to={'/'}>
            <img className='logo' src={logo} alt='Obra Store' />
        </Link>
    );
}

export default Logo;