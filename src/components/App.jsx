import React from 'react'

import ReposList from '../containers/repos/ReposList.container'

import 'whatwg-fetch'

class App extends React.Component {
  componentWillMount(){
    this.props.getUser(this.props.username)
  }

  render(){
    const {loading} = this.props

    if (loading) {
      return <div className="loading">loading...</div>
    }

    return (
      <div className="container">
        <ReposList username={'gillchristian'} />
      </div>
    )
  }
}

export default App
