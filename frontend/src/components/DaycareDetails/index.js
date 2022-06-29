import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycare } from '../../store/daycares';
import EditDaycareFormModal from '../EditDaycareFormModal';
import { useParams } from 'react-router-dom';

export default function DaycareDetails(){
    const dispatch = useDispatch();
    const { id } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const daycare = useSelector(state => state.allDaycares[id]);
    
    useEffect(() => {
        dispatch(thunkGetDaycare(id))
    }, [dispatch]);

    return (
        <main>
            {sessionUser.id === daycare?.ownerId &&
                <EditDaycareFormModal />
            }
            <div key={daycare?.id} className='daycare-container'>
                <h2 className="daycare-title">{daycare?.name}</h2>
                <img className="daycare-image" alt='daycare' src={daycare?.image}></img>
                <p className="daycare-description"> {daycare?.description}</p>
                <p className="daycare-address">{daycare?.address}</p>
                <p className='daycare-phoneNumber'>{daycare?.phoneNumber}</p>
                <p className='daycare-businessHouse'>{daycare?.businessHours}</p>
            </div>
        </main>
    )
}