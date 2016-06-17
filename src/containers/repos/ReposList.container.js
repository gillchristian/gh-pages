import {connect} from 'react-redux'

import ReposList from '../../components/repos/ReposList'

const mapStateToProps = state => (
  {
    list: state.repos.list,
    loading: state.repos.loading,
    error: state.repos.error,
    username: state.search.user
  }
)

const ReposListContainer = connect(
  mapStateToProps
)(ReposList)

export default ReposListContainer
