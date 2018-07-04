import React from 'react'

const Post = ({
  title,
  created,
  summary}) => (
  <div>
    <h1>{title}</h1>
    <p>Date: {created}</p>
    <p>{summary}</p>
  </div>
)

export default Post
