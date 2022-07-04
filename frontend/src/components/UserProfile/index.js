import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';
import { thunkGetAllReviews } from '../../store/reviews';
import './UserProfile.css';

export default function UserProfile(){
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const selectorDaycares = useSelector(state => state.allDaycares)
    const selectorReviews = useSelector(state => state.reviews);

    const [daycare, setDaycare] = useState([]);
    const [reviews, setReviews] = useState([]);

    console.log(reviews);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    useEffect(() => {
        dispatch(thunkGetAllReviews(sessionUser.id))
    }, [dispatch, sessionUser.id])

    useEffect(() => {
        if(selectorDaycares) {
            setDaycare(Object.values(selectorDaycares).filter((daycare) => {
                return +daycare.ownerId === +sessionUser.id
            }))
        }
    }, [selectorDaycares])

    useEffect(() => {
        if(selectorReviews) {
            setReviews(Object.values(selectorReviews).filter((review) => {
                return +review.userId === +sessionUser.id
            }))
        }
    }, [selectorReviews])

    if (!daycare || !reviews) return null

    return (
        <main className='user-profile-container'>
            <div className='username-profile-page'>
                <h2>Account Information:</h2>
                <p>Username: {sessionUser.username}</p>
                <p>Email Address: {sessionUser.email}</p>
                <h3 className="message-text">Thank you for joining the Paws family!</h3>
                <img className="message-image"src="https://perthisok.com/wp-content/uploads/2021/11/perth-doggy-daycare-pawpals-2.jpeg"></img>
            </div>
            <div className="add-daycare-user-page">
                <DaycareFormModal />
            </div>
                <h2 className='user-page-header'>My Doggy Daycares:</h2>
                <div className="all-daycares-user-page">
                {daycare.map(daycare => {
                    return (
                            <div key={daycare.id} className='daycares-container-user-page'>
                                <Link className="user-profile-link-to-daycare" to={`/daycares/${daycare.id}`}>
                                    <h2 className='daycare-name-user-page'>{daycare.name}</h2>
                                    <img className="daycare-img-user-page" src={daycare.image}></img>
                                </Link>
                        </div>
                    )
                })}
                </div>
                <h2 className='user-page-header-reviews'>My Reviews:</h2>
                <div className="all-reviews-user=page">
                    {reviews.map(review => {
                        return (
                            <div key={review.id} className="reviews-container-user-page">
                                {daycare.map((daycare) => {
                                    if (daycare.id === review.daycareId) {
                                        return (
                                            <div>
                                                <h3 className="review-daycare-name">{daycare.name}</h3>
                                                <Link className='user-profile-link-review' to={`/daycares/${review.daycareId}`}>Visit {daycare.name}</Link>
                                            </div>
                                        )
                                    }
                                })}
                                <p className="user-review-rating">My Rating: {review.rating}/5</p>
                                <p className='user-review'>{review.review}</p>
                                <img className='user-review-image'src={review.image}></img>
                            </div>
                        )
                    })}
                </div>
        </main>
    )
}
