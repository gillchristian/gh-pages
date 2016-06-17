import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'

import AppContainer from './containers/App.container'

import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/main.scss'

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('app')
)
