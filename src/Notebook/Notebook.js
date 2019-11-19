import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Notebook.css';

export default class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get('https://of-note.herokuapp.com/api/note/')
      .then(res => {
        // console.log(res);
        // this.setState({ notes: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <section>
        <h2>
          <span>{this.state.title}</span> <Link to='/add_note'>+</Link>
        </h2>
        <ul>
          <li>
            <a href='/'>Project Idea</a>
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
