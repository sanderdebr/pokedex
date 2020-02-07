import actionTypes from '../constants/action-types';

const initialState = {
    description: 'berend'
};

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_DESCRIPTION:
            return {...state, description: 'balzak'}
        default:
            return state;
    }
};