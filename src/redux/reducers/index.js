import { combineReducers } from 'redux'
import moviesData from './moviesData'
import searchData from './searchData'
import inputValue from './inputValue'
import hideResults from './hideResults'
import showSpiner from './showSpiner'

export default combineReducers({
  moviesData,
  searchData,
  inputValue,
  hideResults,
  showSpiner
})
