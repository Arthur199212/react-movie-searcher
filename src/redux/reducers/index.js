import { combineReducers } from 'redux'
import searchData from './searchData'
import inputValue from './inputValue'
import moviesData from './moviesData'
import movieData from './movieData'
import { all } from 'redux-saga/effects';

import { sagas } from '../actions';

function* rootSaga() {
  yield all([
    sagas(),
  ]);
}

const rootReducer = combineReducers({
  searchData,
  inputValue,
  moviesData,
  movieData
})

export { 
  rootReducer,
  rootSaga
 }
