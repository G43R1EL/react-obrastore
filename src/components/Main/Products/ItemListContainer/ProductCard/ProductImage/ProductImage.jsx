import placeholder from '../../../../../../assets/No-Image-Placeholder.svg';
import './ProductImage.css';

function ProductImage ({image}) {
    return (
        <>
            {
                image
                    ? <img src={image} alt='Product image' className='productCard__image' />
                    : <img src={placeholder} alt='Product image' className='productCard__image' />
            }
        </>
    )
}

export default ProductImage;