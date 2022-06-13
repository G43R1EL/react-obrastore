import Container from '../Common/Container/Container';
import './Main.css';
import ItemDetailContainer from './Products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Products/ItemListContainer/ItemListContainer';

function Main () {
    return (
        <>
        <main>
            <Container content={<ItemListContainer />} />
            <Container content={<ItemDetailContainer />} />
        </main>
        </>
    );
}

export default Main;