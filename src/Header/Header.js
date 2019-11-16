import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/of_note_logo.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='logo' />
          <h1>Of Note</h1>
        </Link>
      </div>
    );
  }
}
