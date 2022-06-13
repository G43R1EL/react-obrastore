import './ItemList.css';
import Item from './Item/Item';
import { onAdd } from '../../../../../helpers/onAdd';

function ItemList({items}) {
    return (
        <>
            { items.map(item =>
                <Item
                    key={item.id}
                    item={item}
                    onAdd={onAdd}
                />
            ) }
        </>
    );
}

export default ItemList;