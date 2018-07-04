import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newSubreddit: ''
    }
    this.userInput = this.userInput.bind(this)
  }

  // Defines new component state

  userInput (event) {
    this.setState({newSubreddit: event.target.value})
  }

  // New userInput function - takes an event and calls this.setState on newSubreddit

  render () {
    return (
      <div>
        <input type='text' name='newSubreddit' placeholder='Post titles' value={this.state.newSubreddit} onChange={this.userInput} />

        {/* Changes value of state to newSubreddit when changed in userInput */}

        <button onClick={() => this.props.dispatch(fetchPosts(this.state.newSubreddit))}>

          {/* onClick dispatch action on this.props which calls the fetchPosts function on the new subReddit */}

    Fetch Posts
        </button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
