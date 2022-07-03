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
            <main className='daycare-details-container'>
                <h2 className="daycare-title">{daycare.name}</h2>
                <div key={daycare.id} className='daycare-container'>
                    <img className="daycare-image" alt='daycare' src={daycare.image}></img>
                    <h3>About Us</h3>
                        <p className="daycare-description">{daycare.description}</p>
                    <p className="daycare-address">Address: {daycare.address}</p>
                    <p className='daycare-phoneNumber'>Contact Us: {daycare.phoneNumber}</p>
                    <p className='daycare-businessHouse'>Hours Of Operation: {daycare.businessHours}</p>
                    <Reviews />
                </div>
            </main>
        )
    }

    return (
        <main className='daycare-details-container'>
            <h2 className="daycare-title">{daycare.name}</h2>
            <div key={daycare.id} className='daycare-container'>
                <img className="daycare-image" alt='daycare' src={daycare.image}></img>
                <h3>About Us</h3>
                    <p className="daycare-description">{daycare.description}</p>
                <p className="daycare-address">Address: {daycare.address}</p>
                <p className='daycare-phoneNumber'>Contact Us: {daycare.phoneNumber}</p>
                <p className='daycare-businessHouse'>Hours Of Operation: {daycare.businessHours}</p>
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
        </main>
    )
}
