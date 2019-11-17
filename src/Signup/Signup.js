import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Signup.css';

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
      <div className='signup'>
        <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
          <h2>Sign Up</h2>
          <Form.Group as={Row} controlId='name'>
            <Col>
              <Form.Label htmlFor='first_name'>First Name</Form.Label>
              <Form.Control
                type='text'
                name='first_name'
                value={this.state.first_name}
                onChange={this.handle_change}
              />
            </Col>
            <Col>
              <Form.Label htmlFor='last_name'>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='last_name'
                value={this.state.last_name}
                onChange={this.handle_change}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='name' className='email'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handle_change}
            />
          </Form.Group>
          <Form.Group as={Row} controlId='credentials'>
            <Col>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handle_change}
              />
            </Col>
            <Col>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
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
