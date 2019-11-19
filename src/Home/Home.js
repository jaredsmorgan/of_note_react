import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Notebook from '../Notebook/Notebook';

import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      notebooks: []
    };
  }

  componentDidMount() {
    axios
      .get('https://of-note.herokuapp.com/api/notebook/')
      .then(res => {
        console.log(res.data);
        this.setState({ notebooks: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.notebooks === null) {
      return null;
    }

    let list = this.state.notebooks.map((notebook, index) => {
      console.log(notebook);

      return (
        <div key={index}>
          <Notebook title={notebook.title} notebookKey={index} />
        </div>
      );
    });

    return <div className='content'>{list}</div>;
  }
}
