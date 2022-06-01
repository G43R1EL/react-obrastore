import Info from './Info/Info';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import './Navbar.css';

function Navbar () {
    return (
        <>
            <Logo />
            <Nav />
            <Info />
        </>
    );
}

export default Navbar;