import './NavLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLink ({name, href, icon, target}) {
    return (
        <>
            <li>
                {
                    icon
                        ? <a href={href} target={target}><FontAwesomeIcon icon={icon} /> {name}</a>
                        : <a href={href} target={target}>{name}</a>
                }
            </li>
        </>
    );
}

export default NavLink;