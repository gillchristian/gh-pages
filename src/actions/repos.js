import 'whatwg-fetch'

import {readOrReject} from '../utils/fetch-utils'
import {filterReposWithPages} from '../utils/filter-utils'

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
export const requestRepos = () => ({
  type: REQUEST_REPOS
})

/**
 * Request repos action success
 *
 * @param {Object}  response
 * @returns {Object}  action object
 */
export const requestReposSuccess = response => ({
  type: REQUEST_REPOS_SUCCESS,
  payload: response
})

/**
 * Request repos action error
 *
 * @param {Object}  error
 * @returns {Object}  action object
 */
export const requestReposError = error => ({
  type: REQUEST_REPOS_ERROR,
  payload: error,
  error: false
})

/**
 * Fetch repos
 *
 * @param {String}  username
 * @returns {Function}  thunk action
 */
export const fetchRepos = username => dispatch => {
  dispatch(requestRepos())
  const base = `https://api.github.com/users/${username}`
  const url = `${base}/repos?sort=updated&type=all&per_page=100`
  return fetch(url)
    .then(readOrReject)
    .then(json => filterReposWithPages(json, username))
    .then(list => dispatch(requestReposSuccess(list)))
    .catch(err => dispatch(requestReposError(err)))
}
