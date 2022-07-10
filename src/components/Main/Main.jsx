import { Routes, Route } from 'react-router-dom';
import Container from '../Common/Container/Container';
import './Main.css';
import Home from './Home/Home';
import About from './About/About';
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Products/ItemListContainer/ItemListContainer';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import NotFound from '../Common/NotFound/NotFound';

function Main () {


    return (
        <>
        <main>
            <Routes>
                <Route index path='/' element={<Container content={<Home />} />} />
                <Route path='/about' element={<Container content={<About />} />} />
                <Route path='/products' element={<Container content={<ItemListContainer />} />} />
                <Route path='/products/category/:category' element={<Container content={<ItemListContainer />} />} />
                <Route path='/products/:productId' element={<Container content={<ItemDetailContainer />} />} />
                <Route path='/services' element={<Container content={<Services />} />} />
                <Route path='/contact' element={<Container content={<Contact />} />} />
                <Route path='/cart' element={<Container content={<Cart />} />} />
                <Route path='*' element={<Container content={<NotFound />} />} />
            </Routes>
        </main>
        </>
    );
}

export default Main;