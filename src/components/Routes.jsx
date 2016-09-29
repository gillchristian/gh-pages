import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from './App.jsx'
import ReposList from '../containers/repos/ReposList.container'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}  >
      <Route path=":username" component={ReposList} />
    </Route>
  </Router>
)

export default Routes
