import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../Common/Loading/Loading';
import NotFound from '../../../Common/NotFound/NotFound';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import ItemImages from './ItemImages/ItemImages';

function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    const [doesntExist, setDoesntExist] = useState(true);
    const [pictures, setPictures] = useState([]);
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        getDoc(doc(db, 'products', productId))
            .then((res)=>{
                if (res.data()) {
                    setDoesntExist(false);
                    setItem({id:res.id,...res.data()});
                    setPictures(res.data().pictures)
                } else {
                    setDoesntExist(true);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                setLoading(false);
            })
    }, [productId]);

    return (
        <>
            { loading ?
                <Loading />
            :
                <>
                    { doesntExist ?
                        <NotFound />
                    :
                        <>
                            <div className='ItemDetail__container'>
                                <ItemImages pictures={pictures} />
                                <ItemDetail item={item} />
                            </div>
                        </>
                    }
                </>
            }
        </>
    );
}

export default ItemDetailContainer;