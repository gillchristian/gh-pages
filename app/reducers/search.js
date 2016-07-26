import {
  UPDATE_SEARCH_FIELD
} from '../actions/search'

export const INITIAL_STATE = {
  value: ''
}

export default search

/**
 * Search reducer
 */
function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
