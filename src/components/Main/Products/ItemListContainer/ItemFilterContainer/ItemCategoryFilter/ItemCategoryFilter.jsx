import { useNavigate } from 'react-router-dom';
import './ItemCategoryFilter.css';

function ItemCategoryFilter () {
    const navigate = useNavigate();
    const categoryHndlr = (e)=>{
        navigate(e.target.value);
    }

    return (
        <>
            <div id="ItemFilter__category">
                <label htmlFor="category">Categoría:</label>
                <select name="category" id="category" onChange={categoryHndlr}>
                    <option value="/products">Todas</option>
                    <option value="/products/category/acondicionadores">Acondicionadores</option>
                    <option value="/products/category/calefactores">Calefactores</option>
                    <option value="/products/category/balanceados">Balanceados</option>
                </select>
            </div>
        </>
    )
}

export default ItemCategoryFilter;