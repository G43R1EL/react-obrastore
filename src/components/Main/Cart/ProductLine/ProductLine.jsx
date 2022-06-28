import './ProductLine.css'
import RemoveItemBtn from './RemoveItemBtn/RemoveItemBtn'

export default function ProductLine ({product}) {
    const {id, title, count, price, thumb} = product
    return (
        <div className='cart__product'>
            <div className="cart__productThumb">
                <img src={thumb} alt={title} />
            </div>
            <div className="cart__productDetail">
                <h3>{title}</h3>
                <p><b>Cantidad: </b><span>{count}</span></p>
                <p><b>Precio: </b><span>{price}</span></p>
            </div>
            <div className='cart__actions'>
                <RemoveItemBtn id={id} />
            </div>
        </div>
    )
}