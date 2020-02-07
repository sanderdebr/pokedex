import { combineReducers, compose } from 'redux';
import mainReducer from './main';
import pokemonReducer from './pokemon';

export default combineReducers({
    mainReducer,
    pokemonReducer
});