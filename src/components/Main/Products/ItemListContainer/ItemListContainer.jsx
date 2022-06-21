import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory, getFetch } from '../../../../helpers/getFetch';
import Loading from '../../../Common/Loading/Loading';
import ItemFilterContainer from './ItemFilterContainer/ItemFilterContainer';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer () {
    const [itemsList, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    useEffect(()=>{
        if (category) {
            getCategory(category)
                .then((res)=>{
                    setItems(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
                .finally(()=>{
                    setLoading(false);
                });
        } else {
            getFetch()
                .then((res)=>{
                    setItems(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
                .finally(()=>{
                    setLoading(false);
                });
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