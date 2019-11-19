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
    // let key = this.props.NotebookKey;
    axios
      .get(`https://of-note.herokuapp.com/api/note/`)
      .then(res => {
        console.log(res.data);
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let list = this.state.notes.map((note, index) => {
      console.log(note);
      return (
        <li key={index}>
          <Link to={`/note/${note}`}>{note.title}</Link>
        </li>
      );
    });

    return (
      <section>
        <h2>
          <span>{this.state.title}</span> <Link to='/add_note'>+</Link>
        </h2>
        <ul>{list}</ul>
      </section>
    );
  }
}
