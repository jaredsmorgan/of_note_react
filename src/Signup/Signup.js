import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: ''
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
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <h2>Sign Up</h2>
        <label htmlFor='first_name'>First Name</label>
        <input
          type='text'
          name='first_name'
          value={this.state.first_name}
          onChange={this.handle_change}
        />
        <label htmlFor='last_name'>Last Name</label>
        <input
          type='text'
          name='last_name'
          value={this.state.last_name}
          onChange={this.handle_change}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handle_change}
        />
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

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
