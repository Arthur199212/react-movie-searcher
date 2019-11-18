import API_URL from './basicURL'

const GET_URL = ({ query, searchBy, sortBy, offset, limit }) => {
  const SEARCH = query ? `&search=${query}` : ''
  const SEARCH_BY = searchBy ? `&searchBy=${searchBy}` : ''
  const SORT_BY = sortBy ? `&sortBy=${sortBy}` : '' // 'release_date' or 'vote_average'
  const SORT_ORDER = 'desc' // 'desc' descending or 'asc' ascending

  return `${API_URL}/movies?sortOrder=${SORT_ORDER}&offset=${offset}&limit=${limit}${SEARCH}${SEARCH_BY}${SORT_BY}`
}

export default GET_URL
