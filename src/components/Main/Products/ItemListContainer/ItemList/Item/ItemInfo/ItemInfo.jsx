import './ItemInfo.css';

function ItemInfo ({title, description, price}) {
    let pesoArg = Intl.NumberFormat('es-AR', {
        style:'currency',
        currency:'ARS',
    })
    
    return (
        <>
            <h3 className='productCard__title'>{title}</h3>
            <p className='productCard__description'>{description}</p>
            <p className='productCard__price'>{pesoArg.format(price)+'-'}</p>
        </>
    )
}

export default ItemInfo;