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
        
      </Slide>
    );
  }
}
