import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypes from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(actionTypes.DATA_REQUESTED, workerSaga);
};

function* workerSaga() {
    try {
        const payload = yield call(fetchAll);
        yield put({ type: actionTypes.DATA_LOADED, payload })
    } catch (e) {
        yield put({ type: actionTypes.API_ERROR, payload: e })
    }
};

// Chaining multiple promises
function fetchAll() {
    const pokemons = [];
    const start = performance.now();
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=200`)
        .then(response => response.json())
        .then(data => data.results)
        // Running Promise.All
        .then(results => {
            fetchPokemon(results).then(pokemons => console.log(pokemons));
        })
        .then(() => {
            const end = performance.now();
            const timer = end - start;
        })
};

let pokemons = [];

const fetchPokemon = async (results) => {
    Promise.all(results.map(result => {
        getPokemon(result)
            .then(item => pokemons.push(item))
    }))
    .then(() => {
        return pokemons;
    })
};

const getPokemon = async result => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}