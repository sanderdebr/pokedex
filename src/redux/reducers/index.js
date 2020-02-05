import actionTypes from '../constants/action-types';

const initialState = {
    pokemons: [],
    loading: false,
    timer: null,
    error: null
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.ADD_POKEMON:
            return {...state, pokemons: state.pokemons.concat(action.payload)};
        case actionTypes.DATA_REQUESTED:
            return {...state, loading: true};
        case actionTypes.DATA_LOADED:
            console.log('DATA LOADED', action.payload);
            return {...state, 
                    pokemons: action.payload.pokemons,
                    timer: action.payload.timer,
                    loading: false};
        case actionTypes.API_ERROR:
            alert('API ERROR');
            return {...state, error: action.payload, loading: false}
        case actionTypes.RESET_DATA:
            return initialState;
        default:
            return state;
    };
};

export default rootReducer;