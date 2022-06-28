import { csrfFetch } from './csrf';

// types
const GET_DAYCARES = 'daycares/getDaycares'
const CREATE_DAYCARE = 'daycares/createDaycare'

// actions creators
const actionGetDaycares = (daycares) => {
    return {
        type: GET_DAYCARES,
        daycares
    };
};

const actionCreateDaycare = (daycare) => {
    return {
        type: CREATE_DAYCARE,
        daycare
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

export const thunkCreateDaycare = (daycare) => async dispatch => {
    const response = await csrfFetch('/api/daycares/test', {
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

const daycareReducer = (state = {}, action) => {

    let newState = {...state}

    switch (action.type) {
        case GET_DAYCARES:
            action.daycares.forEach(daycare => {
                newState[daycare.id] = daycare
            })
            return newState
        case CREATE_DAYCARE:
            newState[action.daycare.id] = action.daycare
            return newState
        default:
            return state
    }
}

export default daycareReducer;
