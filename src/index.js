import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'

import AppContainer from './containers/App.container'

import 'bulma/css/bulma.min.css'
import 'font-awesome/css/font-awesome.min.css'

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer username={'gillchristian'}/>
  </Provider>,
  document.getElementById('app')
)
