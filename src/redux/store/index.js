import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchSaga from '../sagas/fetch-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import mainReducer from '../reducers/main';
import pokemonReducer from '../reducers/pokemon';

const initSagas = createSagaMiddleware();

const combinedReducers = combineReducers({
    mainReducer,
    pokemonReducer
});

const store = createStore(
    combinedReducers,
    compose(
        applyMiddleware(
            initSagas,
            thunk,
            logger)
    )
);

initSagas.run(fetchSaga);

export default store;