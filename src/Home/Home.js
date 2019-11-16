import React, { Component } from 'react';
import Notebook from '../Notebook/Notebook';

export default class Home extends Component {
  render() {
    return (
      <div className='content'>
        {/* <h2>Notebooks</h2> */}
        <Notebook title='Personal' />
        <Notebook title='Work' />
        <Notebook title='Public' />
      </div>
    );
  }
}
