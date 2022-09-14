import { csrfFetch } from './csrf';

// types
const FAVORITE = 'favorites/favorite';
const UNFAVORITE = 'favorites/unfavorite';
const GET_DAYCARE_FAVORITES = 'favorites/getDaycareFavorites';
const GET_USER_FAVORITES = 'favorites/getUserFavorites';
const GET_ALL_FAVORITES = 'favorites/getAllFavorites';

// action creators
const actionGetAllFavorites = (favorites) => {
    return {
        type: GET_ALL_FAVORITES,
        favorites
    }
}

const actionFavorite = (favorite) => {
    return {
        type: FAVORITE,
        favorite
    }
}

const actionUnfavorite = (favoriteId) => {
    return {
        type: UNFAVORITE,
        favoriteId
    }
}

const actionGetDaycareFavorites = (favorites) => {
    return {
        type: GET_DAYCARE_FAVORITES,
        favorites
    }
}

const actionGetUserFavorites = (favorites) => {
    return {
        type: GET_USER_FAVORITES,
        favorites
    }
}

// thunks
export const thunkGetAllFavorites = () => async dispatch => {
    const response = await csrfFetch('/api/favorites');

    if (response.ok) {
        const favorites = await response.json();
        dispatch(actionGetAllFavorites(favorites));
        return favorites;
    }
}

export const thunkFavorite = (favorite) => async dispatch => {
    const response = await csrfFetch(`/api/favorites`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(favorite)
    })

    if (response.ok) {
        const newFavorite = await response.json();
        dispatch(actionFavorite(newFavorite));
        return newFavorite
    }
}

export const thunkUnfavorite = (favoriteId) => async dispatch => {
    const response = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const deletedFavorite = await response.json();
        dispatch(actionUnfavorite(favoriteId));
        return deletedFavorite
    }
}

export const thunkGetDaycareFavorites = (daycareId) => async (dispatch) => {
    const response = await csrfFetch(`api/favorites/daycares/${daycareId}`);

    if (response.ok) {
        const favorites = await response.json();
        dispatch(actionGetDaycareFavorites(favorites));
        return favorites;
    }
}

export const thunkGetUserFavorites = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/favorites`);

    if (response.ok) {
        const favorites = await response.json();
        dispatch(actionGetUserFavorites(favorites));
        return favorites;
    }
}

const favoriteReducer = (state = {}, action) => {

    let newState = {...state}

    switch (action.type) {
        case GET_ALL_FAVORITES:
            action.favorites.forEach(favorite => {
                newState[favorite.id] = favorite
            })
        case FAVORITE:
            return {
                ...state,
                [action.favorite.id]: action.favorite
            }
        case UNFAVORITE:
            delete newState[action.favoriteId]
            return newState
        case GET_DAYCARE_FAVORITES:
            newState = {};
            action.favorites.forEach(favorite => {
                newState[favorite.id] = favorite;
            })
            return newState;
        case GET_USER_FAVORITES:
            newState = {}
            action.favorites.forEach(favorite => {
                newState[favorite.id] = favorite
            })
            return newState
        default:
            return state
    }
}

export default favoriteReducer;
