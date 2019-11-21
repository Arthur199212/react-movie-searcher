import { SET_SEARCH_BY, SET_SORT_BY, SET_QUERY, RISE_LIMIT } from '../constants'

export const preloadedState = {
  query: '',
  searchBy: 'title',
  sortBy: 'release_date',
  offset: 0,
  limit: 8
}

const searchData = (state = preloadedState, { type, data }) => {
  switch (type) {
    case SET_SEARCH_BY:
      return {
        ...state,
        searchBy: data
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: data
      }
    case SET_QUERY:
      return {
        ...state,
        query: data,
        limit: preloadedState.limit
      }
    case RISE_LIMIT:
      return {
        ...state,
        limit: state.limit + preloadedState.limit
      }
    default:
      return state
  }
}

export default searchData
