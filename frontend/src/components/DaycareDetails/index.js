import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycare, thunkDeleteDaycare } from '../../store/daycares';
import EditDaycareFormModal from '../EditDaycareFormModal';
import ReviewFormModal from '../ReviewFormModal';
import Reviews from '../Reviews';
import { useParams, useHistory } from 'react-router-dom';
import './DaycareDetails.css';
import SaveButton from '../SaveButton';

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
        history.push(`/daycares`)
    }

    if (!daycare) return null

    if (!sessionUser) {
        return (
            <main className='daycare-details-container'>
                <div className="title-container">
                    <h2 className="daycare-title">{daycare.name}</h2>
                </div>
                    <div className='image-container'>
                        <img className="daycare-image" alt='daycare' width="1150" height="765" src={daycare.image}></img>
                    </div>
                    <div className='daycare-content-container'>
                        <h3 className='about-us-header'>About Us</h3>
                        <p className="daycare-description">{daycare.description}</p>
                        <p className="daycare-address-details">Address: {daycare.address}</p>
                        <p className='daycare-phoneNumber'>Contact Us: {daycare.phoneNumber}</p>
                        <p className='daycare-businessHouse'>Hours Of Operation: {daycare.businessHours}</p>
                    </div>
                <Reviews />
            </main>
        )
    }

    return (
        <main className='daycare-details-container'>
            <div className="title-container">
                <h2 className="daycare-title">{daycare.name}</h2>
            </div>
                <div className='image-container'>
                    <img className="daycare-image" alt='daycare' width="1150" height="765" src={daycare.image}></img>
                </div>
                <div className='daycare-content-container'>
                    <h3 className='about-us-header'>About Us</h3>
                    <p className="daycare-description">{daycare.description}</p>
                    <p className="daycare-address-details">Address: {daycare.address}</p>
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
            <div>
                {sessionUser && (
                    <div className="review-save-buttons">
                        <ReviewFormModal />
                        <SaveButton daycareId={id} sessionUser={sessionUser} />
                    </div>
                    )}
            </div>
            <Reviews />
        </main>
    )
}
