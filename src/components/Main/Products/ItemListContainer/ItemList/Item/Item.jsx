import ItemCount from './ItemCount/ItemCount';
import './Item.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from './ItemInfo/ItemInfo';

function Item({item, onAdd}) {
    const {id,thumb,title,description,price,stock} = item;
    return (
        <>
            <div className="productCard__container" id={id}>
                <ItemImage thumb={thumb} />
                <ItemInfo title={title} description={description} price={price} />
                <ItemCount stock={stock} initial={1} onAdd={onAdd} id={id} />
            </div>
        </>
    );
}

export default Item;