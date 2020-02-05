import { takeEvery, call, put } from 'redux-saga/effects';
import * as constant from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(constant.DATA_REQUESTED, workerSaga);
};

function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: constant.DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: constant.API_ERRORED, payload: e });
    }
};

function getData() {
    return fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => response.json())
        .then(json => json.results);
};