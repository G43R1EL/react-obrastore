import { onAdd } from '../../../../../helpers/onAdd';
import ItemCount from '../../ItemCount/ItemCount';
import { useState } from 'react';
import './ItemDetail.css';
import GoToCart from '../../GoToCart/GoToCart';

function ItemDetail ({item}) {
    const [finalizar, setFinalizar] = useState(false);
    const {id,title,category,description,price,stock} = item;
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })

    function addItem (id, count) {
        onAdd(id, count);
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
                        : <ItemCount id={id} stock={stock} initial={1} onAdd={addItem} mode={'full'} />
                    }
                </div>
            </div>
        </>
    );
}

export default ItemDetail;