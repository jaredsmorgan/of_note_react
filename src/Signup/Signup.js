import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Signup.css';

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password1: '',
      password2: '',
      email: ''
    };
  }

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
      <div className='signup'>
        <h2>Sign Up</h2>
        <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
          <Form.Group as={Row}>
            <Col>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handle_change}
              />
            </Col>
            <Col>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                autoComplete='username'
                value={this.state.username}
                onChange={this.handle_change}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Label htmlFor='password1'>Password</Form.Label>
              <Form.Control
                type='password'
                name='password1'
                autoComplete='new-password'
                value={this.state.password}
                onChange={this.handle_change}
              />
            </Col>
            <Col>
              <Form.Label htmlFor='password2'>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                name='password2'
                autoComplete='new-password'
                value={this.state.password}
                onChange={this.handle_change}
              />
            </Col>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
