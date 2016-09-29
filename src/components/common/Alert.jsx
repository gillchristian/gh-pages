import React from 'react'

import classnames from 'classnames'

const Alert = ({message, inline}) => {
  const className = classnames('Alert', {
    'Alert-fixed': !inline
  })
  return (
    <div className={className}>
      <span className="Alert-message">{message}</span>
    </div>
  )
}

export default Alert
