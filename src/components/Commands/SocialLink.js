
import React, { Fragment } from 'react'

export default function SocialLink({ title, url, handle }) {
  return (
    <p>
      {title}: <a href={url} target='_blank'>{handle || url}</a>
    </p>
  )
}
