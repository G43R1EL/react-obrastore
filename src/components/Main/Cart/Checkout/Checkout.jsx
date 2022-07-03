import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext/CartContext';
import './Checkout.css';

function Checkout({cart}) {
    const [buyer, setBuyer] = useState({name:'', phone:'', email:''});
    const {clear} = useContext(CartContext);

    function changeHndlr(event) {
        const {name, value} = event.target;
        setBuyer({...buyer, [name]:value});
    }

    function createOrder() {
        const db = getFirestore();
        const oderCollection = collection(db, 'orders');
        const items = cart.map((item)=>({id:item.id, title:item.title, price:item.price, count:item.count, total:item.count*item.price}));
        const order = {
            buyer: buyer,
            items: items,
            date: new Date(),
            total: items.reduce((acc, item)=>acc+item.total, 0)
        };
        addDoc(oderCollection, order )
            .then((res)=>{
                alert(`Orden creada: ${res.id}`);
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                clear();
            }
        );
    }

    return (
        <>
            <div className='cart__checkout'>
                <h2>Finalizar la compra</h2>
                <div className='cart__checkoutForm'>
                    <label htmlFor='name'>Nombre</label>
                    <input type="text" value={buyer.name} onChange={changeHndlr} name='name' id='name' />
                    <label htmlFor='phone'>Telefono</label>
                    <input type="phone" value={buyer.phone} onChange={changeHndlr} name='phone' id='phone' />
                    <label htmlFor='email'>Email</label>
                    <input type="email" value={buyer.email} onChange={changeHndlr} name='email' id='email' />
                    <button onClick={createOrder}>Enviar pedido</button>
                </div>
            </div>
        </>
    );
}

export default Checkout;