import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
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
      <div className='login'>
        <Form onSubmit={e => this.props.handle_login(e, this.state)}>
          <h2>Log In</h2>
          <Form.Group as={Row}>
            <Col>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='hemingway'
                name='username'
                autoComplete='username'
                value={this.state.username}
                onChange={this.handle_change}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                autoComplete='current-password'
                placeholder='password'
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

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
