import { onAdd } from '../../../../../helpers/onAdd';
import ItemCount from '../../ItemListContainer/ItemList/Item/ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail ({item}) {
    const {id,title,description,price,stock} = item;
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })

    return (
        <>
            <div className='ItemDetail__information'>
                <div className='ItemDetail__description'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='ItemDetail__action'>
                    <div>
                        <h2>{pesoArg.format(price)+'-'}</h2>
                    </div>
                    <ItemCount id={id} stock={stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;