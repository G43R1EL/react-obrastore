import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../Common/Loading/Loading';
import ItemFilterContainer from './ItemFilterContainer/ItemFilterContainer';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer () {
    const [itemsList, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const queryCollection = collection(db, 'products');
        if (category) {
            getDocs(query(queryCollection,where('category','==',category)))
                .then((res)=>{
                    setItems(res.docs.map((item)=>({id:item.id,...item.data()})));
                })
                .catch((err)=>{
                    console.log(err);
                })
                .finally(()=>{
                    setLoading(false);
                });
        } else {
            getDocs(queryCollection)
                .then((res)=>{
                    setItems(res.docs.map((item)=>({id:item.id,...item.data()})));
                })
                .catch((err)=>{
                    console.log(err);
                })
                .finally(()=>{
                    setLoading(false);
                })
        }
    }, [category]);

    return (
        <>
            { loading ?
                <Loading />
            :
                <div className="itemList__container">
                    <ItemFilterContainer />
                    <ItemList items={itemsList}/>
                </div>
            }
        </>
    );
}

export default ItemListContainer;