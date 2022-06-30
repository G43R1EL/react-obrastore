import ItemCount from './ItemCount/ItemCount';
import { useState } from 'react';
import './ItemDetail.css';
import GoToCart from '../../GoToCart/GoToCart';
import { useContext } from 'react';
import { CartContext } from '../../../../../context/CartContext/CartContext';

function ItemDetail ({item}) {
    const [finalizar, setFinalizar] = useState(false);
    const {title,category,description,price} = item;
    const { addItem } = useContext(CartContext);
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })

    function onAdd(product) {
        addItem(product);
        setFinalizar(true);
    }

    return (
        <>
            <div className='ItemDetail__information'>
                <div className='ItemDetail__description'>
                    <h2>{title}</h2>
                    <p className='ItemDetail__category'>Categoría: {category}</p>
                    <p>{description}</p>
                </div>
                <div className='ItemDetail__action'>
                    <div>
                        <h2>{pesoArg.format(price)+'-'}</h2>
                    </div>
                    {
                        finalizar
                        ? <GoToCart />
                        : <ItemCount item={item} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    );
}

export default ItemDetail;