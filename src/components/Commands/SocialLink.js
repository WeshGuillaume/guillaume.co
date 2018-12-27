
import React, { Fragment } from 'react'

export default function SocialLink({ title, url, handle }) {
  return (
    <span style={{ display: 'block' }}>
      {title}: <a href={url} target='_blank'>{handle || url}</a>
    </span>
  )
}
