import React, { Component } from 'react';
import './Notebook.css';

export default class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  render() {
    return (
      <section>
        <h2>{this.state.title}</h2>
        <ul>
          <li>
            <a href='/'>Project Ideas</a>
          </li>
          <li>
            <a href='/'>Bucket List</a>
          </li>
          <li>
            <a href='/'>Vacation Planner</a>
          </li>
        </ul>
      </section>
    );
  }
}
