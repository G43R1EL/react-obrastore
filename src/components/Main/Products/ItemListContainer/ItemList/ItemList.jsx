import './ItemList.css';
import Item from './Item/Item';

function ItemList({items}) {
    function onAdd(productId, quantity) {
        console.log('Se estan agregando ' + quantity + ' -> ' + productId + ' al carrito...');
    }

    return (
        <>
            { items.map(item =>
                <Item
                    key={item.id}
                    productId={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                    image={item.image}
                    onAdd={onAdd}
                />
            ) }
        </>
    );
}

export default ItemList;