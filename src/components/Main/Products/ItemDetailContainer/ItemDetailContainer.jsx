import { useEffect, useState } from 'react';
import { getItem } from '../../../../helpers/getFetch';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import ItemImages from './ItemImages/ItemImages';

function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getItem('10001')
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
    }, []);

    return (
        <>
            { loading ?
                <h1>Cargando item...</h1>
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