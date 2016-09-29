import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

import {fetchRepos} from '../../actions/repos'

import ReposList from '../../components/repos/ReposList'

const mapStateToProps = (state, ownProps) => (
  {
    list: state.repos.list,
    loading: state.repos.loading,
    error: state.repos.error,
    username: ownProps.params.username
  }
)

const mapDispatchToProps = {
  fetchRepos
}

class ReposListContainer extends React.Component {
  componentWillMount() {
    this.props.fetchRepos(this.props.username)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username){
      this.props.fetchRepos(nextProps.username)
    }
  }

  render() {
    return (
      <ReposList
        list={this.props.list}
        loading={this.props.loading}
        error={this.props.error}
      />
    )
  }
}

ReposListContainer.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchRepos: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposListContainer)
