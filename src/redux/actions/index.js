import {
  ADD_MOVIES,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_QUERY,
  RISE_LIMIT
} from '../constants'

export const addMoviesData = data => ({
  type: ADD_MOVIES,
  data
})

export const setSearchBy = data => ({
  type: SET_SEARCH_BY,
  data
})

export const setSortBy = data => ({
  type: SET_SORT_BY,
  data
})

export const setQuery = data => ({
  type: SET_QUERY,
  data
})

export const riseLimit = () => ({
  type: RISE_LIMIT
})
