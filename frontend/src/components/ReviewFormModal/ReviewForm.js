import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkCreateReview } from "../../store/reviews";

const CreateReviewForm = ({setTrigger}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const { id } = useParams();

    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (rating < 1 || review > 5) errors.push("Please rate us 1-5.");

        setValidationErrors(errors)
    }, [rating])

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        <section className="review-form-container">
            <form className="create-review-form" onSubmit={handleSubmit}>
                <h2>Let us know what you think of our doggy day care!</h2>
                {validationErrors.length > 0 && (
                    <div>
                        Please fix the following errors before submitting:
                        <ul className="errors">
                          {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                    </div>
                )}
                <label>
                    Select a rating
                    <select
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
                </label>
                <label>
                    Write your thoughts here!
                    <textarea
                        value={review}
                        onChange={e => setReview(e.target.value)}>
                    </textarea>
                </label>
                <label>
                    Upload an image URL
                    <input
                        type="text"
                        required
                        value={image}
                        onChange={e => setImage(e.target.value)} />
                </label>
                <button
                    type="submit"
                >
                    Post your review!
                </button>
            </form>
        </section>
    )
}

export default CreateReviewForm;
