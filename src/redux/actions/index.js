import constants from '../constants/action-types';

export function fetchAll() {
    return {
        type: constants.DATA_REQUESTED
    }
};

export function addPokemon(pokemon) {
    return {
        type: constants.ADD_POKEMON,
        payload: pokemon
    }
};

export function resetData() {
    return {
        type: constants.RESET_DATA
    }
};