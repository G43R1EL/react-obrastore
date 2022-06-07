import './ProductInfo.css';

function ProductInfo ({title, description, price}) {
    return (
        <>
            <h3 className='productCard__title'>{title}</h3>
            <p className='productCard__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi numquam qui!</p>
            <p className='productCard__price'>$1.000,00-</p>
        </>
    )
}

export default ProductInfo;