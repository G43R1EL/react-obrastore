import './Logo.css';
import logo from '../../../../logo.svg';

function Logo () {
    return (
        <img className='logo' src={logo} alt='Obra Store' />
    );
}

export default Logo;