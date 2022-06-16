import { useState } from 'react';
import './ItemCount.css';

function ItemCount ({stock, initial, onAdd, id, mode}) {
    const [count, setCount] = useState(initial);

    function plusCount () {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function minusCount () {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function changeHndlr (event) {
        const value = event.target.value; 
        if (value <= stock && value > 0) {
            setCount(parseInt(event.target.value));
        }
    }

    function addToCart() {
        onAdd(id, count);
    }

    return (
        <>
            <div className='productCard__itemCount'>
                {
                    mode==='full' ?
                        <div className="productCard__itemCount__bar">
                        <button className='squareButton' onClick={minusCount}>-</button>
                        <input type="text" name="quantity" id="quantity" value={count} onChange={changeHndlr} />
                        <button className='squareButton' onClick={plusCount}>+</button>
                        </div>
                    :
                        ''
                }
                
                <button className='addButton' onClick={addToCart}>Agregar al carro</button>
            </div>
        </>
    )
}

export default ItemCount;