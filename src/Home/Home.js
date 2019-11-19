import React, { Component } from 'react';
// import Link from 'react-router-dom';
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
    console.log(this.state.notebooks[0]);

    // let filtered = this.state.notebooks.filter(notebook => notebook.category.name === "")

    // let list = this.state.notebooks.map((notebook, index) => {
    //   return <div key={index}>
    //     <Link to={`/notebook/${}`}
    //   </div>;
    // });

    return (
      <div className='content'>
        <Notebook title='Personal' />
        <Notebook title='Work' />
        <Notebook title='Public' />
      </div>
    );
  }
}
