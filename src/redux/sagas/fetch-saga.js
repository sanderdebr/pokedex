import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypes from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(actionTypes.DATA_REQUESTED, workerSaga);
};

function* workerSaga() {
    try {
        const payload = yield call(fetchData);
        yield put({ type: actionTypes.DATA_LOADED, payload })
    } catch (e) {
        yield put({ type: actionTypes.API_ERROR, payload: e })
    }
};

function fetchData() {
    const start = new Date().getTime();
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        .then(response => response.json())
        .then(data => {
            const result = data.results;
            const end = new Date().getTime();
            const timer = end - start;
            return {result, timer};
        });
};