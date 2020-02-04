import { ADD_POKEMON } from '../constants/action-types';

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            // do stuff
            if (action.type === ADD_POKEMON) {
                const foundWord = forbiddenWords.filter(word => (
                    action.payload.title.includes(word)
                ));

                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }

            return next(action);
        }
    }
}