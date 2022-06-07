import Container from '../Common/Container/Container';
import './Main.css';
import ItemListContainer from './Products/ItemListContainer/ItemListContainer';

function Main () {
    return (
        <>
        <main>
            <Container content={<ItemListContainer />} />
        </main>
        </>
    );
}

export default Main;