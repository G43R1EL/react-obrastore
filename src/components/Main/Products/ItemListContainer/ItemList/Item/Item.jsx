import ItemCount from '../../../ItemCount/ItemCount';
import './Item.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from './ItemInfo/ItemInfo';

function Item({item, onAdd}) {
    const {id,thumb,title, category,description,price,stock} = item;
    return (
        <>
            <div className="productCard__container" id={id}>
                <ItemImage thumb={thumb} id={id} />
                <ItemInfo title={title} category={category} description={description} price={price} id={id} />
                <ItemCount stock={stock} initial={1} onAdd={onAdd} id={id} />
            </div>
        </>
    );
}

export default Item;