import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Link to='#'>
          <h3>About</h3>
        </Link>
        <span>&#9400; Jared Morgan, 2019</span>
      </div>
    );
  }
}
