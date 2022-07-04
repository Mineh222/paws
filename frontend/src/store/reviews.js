import { csrfFetch } from "./csrf";

// types
const GET_REVIEWS = 'daycares/daycareId/getReviews'
const CREATE_REVIEW = 'daycares/daycareId/createReview'
const DELETE_REVIEW = 'daycares/daycareId/deleteReview'


// action creators
const actionGetReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

const actionCreateReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

const actionDeleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

// thunks
export const thunkGetReviews = (id) => async dispatch => {
    const response = await csrfFetch(`/api/daycares/${id}/reviews`);

    if (response.ok) {
        const reviewsData = await response.json();
        dispatch(actionGetReviews(reviewsData));
        return reviewsData
    }
}

export const thunkCreateReview = (daycareId, review) => async dispatch => {
    const response = await csrfFetch(`/api/daycares/${daycareId}/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review),
    });

    if (response.ok) {
        const newReview = await response.json();
        dispatch(actionCreateReview(newReview));
        return newReview
    }

}

export const thunkDeleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    })

    if(response.ok) {
        const deletedReview = await response.json();
        dispatch(actionDeleteReview(id));
        return deletedReview
    }
}

const reviewReducer = (state = {}, action) => {

    let newState = {...state}

    switch (action.type) {
        case GET_REVIEWS:
            newState = {}
            action.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState
        case CREATE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case DELETE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default reviewReducer;
