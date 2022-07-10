import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../context/CartContext/CartContext';
import './Checkout.css';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function Checkout({cart}) {
    const [buyer, setBuyer] = useState({name:'', phone:'', email:'', vemail:''});
    const [formCheck, setFormCheck] = useState(true);
    const {clear} = useContext(CartContext);

    useEffect(() => {
        if(buyer.name === '' || buyer.phone === '' || buyer.email === '' || buyer.vemail === '' || buyer.vemail !== buyer.email) {
            setFormCheck(true);
        } else {
            setFormCheck(false);
        }
    },[buyer]);

    

    function changeHndlr(event) {
        const {name, value} = event.target;
        let pattern = "";
        switch (name) {
            case 'name':
                // allowed characters: a-z, A-Z, space, empty string
                pattern = /^[a-zA-Z\s]*$/;
                if (pattern.test(value)) {
                    setBuyer({...buyer, name: value});
                }
                break;
            case 'phone':
                pattern = /^[+]*[(0-9)]*[0-9-\s]*$/;
                if (pattern.test(value)) {
                    setBuyer({...buyer, phone: value});
                }
                break;
            case 'email':
                pattern = /^[a-z0-9@._-\s]*$/;
                if (pattern.test(value)) {
                    setBuyer({...buyer, email: value});
                }
                break;
            case 'vemail':
                pattern = /^[a-z0-9@._-\s]*$/;
                if (pattern.test(value)) {
                    setBuyer({...buyer, vemail:value});
                }
                break;
            default:
                break;
        }
    }

    function createOrder() {
        const db = getFirestore();
        const oderCollection = collection(db, 'orders');
        const items = cart.map((item)=>({id:item.id, title:item.title, price:item.price, count:item.count, total:item.count*item.price}));
        delete buyer.vemail;
        const order = {
            buyer: buyer,
            items: items,
            date: new Date(),
            total: items.reduce((acc, item)=>acc+item.total, 0)
        };
        addDoc(oderCollection, order )
            .then((res)=>{
                Swal.fire({
                    title: 'Gracias por tu compra',
                    text: `Tu orden ha sido registrada con el id:\n${res.id}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                clear();
            })
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
                    <label htmlFor='vemail'>Verificar email</label>
                    <input type="email" value={buyer.vemail} onChange={changeHndlr} name='vemail' id='vemail' />
                    <button onClick={createOrder} disabled={formCheck}>Enviar pedido</button>
                    {formCheck && <p className='cart__checkoutFormError'>*Todos los campos son obligatorios.</p>}
                </div>
            </div>
        </>
    );
}

export default Checkout;