import ItemCategoryFilter from './ItemCategoryFilter/ItemCategoryFilter';
import './ItemFilterContainer.css';

function ItemFilterContainer () {
    return (
        <>
            <div className='ItemList__filters'>
                <ItemCategoryFilter />
            </div>
        </>
    );
}

export default ItemFilterContainer;