import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import './RemoveItemBtn.css';
import { CartContext } from '../../../../../context/CartContext/CartContext';

function RemoveItemBtn ({id}) {
    const { removeItem } = useContext(CartContext);

    function removeItemHndlr() {
        removeItem(id);
    }

    return (
        <button className="squareButton">
            <FontAwesomeIcon icon={faTrash} onClick={removeItemHndlr} />
        </button>
    )
}

export default RemoveItemBtn;