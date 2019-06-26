import React, {Component} from 'react';

export default class Form extends Component {
  state = {
    title: '',
    author: '',
    post: ''
  }
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  handleSubmit = event => {
    const {handleAddPost} = this.props
    event.preventDefault()
    handleAddPost(this.state)
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <div>
      <label>Title</label>
      <input onChange={this.handleChange} name='title' value={this.state.title}/>
    </div>
    <div>
      <label>Author</label>
      <input onChange={this.handleChange} name='author' value={this.state.author}/>
    </div>
    <div>
      <label>Post</label>
      <input onChange={this.handleChange} name='post' value={this.state.post}/>
    </div>
      <input type='submit'/>
    </form>
    )
  }
}

