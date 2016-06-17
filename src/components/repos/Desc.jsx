import React from 'react'

import truncate from 'lodash/truncate'

const config = {
  length: 60,
  separator: ' ',
  omission: ' [...]'
}

const Desc = ({text}) => <span>{truncate(text, config)}</span>

export default Desc
