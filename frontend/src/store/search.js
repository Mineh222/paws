import { csrfFetch } from './csrf';

const SEARCH_ALL_DAYCARES = 'search/searchAllDaycares';

export const actionSearchAllDaycares = (daycares) => {
    return {
        type: SEARCH_ALL_DAYCARES,
        daycares
    }
}

export const thunkSearchAllDaycares = () => async (dispatch) => {
    const response = await csrfFetch(`/api/daycares`);

    if (response.ok) {
        const daycareData = await response.json();
        dispatch(actionSearchAllDaycares(daycareData));
        return daycareData
    }
}

const searchReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
        case SEARCH_ALL_DAYCARES:
            newState = {};
            action.daycares.forEach(daycare => {
                newState[daycare.id] = daycare
            })
            return newState;

        default:
            return state;
    }
}

export default searchReducer;
