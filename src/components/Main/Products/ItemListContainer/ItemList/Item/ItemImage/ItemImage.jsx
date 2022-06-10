import placeholder from '../../../../../../../assets/No-Image-Placeholder.svg';
import './ItemImage.css';

function ItemImage ({image}) {
    return (
        <>
            {
                image
                    ? <img src={image} alt='Imagen del producto' className='productCard__image' />
                    : <img src={placeholder} alt='Imagen del producto' className='productCard__image' />
            }
        </>
    )
}

export default ItemImage;