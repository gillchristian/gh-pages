import {connect} from 'react-redux'

import {fetchUser} from '../actions/user'

import App from '../components/App'

const mapStateToProps = state => (
  {
    loading: state.user.loading,
    profile: state.user.profile
  }
)

const mapDispatchToProps = dispatch =>{
  const getUser = username => dispatch(fetchUser(username))

  return {getUser}
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
