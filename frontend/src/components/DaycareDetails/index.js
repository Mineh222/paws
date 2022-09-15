import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycare, thunkDeleteDaycare } from '../../store/daycares';
import EditDaycareFormModal from '../EditDaycareFormModal';
import ReviewFormModal from '../ReviewFormModal';
import Reviews from '../Reviews';
import { useParams, useHistory } from 'react-router-dom';
import './DaycareDetails.css';
import SaveButton from '../SaveButton';
import { FaStar } from 'react-icons/fa';

export default function DaycareDetails(){
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const daycare = useSelector(state => state.allDaycares[id]);
    const reviews = useSelector(state => Object.values(state.reviews));

    useEffect(() => {
        dispatch(thunkGetDaycare(id))
    }, [dispatch, id]);

    const onDeleteDaycare = () => {
        dispatch(thunkDeleteDaycare(id))
        history.push(`/daycares`)
    }

    if (!daycare) return null

    const rating = () => {
        const ratings = reviews.map(review => review.rating)
        if(ratings.length === 0) {
          return null
        }
        let avgRating = 0
        ratings.forEach(rating => avgRating += rating)
        const average = avgRating /= ratings.length
        return (
            <div className="average-stars">
                {/* <p className="avg-rating" style={{color: '#ffc107'}}> {average.toFixed(1)}</p> */}
                {Math.round(average) === 0 && (
                    <>
                        <FaStar FaStar color="#e4e5e9" size={30}/>
                    </>
                )}
                {Math.round(average) === 1 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={30}/>
                    </>
                )}
                {Math.round(average) === 2 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                    </>
                )}
                {Math.round(average) === 3 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                    </>
                )}
                {Math.round(average) === 4 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                    </>
                )}
                {Math.round(average) === 5 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                        <FaStar FaStar color="#ffc107" size={30}/>
                    </>
                )}
            </div>
          )
    }

    if (!sessionUser) {
        return (
            <main className='daycare-details-container'>
                <div className='image-container'>
                    <img className="daycare-image" alt='daycare' width="100%" height="426" src={daycare.image}></img>
                </div>
                <div className='daycare-content-container'>
                    <div className="top-content">
                        <div className="title-container">
                            <h1 className="daycare-title">{daycare.name}</h1>
                        </div>
                        <div className="top-content-inner">
                            <div>{rating()}</div>
                            <div id="reviews-length">{reviews.length} Reviews</div>
                        </div>
                        <p className='daycare-businessHouse'>{daycare.businessHours}</p>
                    </div>
                    <div className="location-hours">
                        <h3>Location & Hours</h3>
                        <p className="daycare-address-details">Address: {daycare.address}</p>
                        <p className='daycare-businessHours'>Hours Of Operation: {daycare.businessHours}</p>
                    </div>
                    <div className="business-about">
                        <h3 className='about-us-header'>About the Business</h3>
                        <p className="daycare-description">{daycare.description}</p>
                        <p className='daycare-phoneNumber'>Contact Us: &#40;{daycare.phoneNumber.slice(0,3)}&#41; {daycare.phoneNumber.slice(3,6)} - {daycare.phoneNumber.slice(6,10)}</p>
                    </div>
                </div>
                <Reviews />
            </main>
        )
    }

    return (
        <main className='daycare-details-container'>
                <div className='image-container'>
                    <img className="daycare-image" alt='daycare' width="100%" height="426" src={daycare.image}></img>
                </div>
                <div className='daycare-content-container'>
                    <div className="top-content">
                        <div className="title-container">
                            <h1 className="daycare-title">{daycare.name}</h1>
                        </div>
                        <div className="top-content-inner">
                            <div>{rating()}</div>
                            <div id="reviews-length">{reviews.length} Reviews</div>
                        </div>
                        <p className='daycare-businessHouse'>{daycare.businessHours}</p>
                    </div>
            <div className="logged-in-daycare-buttons">
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
            </div>
                    <div className="location-hours">
                        <h3>Location & Hours</h3>
                        <p className="daycare-address-details">Address: {daycare.address}</p>
                        <p className='daycare-businessHours'>Hours Of Operation: {daycare.businessHours}</p>
                    </div>
                    <div className="business-about">
                        <h3 className='about-us-header'>About the Business</h3>
                        <p className="daycare-description">{daycare.description}</p>
                        <p className='daycare-phoneNumber'>Contact Us: &#40;{daycare.phoneNumber.slice(0,3)}&#41; {daycare.phoneNumber.slice(3,6)} - {daycare.phoneNumber.slice(6,10)}</p>
                    </div>
                </div>
            <Reviews />
        </main>
    )
}
