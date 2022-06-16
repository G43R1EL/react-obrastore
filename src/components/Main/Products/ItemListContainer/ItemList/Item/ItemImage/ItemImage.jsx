import { Link } from 'react-router-dom';
import placeholder from '../../../../../../../assets/No-Image-Placeholder.svg';
import './ItemImage.css';

function ItemImage ({thumb, id}) {
    return (
        <>
            <Link to={'/products/' + id}>
            {
                thumb
                    ? <img src={thumb} alt='Imagen del producto' className='productCard__image' />
                    : <img src={placeholder} alt='Imagen del producto' className='productCard__image' />
            }
            </Link>
        </>
    )
}

export default ItemImage;