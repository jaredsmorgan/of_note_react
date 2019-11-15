import React, { Component } from 'react';
import { slide as Slide } from 'react-burger-menu';
import './Menu.css';

export default class Menu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Slide right>
        <a id='home' className='menu-item' href='/'>
          Home
        </a>
        <a id='about' className='menu-item' href=''>
          About
        </a>
        <a id='contact' className='menu-item' href=''>
          Contact
        </a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Slide>
    );
  }
}
