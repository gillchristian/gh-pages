import {connect} from 'react-redux'

import {fetchRepos} from '../../actions/repos'

import ReposList from '../../components/repos/ReposList'

const mapStateToProps = state => (
  {
    list: state.repos.list,
    loading: state.repos.loading,
    error: state.repos.error
  }
)

const mapDispatchToProps = dispatch => {
  const getRepos = username => dispatch(fetchRepos(username))

  return {
    getRepos
  }
}

const ReposListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposList)

export default ReposListContainer
