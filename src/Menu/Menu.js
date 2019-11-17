import React, { Component } from 'react';
import { slide as Slide } from 'react-burger-menu';
import './Menu.css';
import Nav from '../Nav/Nav';

export default class Menu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Slide right>
        <Nav
          logged_in={this.props.logged_in}
          display_form={this.props.display_form}
          handle_logout={this.props.handle_logout}
        />
      </Slide>
    );
  }
}
