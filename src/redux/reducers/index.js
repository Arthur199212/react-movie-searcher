import { combineReducers } from 'redux'
import moviesData from './moviesData'
import searchData from './searchData'

export default combineReducers({ moviesData, searchData })
