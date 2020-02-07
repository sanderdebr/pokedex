import actionTypes from '../constants/action-types';

const initialState = {
    description: ''
};

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHED_DESCRIPTION:
            return {...state, description: action.payload}
        default:
            return state;
    }
};