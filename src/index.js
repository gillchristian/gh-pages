import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'

import Routes from './components/Routes'

import './index.css'

render(
  <Provider store={configureStore()}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
)
