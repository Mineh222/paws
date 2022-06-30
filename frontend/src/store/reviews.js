import { csrfFetch } from "./csrf";

// types
const GET_REVIEWS = 'daycares/daycareId/getReviews'


// action creators
const actionGetReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
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

const reviewReducer = (state = {}, action) => {

    let newState = {...state}

    switch (action.type) {
        case GET_REVIEWS:
            action.reviews.forEach(review => {
                newState[review.id] = review
            })
            return newState
        default:
            return state
    }
}

export default reviewReducer;
