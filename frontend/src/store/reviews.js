import { csrfFetch } from "./csrf";

// types
const GET_REVIEWS = 'daycares/daycareId/getReviews'
const GET_ALL_REVIEWS = 'daycares/getAllReviews'
const CREATE_REVIEW = 'daycares/daycareId/createReview'
const DELETE_REVIEW = 'daycares/daycareId/deleteReview'


// action creators
const actionGetReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

const actionGetAllReviews = (reviews) => {
    return {
        type: GET_ALL_REVIEWS,
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

export const thunkGetAllReviews = () => async dispatch => {
    const response = await csrfFetch('/api/reviews');

    if (response.ok) {
        const allReviews = await response.json();
        dispatch(actionGetAllReviews(allReviews));
        return allReviews
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
        case GET_ALL_REVIEWS:
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
