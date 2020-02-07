import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchSaga from '../sagas/fetch-saga';
import combinedReducers from '../reducers/combined';

import mainReducer from '../reducers/main';

import logger from 'redux-logger';

const initSagas = createSagaMiddleware();

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(
            initSagas,
            logger)
    )
);

initSagas.run(fetchSaga);

export default store;