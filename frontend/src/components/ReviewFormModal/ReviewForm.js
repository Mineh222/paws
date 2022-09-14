import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkCreateReview } from "../../store/reviews";
import './ReviewForm.css';
import { FaStar } from 'react-icons/fa';

const CreateReviewForm = ({setTrigger}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const { id } = useParams();

    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        const errors = [];
        let testRegex = /^https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|png)$/;
        let imageReg = image;
        if (!testRegex.test(imageReg)) {
        errors.push('Please provide a valid jpg or png image url')}
        if (review.length < 5) errors.push("Your review must be a minimum of 5 characters.")

        setValidationErrors(errors)
    }, [image, review])

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert('Cannot submit, please fix form errors.')

        const payload = {
            userId: sessionUser.id,
            daycareId: id,
            rating,
            review,
            image
        };

        const createdReview = await dispatch(thunkCreateReview(id, payload));

        if (createdReview) {
            reset()
        }
    }

    const reset = () => {
        setRating(1);
        setReview('');
        setImage('');
        setTrigger(false);
    }

    const NUMBERS = [1,2,3,4,5]

    return (
        <section className={hasSubmitted && validationErrors.length > 0 ? "review-form-container-errors" : "review-form-container"}>
            <form className="create-review-form" onSubmit={handleSubmit}>
                <h2 className="review-form-header">Let us know what you think of our doggy day care!</h2>
                {hasSubmitted && validationErrors.length > 0 && (
                    <div className="review-errors">
                        <div className="pls-fix-review-errors">Please fix the following errors before submitting:</div>
                        <ul className="errors">
                          {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                    </div>
                )}
                <label className="review-rating-label">Select a rating</label>
                <div className="star-rating-container">
                    <div id="review-stars">
                        {[...Array(5)].map((star, index) => {
                            const ratingVal = index + 1;

                            return (
                                <label key={index}>
                                    <input
                                        className="stars"
                                        type="radio"
                                        id="radioBttn"
                                        name="rating"
                                        value={ratingVal}
                                        onClick={() => setRating(ratingVal)}
                                    />
                                    <FaStar
                                        className="star"
                                        color={ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        size={20}
                                        onMouseEnter={() => setHover(ratingVal)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            )
                        })}
                    </div>

                </div>
                {/* <label className="select-label">
                    Select a rating
                    <select
                        className="select-rating"
                        required
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                    >
                        {NUMBERS.map(number => (
                                <option
                                    key={number}
                                    value={number}
                                >
                                    {number}
                                </option>
                        ))}
                    </select>
                </label> */}
                <label className="review-label">
                    Write your thoughts here!
                </label>
                    <textarea
                        required
                        value={review}
                        onChange={e => setReview(e.target.value)}>
                    </textarea>
                <label className="image-label">
                    Upload an image URL
                </label>
                    <input
                        className="review-input"
                        type="text"
                        required
                        value={image}
                        onChange={e => setImage(e.target.value)} />
                <button
                    className="post-review-button"
                    type="submit"
                >
                    Post your review!
                </button>
            </form>
        </section>
    )
}

export default CreateReviewForm;
