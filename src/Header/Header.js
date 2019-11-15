import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../public/of_note_logo.png';
// import Menu from '../Menu/Menu';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <img className='logo' class='App-logo' src={Logo} alt='logo' />
          <h1>Of Note</h1>
        </Link>
        {/* <Menu /> */}
      </div>
    );
  }
}
