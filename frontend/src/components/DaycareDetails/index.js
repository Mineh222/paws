import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycare, thunkDeleteDaycare } from '../../store/daycares';
import EditDaycareFormModal from '../EditDaycareFormModal';
import ReviewFormModal from '../ReviewFormModal';
import Reviews from '../Reviews';
import { useParams, useHistory } from 'react-router-dom';
import './DaycareDetails.css';

export default function DaycareDetails(){
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const daycare = useSelector(state => state.allDaycares[id]);

    useEffect(() => {
        dispatch(thunkGetDaycare(id))
    }, [dispatch, id]);

    const onDeleteDaycare = () => {
        dispatch(thunkDeleteDaycare(id))
        history.push(`/profile/${sessionUser.id}`)
    }

    if (!daycare) return null

    if (!sessionUser) {
        return (
            <div key={daycare.id} className='daycare-container'>
                <h2 className="daycare-title">{daycare.name}</h2>
                <img className="daycare-image" alt='daycare' src={daycare.image}></img>
                <p className="daycare-description"> {daycare.description}</p>
                <p className="daycare-address">{daycare.address}</p>
                <p className='daycare-phoneNumber'>{daycare.phoneNumber}</p>
                <p className='daycare-businessHouse'>{daycare.businessHours}</p>
                <Reviews />
            </div>
        )
    }

    return (
        <>
             <div key={daycare.id} className='daycare-container'>
                 <h2 className="daycare-title">{daycare.name}</h2>
                 <img className="daycare-image" alt='daycare' src={daycare.image}></img>
                 <p className="daycare-description"> {daycare.description}</p>
                 <p className="daycare-address">{daycare.address}</p>
                 <p className='daycare-phoneNumber'>{daycare.phoneNumber}</p>
                 <p className='daycare-businessHouse'>{daycare.businessHours}</p>
             </div>
            {sessionUser.id === daycare.ownerId && (
                <>
                    <button className="delete-daycare-button" onClick={onDeleteDaycare}>
                        Delete your daycare from Paws
                    </button>
                    <EditDaycareFormModal />
                </>
            )}
            {sessionUser && (
                <ReviewFormModal />
                )}
            <Reviews />
        </>
    )
}
