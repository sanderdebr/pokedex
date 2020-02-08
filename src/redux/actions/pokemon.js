import actionTypes from '../constants/action-types';

export function fetchDescription(id) {
    return async dispatch => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`);
            const json = await response.json();
            const description = json.descriptions[1].description;
            return onSuccess(description);
        } catch (error) {
            return onError(error)
        }
        function onSuccess(description) {
            dispatch({ type: actionTypes.FETCHED_DESCRIPTION, payload: description})
            return description;
        }
        function onError(error) {
            dispatch({ type: actionTypes.API_ERROR, payload: error });
            return error;
        }
    }
};

export function loadMoves(bool) {
    return {
        type: actionTypes.LOAD_MOVES,
        payload: bool
    }
}