import GET_URL from './getURL'

const FETCH_DATA = async searchData => {
  const res = await fetch(GET_URL(searchData))
  return await res.json()
}

export default FETCH_DATA