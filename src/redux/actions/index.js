import constants from '../constants/action-types';

export function fetchAll() {
    return {
        type: constants.DATA_REQUESTED
    }
};

export function resetData() {
    return {
        type: constants.RESET_DATA
    }
};

export function setFilter(filter) {
    return {
        type: constants.SET_FILTER,
        payload: filter
    }
};

export function setPokemon(pokemonId) {
    return {
        type: constants.SET_POKEMON,
        payload: pokemonId
    }
}