import { call, put, all, takeLatest, select } from 'redux-saga/effects'
const fetch = require('node-fetch');

import {
  ADD_MOVIES,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_QUERY,
  LOAD_MORE,
  SET_VALUE,
  DELETE_VALUE,
  ADD_MOVIE_DATA,
  SET_DEFAULT_MOVIE_DATA,
  FETCH_MOVIES,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_FAILED
} from '../constants'
import { GET_URL, GET_DETAILED_URL } from '../../api'

const addMoviesData = payload => ({
  type: ADD_MOVIES,
  payload
})

const deleteValue = () => ({
  type: DELETE_VALUE
})

const addMovieData = payload => ({
  type: ADD_MOVIE_DATA,
  payload
})

export const setSearchBy = payload => ({
  type: SET_SEARCH_BY,
  payload
})

export const setSortBy = payload => ({
  type: SET_SORT_BY,
  payload
})

export const setQuery = payload => ({
  type: SET_QUERY,
  payload
})

export const loadMore = () => ({
  type: LOAD_MORE
})

export const setValue = payload => ({
  type: SET_VALUE,
  payload
})

export const setDefaultMovieData = () => ({
  type: SET_DEFAULT_MOVIE_DATA
})

export const fetchMovies = () => ({
  type: FETCH_MOVIES
})

export const fetchMoviesFailed = () => ({
  type: FETCH_MOVIES_FAILED
})

export const fetchMovieDetails = payload => ({
  type: FETCH_MOVIE_DETAILS,
  payload
})

export const fetchMovieDetailsFailed = () => ({
  type: FETCH_MOVIE_DETAILS_FAILED
})

// * Saga *
export function* fetchDataAsync() {
  const searchData = yield select(state => state.searchData)
  yield put((deleteValue()))

  try {
  const res = yield call(fetch, GET_URL(searchData))
  const data = yield res.json()

  yield put(addMoviesData(data))
  } catch (err) {
    yield put(fetchMoviesFailed())
    console.log('Failed to get data:', err.message)
  }
}
export function* watchFetchData() {
  yield takeLatest(FETCH_MOVIES, fetchDataAsync)
}

export function* fetchDetaledDataAsync({ payload }) {
  try {
    const res = yield call(fetch, GET_DETAILED_URL(payload))
    const data = yield res.json()
    
    yield put(addMovieData(data))
  } catch (err) {
    yield put(fetchMovieDetailsFailed())
    console.log('Failed to get detaild movie data:', err.message)
  }
}
export function* watchFetchDetaledDataAsync() {
  yield takeLatest(FETCH_MOVIE_DETAILS, fetchDetaledDataAsync)
}

export function* watchChangeSearchBy() {
  yield takeLatest(SET_SEARCH_BY, fetchDataAsync)
}
export function* watchSetQuery() {
  yield takeLatest(SET_QUERY, fetchDataAsync)
}
export function* whaitChangeSortBy() {
  yield takeLatest(SET_SORT_BY, fetchDataAsync)
}
export function* whatchLoadMore() {
  yield takeLatest(LOAD_MORE, fetchDataAsync)
}

// * Collect all sagas *
export function* sagas() {
  yield all([
    watchFetchData(),
    watchChangeSearchBy(),
    watchSetQuery(),
    whaitChangeSortBy(),
    whatchLoadMore(),
    watchFetchDetaledDataAsync()
  ])
}
