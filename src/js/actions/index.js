import * as constant from '../constants/action-types';

export function addPokemon(payload) {
    return { type: constant.ADD_POKEMON, payload }
};

export function getData() {
    return { type: constant.DATA_REQUESTED };
};