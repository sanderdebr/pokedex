import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';
import logger from 'redux-logger'
// import thunk from "redux-thunk";

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(forbiddenWordsMiddleware, 
                    initialiseSagaMiddleware,
                    logger))
);

initialiseSagaMiddleware.run(apiSaga);

export default store;