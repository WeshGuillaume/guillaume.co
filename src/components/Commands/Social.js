
import React, { Fragment } from 'react'

import Github from './Github'
import Instagram from './Instagram'
import Twitter from './Twitter'
import LinkedIn from './LinkedIn'

export default function Social() {
  return (
    <Fragment>
      Make sure to follow me 😉:
      <Github />
      <Instagram />
      <LinkedIn />
      <Twitter />
    </Fragment>
  )
}
