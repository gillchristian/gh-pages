import 'whatwg-fetch'

import {readOrReject} from '../utils/fetch-utils'

// --- action types ---
export const REQUEST_REPOS = 'REQUEST_REPOS'
export const REQUEST_REPOS_SUCCESS = 'REQUEST_REPOS_SUCCESS'
export const REQUEST_REPOS_ERROR = 'REQUEST_REPOS_ERROR'
export const FETCH_REPOS = 'FETCH_REPOS'

/**
 * Request repos action
 *
 * @returns {Object}  action object
 */
export function requestRepos() {
  return {
    type: REQUEST_REPOS
  }
}

/**
 * Request repos action success
 *
 * @param {Object}  response
 * @returns {Object}  action object
 */
export function requestReposSuccess(response) {
  return {
    type: REQUEST_REPOS_SUCCESS,
    payload: response
  }
}

/**
 * Request repos action error
 *
 * @param {Object}  error
 * @returns {Object}  action object
 */
export function requestReposError(error) {
  return {
    type: REQUEST_REPOS_ERROR,
    payload: error,
    error: false
  }
}

/**
 * Fetch repos
 *
 * @param {String}  username
 * @returns {Function}  thunk action
 */
export function fetchRepos(username) {
  return function (dispatch) {
    dispatch(requestRepos())
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(readOrReject)
      .then(json => dispatch(requestReposSuccess(json)))
      .catch(err => dispatch(requestReposError(err)))
  }
}
