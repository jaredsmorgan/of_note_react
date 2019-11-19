import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './Profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      first_name: '',
      last_name: ''
    };
  }

  componentDidMount() {
    if (this.props.logged_in) {
      fetch('https://of-note.herokuapp.com/user/auth/user', {
        method: 'GET',
        headers: { Authorization: `JWT ${localStorage.getItem('token')}` }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            username: json.username,
            email: json.email,
            first_name: json.first_name,
            last_name: json.last_name
          });
        });
    }
  }

  render() {
    return (
      <div className='profile'>
        <Container>
          <Row>
            <h2>Profile</h2>
          </Row>
          <Row>
            <Col xs={3} className='profileLabel'>
              <h5>Name:</h5>
            </Col>
            <Col>
              {this.state.first_name} {this.state.last_name}
            </Col>
          </Row>
          <Row>
            <Col xs={3} className='profileLabel'>
              <h5>Username:</h5>
            </Col>
            <Col>{this.state.username}</Col>
          </Row>
          <Row>
            <Col xs={3} className='profileLabel'>
              <h5>Email:</h5>
            </Col>
            <Col>{this.state.email}</Col>
          </Row>
          {/* password change */}
        </Container>
      </div>
    );
  }
}
