import './ItemListContainer.css';
import ProductCard from './ProductCard/ProductCard';

function ItemListContainer () {
    function onAdd(productId, quantity) {
        console.log('Se estan agregando ' + quantity + ' -> ' + productId + ' al carrito...');
    }

    return (
        <>
            <div className="itemList__container">
                <ProductCard productId="10001" title="Product title" stock={5} onAdd={onAdd} />
                <ProductCard productId="10002" title="Product title" stock={5} onAdd={onAdd} />
                <ProductCard productId="10003" title="Product title" stock={5} onAdd={onAdd} />
                <ProductCard productId="10004" title="Product title" stock={5} onAdd={onAdd} />
            </div>
        </>
    );
}

export default ItemListContainer;