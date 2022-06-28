import './Item.css';
import ItemImage from './ItemImage/ItemImage';
import ItemInfo from './ItemInfo/ItemInfo';

function Item({item}) {
    const {id,thumb,title,category,description,price} = item;
    return (
        <>
            <div className="productCard__container" id={id}>
                <ItemImage thumb={thumb} id={id} />
                <ItemInfo title={title} category={category} description={description} price={price} id={id} />
            </div>
        </>
    );
}

export default Item;