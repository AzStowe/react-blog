import React, { Component } from "react";
import Form from '../Form'

export default class Main extends Component {
  state = {
    isPosting: true,
    post: [
      {
        title: "My Day",
        author: "Aaron",
        post:
          "Aute magna reprehenderit dolor Lorem aute cupidatat amet dolor eu laboris laborum voluptate ea reprehenderit. Sint et Lorem commodo esse et cillum eu amet veniam. Exercitation laborum duis cupidatat laboris aliqua."
      }
    ]
  };

  handleClick = event => {
    this.setState({
      isPosting: !this.state.isPosting
    });
  };

  handleAddPost =( {title, author, post} )=> {
    this.setState({
      post : [{title, author, post}, ...this.state.post]
    })
  }

  render() {
    const posts = this.state.post.map((post, index) => {
      return (
        <li key={index}>
          <h3>{post.title}</h3>
          <h5>{post.author}</h5>
          <h6>{post.post}</h6>
        </li>
      );
    });

    return (
      <div>
        <header>
          <h1>Party Blog</h1>
        </header>
        <section>
        <button onClick={this.handleClick}>toggle</button>
        {!!this.state.isPosting ? <Form handleAddPost={this.handleAddPost}/> : null}<ul>{posts}</ul>
        </section>
      </div>
    );
  }
}
