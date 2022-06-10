import { useEffect, useState } from 'react';
import { getFetch } from '../../../../helpers/getFetch';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer () {
    const [itemsList, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getFetch()
            .then((res)=>{
                setItems(res);
            })
            .catch(err=>{
                console.log(err);
            })
            .finally(()=>{
                setLoading(false);
            });
    }, []);

    return (
        <>
            { loading ?
                <h1>Cargando...</h1>
            :
                <div className="itemList__container">
                    <ItemList items={itemsList}/>
                </div>
            }
        </>
    );
}

export default ItemListContainer;