import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../../../helpers/getFetch';
import Loading from '../../../Common/Loading/Loading';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import ItemImages from './ItemImages/ItemImages';

function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(true);

    const {productId} = useParams();

    useEffect(()=>{
        getItem(productId)
            .then((res)=>{
                setItem(res);
                setPictures(res.pictures)
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                setLoading(false)
            });
    }, [productId]);

    return (
        <>
            { loading ?
                <Loading />
            :
                <div className='ItemDetail__container'>
                    <ItemImages pictures={pictures} />
                    <ItemDetail item={item} />
                </div>
            }
        </>
    );
}

export default ItemDetailContainer;