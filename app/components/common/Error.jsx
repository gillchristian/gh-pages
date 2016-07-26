import React from 'react'

import classnames from 'classnames'

import '../../styles/import/Error.scss'

const Error = ({message, inline}) => {
  const className = classnames('Error', {
    'Error-fixed': !inline
  })
  return (
    <div className={className}>
      <span className="Error-alert">{message || 'Sorry there was an error =/ please try again!'}</span>
    </div>
  )
}

export default Error
