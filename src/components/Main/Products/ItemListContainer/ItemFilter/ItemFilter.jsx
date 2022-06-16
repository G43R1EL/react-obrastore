import { NavLink } from 'react-router-dom';
import './ItemFilter.css';

function ItemFilter () {
    return (
        <>
            <div className='ItemList__filters'>
                <span>Categoría: </span>
                <ul>
                    <li><NavLink to='/products'>Todas</NavLink></li>
                    <li><NavLink to='/products/category/acondicionadores' className={({isActive})=>isActive?'category__active':undefined}>Aires</NavLink></li>
                    <li><NavLink to='/products/category/calefactores' className={({isActive})=>isActive?'category__active':undefined}>Calefactores</NavLink></li>
                    <li><NavLink to='/products/category/balanceados' className={({isActive})=>isActive?'category__active':undefined}>Balanceados</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default ItemFilter;