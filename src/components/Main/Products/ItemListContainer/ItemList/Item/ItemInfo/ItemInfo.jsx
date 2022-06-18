import { Link } from 'react-router-dom';
import './ItemInfo.css';

function ItemInfo ({title, category, description, price, id}) {
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })
    
    return (
        <>
            
            <Link to={`/products/${id}`}><h3 className='productCard__title'>{title}</h3></Link>
            <p className='productCard__category'>Categoría: {category}</p>
            <p className='productCard__description'>{description}</p>
            <p className='productCard__price'>{pesoArg.format(price)+'-'}</p>
        </>
    )
}

export default ItemInfo;