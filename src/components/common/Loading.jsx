import React from 'react'

import classnames from 'classnames'


const Loading = ({inline}) => {
  const className = classnames('Loading', {
    'Loading-fixed': !inline
  })
  return (<div className={className}>loading...</div>)
}

export default Loading
