import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        created={post.created}
        summary={post.summary}
      />
    )}
  </div>
)

// mapping over subreddits array:
// post : {
//   subreddits : [
//     {
//       id: i,
//       title: title,
//       created: created,
//       summary: summary
//     }
//   ]
// }

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  // console.log({state})
  return {
    subreddits: state.subreddits
  }
}

export default connect(mapStateToProps)(Subreddit)
