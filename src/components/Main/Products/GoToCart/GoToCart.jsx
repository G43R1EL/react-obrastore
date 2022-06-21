import './GoToCart.css';
import { Link } from "react-router-dom";

function GoToCart () {
    return (
        <>
            <Link to={'/cart'} className="gotocart__button">Finalizar la compra</Link>
        </>
    )
}

export default GoToCart;