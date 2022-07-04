import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetReviews, thunkDeleteReview } from '../../store/reviews';
import { useParams } from 'react-router-dom';
import './Reviews.css';

export default function Reviews() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const selectorReviews = useSelector(state => state.reviews);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        dispatch(thunkGetReviews(id))
    }, [dispatch, id])

    useEffect(() => {
        if(selectorReviews) {
            setReviews(Object.values(selectorReviews))
        }
    }, [selectorReviews])

    if (!reviews) return null

    return (
        <div className='reviews-container'>
            <h2 className="review-title">Reviews</h2>
            {reviews.map(review => {
                return (
                    <div key={review.id} className="reviews-list">
                        <h3 className='review-user-name'>{review.User.username}</h3>
                        <div className='review-rating'>Rating: {review.rating}/5</div>
                        <div className='review'>{review.review}</div>
                        <img className='review-image' src={review.image}></img>
                        {sessionUser?.id === review.userId && (
                            <button className='delete-review-button'
                                onClick={() => dispatch(thunkDeleteReview(review.id))}
                            >
                                Delete your review
                            </button>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
