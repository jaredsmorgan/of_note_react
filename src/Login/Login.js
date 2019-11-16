import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        <h2>Log In</h2>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type='submit' />
      </form>
    );
  }
}

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
