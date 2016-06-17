import {connect} from 'react-redux'

import {fetchUser} from '../actions/user'

import App from '../components/App'

const mapStateToProps = state => (
  {
    loading: state.user.loading,
    profile: state.user.profile
  }
)

const mapDispatchToProps = {
  getUser: fetchUser
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
