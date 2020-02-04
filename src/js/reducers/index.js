import * as actions from '../constants/action-types';

const initialState = {
    pokemons: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
    case actions.ADD_POKEMON:
        return Object.assign({}, state, {
            pokemons: state.pokemons.concat(action.payload)
        });
    case actions.DATA_LOADED:
        return Object.assign({}, state, {
            pokemons: action.payload
        });
    default:
        return state
    };
}

export default rootReducer;