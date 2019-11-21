import { SET_VALUE, DELETE_VALUE } from '../constants'

const inputValue = (state = '', { type, value }) => {
  switch (type) {
    case SET_VALUE:
      return value
    case DELETE_VALUE:
      return ''
    default:
      return state
  }
}

export default inputValue
