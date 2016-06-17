import {combineReducers} from 'redux'

import user from './user'
import repos from './repos'
import search from './search'

const reducers = {
  user,
  repos,
  search
}

export default combineReducers(reducers)
