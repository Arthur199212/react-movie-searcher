import GET_URL from './getURL'
import GET_DETAILED_URL from './getDetailedMovieURL'

const FETCH_DATA = async searchData => {
  const res = await fetch(GET_URL(searchData))
  return await res.json()
}

const FETCH_DETAILED_DATA = async id => {
  const res = await fetch(GET_DETAILED_URL(id))
  return await res.json()
}

export { FETCH_DATA, FETCH_DETAILED_DATA }
