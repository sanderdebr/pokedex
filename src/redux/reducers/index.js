import actionTypes from '../constants/action-types';

const initialState = {
    pokemons: [],
    filter: '',
    loading: false,
    timer: null,
    error: null
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.DATA_REQUESTED:
            return {...state, loading: true};
        case actionTypes.DATA_LOADED:
            return {...state, 
                    pokemons: action.payload.pokemons,
                    timer: action.payload.timer,
                    loading: false};
        case actionTypes.API_ERROR:
            return {...state, error: action.payload, loading: false}
        case actionTypes.RESET_DATA:
            return initialState;
        case actionTypes.SET_FILTER:
            return {...state, filter: action.payload}
        default:
            return state;
    };
};

export default rootReducer;