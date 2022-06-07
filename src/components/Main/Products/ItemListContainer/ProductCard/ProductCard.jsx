import ItemCount from './ItemCount/ItemCount';
import './ProductCard.css';
import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';

function ProductCard({productId, title, description, price, stock, image, onAdd}) {
    return (
        <>
            <div className="productCard__container" id={productId}>
                <ProductImage image={image} />
                <ProductInfo title={title} description={description} price={price} />
                <ItemCount stock={stock} initial={1} onAdd={onAdd} productId={productId} />
            </div>
        </>
    );
}

export default ProductCard;