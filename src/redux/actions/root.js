import actionTypes from '../constants/action-types';

export function fetchAll() {
    return {
        type: actionTypes.DATA_REQUESTED
    }
};

export function resetData() {
    return {
        type: actionTypes.RESET_DATA
    }
};

export function setFilter(filter) {
    return {
        type: actionTypes.SET_FILTER,
        payload: filter
    }
};

export function setPokemon(pokemonId) {
    return {
        type: actionTypes.SET_POKEMON,
        payload: pokemonId
    }
}