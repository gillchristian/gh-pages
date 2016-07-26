import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'

import ReduxThunk from 'redux-thunk'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk))
}
