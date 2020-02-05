import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchSaga from '../sagas/fetch-saga';
import rootReducer from '../reducers';

import logger from 'redux-logger';

const initSagas = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            initSagas,
            logger)
    )
);

initSagas.run(fetchSaga);

export default store;