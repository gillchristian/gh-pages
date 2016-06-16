import {filterRepos} from '../utils/repos-list-filter'

import {
  REQUEST_REPOS,
  REQUEST_REPOS_SUCCESS,
  REQUEST_REPOS_ERROR
} from '../actions/repos'

export const INITIAL_STATE = {
  loading: false,
  erro: false,
  list: []
}

/**
 * User profile reducer
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: filterRepos(action.payload)
      }
    case REQUEST_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Ups! There was an error, please try again!'
      }
    default:
      return state
  }
}
