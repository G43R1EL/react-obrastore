import placeholder from '../../../../../../../assets/No-Image-Placeholder.svg';
import './ItemImage.css';

function ItemImage ({thumb}) {
    return (
        <>
            {
                thumb
                    ? <img src={thumb} alt='Imagen del producto' className='productCard__image' />
                    : <img src={placeholder} alt='Imagen del producto' className='productCard__image' />
            }
        </>
    )
}

export default ItemImage;