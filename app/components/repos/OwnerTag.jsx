import React from 'react'

const OwnerTag = ({owner}) => (
  <span className="OwnerTag">
    by <a href={owner.url} target="_blank">{owner.name}</a>
  </span>
)

export default OwnerTag
