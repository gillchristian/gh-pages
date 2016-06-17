import {combineReducers} from 'redux'

import user from './user'
import repos from './repos'

const reducers = {
  user,
  repos
}

export default combineReducers(reducers)
