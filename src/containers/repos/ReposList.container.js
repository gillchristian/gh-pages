import {connect} from 'react-redux'

import {fetchRepos} from '../../actions/repos'

import ReposList from '../../components/repos/ReposList'

const mapStateToProps = state => (
  {
    list: state.repos.list,
    loading: state.repos.loading,
    error: state.repos.error,
    username: state.search.user
  }
)

const mapDispatchToProps = {
  getRepos: fetchRepos
}

const ReposListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposList)

export default ReposListContainer
