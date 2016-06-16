import {
  REQUEST_USER,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_ERROR
} from '../actions/user'

export const INITIAL_STATE = {
  loading: false,
  error: false,
  profile: {
    name: '',
    company: '',
    blogUrl: '',
    login: '',
    bio: '',
    avatarUrl: '',
    profileUlr: '',
    type: '',
    publicRepos: 0,
    followers: 0,
    following: 0,
    createdAt: '',
    updated_at: ''
  }
}

/**
 * User profile reducer
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_USER:
      return {
        ...state,
        loading: true
      }
    case REQUEST_USER_SUCCESS:{
      const user = action.payload
      return {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          name: user.name,
          company: user.company,
          blogUrl: user.blog,
          login: user.login,
          bio: user.bio,
          avatarUrl: user.avatar_url,
          profileUlr: user.html_url,
          type: user.type,
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          createdAt: user.created_at,
          updated_at: user.updated_at
        }
      }
    }
    case REQUEST_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Ups! There was an error, please try again!'
      }
    default:
      return state
  }
}
