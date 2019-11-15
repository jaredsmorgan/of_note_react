import React, { Component } from 'react';
import { slide as Slide } from 'react-burger-menu';
import './Menu.css';

export default class Menu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Slide right>
        <h3>Notebooks</h3>
        <a id='personal' className='menu-item' href='/'>
          Personal
        </a>
        <a id='group' className='menu-item' href='#'>
          Group
        </a>
        <a id='public' className='menu-item' href='#'>
          Public
        </a>
        <a id='add' className='menu-item last' href='#'>
          Add New
        </a>
        <h3>Account</h3>
        <a id='profile' className='menu-item' href='#'>
          Profile
        </a>
        <a id='groups' className='menu-item' href='#'>
          Groups
        </a>
        <a id='logInOut' className='menu-item last' href='#'>
          Log Out
        </a>
      </Slide>
    );
  }
}
