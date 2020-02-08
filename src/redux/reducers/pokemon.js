import actionTypes from '../constants/action-types';

const initialState = {
    description: '',
    showMoves: false,
    loadingMove: false,
    currentMove: ''
};

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHED_DESCRIPTION:
            return {...state, description: action.payload}
        case actionTypes.LOAD_MOVES:    
            return {...state, showMoves: action.payload}
        case actionTypes.MOVE_REQUEST:
            return {...state, loadingMove: true}
        case actionTypes.MOVE_LOADED:
            return {...state, loadingMove: false, currentMove: action.payload}
        default:
            return state;
    }
};