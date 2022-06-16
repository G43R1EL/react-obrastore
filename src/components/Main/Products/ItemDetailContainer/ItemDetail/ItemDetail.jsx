import { onAdd } from '../../../../../helpers/onAdd';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail ({item}) {
    const {id,title,category,description,price,stock} = item;
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })

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
                    <ItemCount id={id} stock={stock} initial={1} onAdd={onAdd} mode={'full'} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;