import { combineReducers } from 'redux'
import moviesData from './moviesData'
import searchData from './searchData'
import inputValue from './inputValue'
import showSpiner from './showSpiner'
import movieData from './movieData'

export default combineReducers({
  moviesData,
  searchData,
  inputValue,
  showSpiner,
  movieData
})
