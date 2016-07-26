import {combineReducers} from 'redux'

import repos from './repos'
import search from './search'

const reducers = {
  repos,
  search
}

export default combineReducers(reducers)
