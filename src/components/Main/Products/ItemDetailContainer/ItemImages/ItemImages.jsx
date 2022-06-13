import placeholder from '../../../../../assets/No-Image-Placeholder.svg';
import './ItemImages.css';

function ItemImages ({pictures}) {
    return (
        <>
            <div className='ItemDetail__images'>
                { pictures[0] ?
                    <img src={pictures[0]} alt="Foto producto" className="ItemDetail__image" />
                :
                    <img src={placeholder} alt="No hay imagen" />
                }
            </div>
        </>
    );
}

export default ItemImages;