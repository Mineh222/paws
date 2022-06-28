import { csrfFetch } from './csrf';

// types
const GET_DAYCARES = 'daycares/getDaycares'

// actions creators
const actionGetDaycares = (daycares) => {
    return {
        type: GET_DAYCARES,
        daycares
    };
};

// thunks
export const thunkGetDaycares = () => async dispatch => {
    const response = await csrfFetch(`/api/daycares`);

    if (response.ok) {
        const daycareData = await response.json();
        dispatch(actionGetDaycares(daycareData));
        return daycareData
    }
};

const daycareReducer = (state = {}, action) => {

    let newState = {...state}

    switch (action.type) {
        case GET_DAYCARES:
            action.daycares.forEach(daycare => {
                newState[daycare.id] = daycare
            })
            return newState
        default:
            return state
    }
}

export default daycareReducer;
