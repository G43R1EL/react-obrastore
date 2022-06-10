import ItemCount from './ItemCount/ItemCount';
import './Item.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from './ItemInfo/ItemInfo';

function Item({productId, title, description, price, stock, image, onAdd}) {
    return (
        <>
            <div className="productCard__container" id={productId}>
                <ItemImage image={image} />
                <ItemInfo title={title} description={description} price={price} />
                <ItemCount stock={stock} initial={1} onAdd={onAdd} productId={productId} />
            </div>
        </>
    );
}

export default Item;