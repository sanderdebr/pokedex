import actionTypes from '../constants/action-types';

const initialState = {
    description: '',
    showMoves: false
};

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHED_DESCRIPTION:
            return {...state, description: action.payload}
        case actionTypes.LOAD_MOVES:    
            return {...state, showMoves: action.payload}
        default:
            return state;
    }
};