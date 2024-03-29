import { csrfFetch } from './csrf';

// types
const GET_DAYCARES = 'daycares/getDaycares'
const GET_DAYCARE = 'daycares/getDaycare'
const CREATE_DAYCARE = 'daycares/createDaycare'
const EDIT_DAYCARE = 'daycares/editDaycare'
const DELETE_DAYCARE = 'daycares/deleteDaycare'
const GET_SEARCHED_DAYCARES = 'daycares/getSearchedDaycares'

// action creators
const actionGetDaycares = (daycares) => {
    return {
        type: GET_DAYCARES,
        daycares
    };
};

const actionGetDaycare = (daycare) => {
    return {
        type: GET_DAYCARE,
        daycare
    }
}

const actionCreateDaycare = (daycare) => {
    return {
        type: CREATE_DAYCARE,
        daycare
    }
}

const actionEditDaycare = (daycare) => {
    return {
        type: EDIT_DAYCARE,
        daycare
    }
}

const actionDeleteDaycare = (daycareId) => {
    return {
        type: DELETE_DAYCARE,
        daycareId
    }
}

const actionGetSearchedDaycares = (daycares) => {
    return {
        type: GET_SEARCHED_DAYCARES,
        daycares
    }
}

// thunks
export const thunkGetDaycares = () => async dispatch => {
    const response = await csrfFetch(`/api/daycares`);

    if (response.ok) {
        const daycareData = await response.json();
        dispatch(actionGetDaycares(daycareData));
        return daycareData
    }
};

export const thunkGetSearchedDaycares = (searchword) => async dispatch => {
    const response = await csrfFetch(`/api/daycares/search/${searchword}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(actionGetSearchedDaycares(data));
        return data;
    }
}

export const thunkGetDaycare = (id) => async dispatch => {
    const response = await csrfFetch(`/api/daycares/${id}`);

    if (response.ok) {
        const oneDaycare = await response.json();
        dispatch(actionGetDaycare(oneDaycare));
        return oneDaycare;
    }
}

export const thunkCreateDaycare = (daycare) => async dispatch => {
    const response = await csrfFetch('/api/daycares', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(daycare)
    })

    if (response.ok) {
        const newDaycare = await response.json();
        dispatch(actionCreateDaycare(newDaycare));
        return newDaycare
    }
}

export const thunkEditDaycare = (daycare) => async dispatch => {
    const response = await csrfFetch(`/api/daycares/${daycare.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(daycare)
    })

    if (response.ok) {
        const editedDaycare = await response.json();
        dispatch(actionEditDaycare(editedDaycare));
        return editedDaycare
    }
}

export const thunkDeleteDaycare = (id) => async dispatch => {
    const response = await csrfFetch(`/api/daycares/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const deletedDaycare = await response.json();
        dispatch(actionDeleteDaycare(id));
        return deletedDaycare
    }
}

const daycareReducer = (state = {}, action) => {

    let newState = {...state}

    switch (action.type) {
        case GET_DAYCARES:
            action.daycares.forEach(daycare => {
                newState[daycare.id] = daycare
            })
            return newState
        case GET_SEARCHED_DAYCARES:
            newState = {};
            action.daycares.forEach(daycare => {
                newState[daycare.id] = daycare
            });
            return newState
        case CREATE_DAYCARE:
            newState[action.daycare.id] = action.daycare
            return newState
        case GET_DAYCARE:
            let doggyDaycareDetails = {}
            doggyDaycareDetails[action.daycare.id] = action.daycare
            return doggyDaycareDetails
        case EDIT_DAYCARE:
            newState[action.daycare.id] = action.daycare
            return newState
        case DELETE_DAYCARE:
            delete newState[action.daycareId]
            return newState
        default:
            return state
    }
}

export default daycareReducer;
