import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';

import './NoteForm.css';

export default class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      notebook: '',
      body: '',
      setRedirect: false
    };
  }

  setRedirect() {
    this.setState({ setRedirect: true });
  }

  renderRedirect() {
    if (this.state.setRedirect) {
      return <Redirect to='/' />;
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let note = {
      title: this.state.title,
      notebook: this.state.notebook,
      body: this.state.body,
      owner: this.state.owner
    };

    axios
      .post(`http://localhost:8000/api/note/`, note)
      .then(res => {
        console.log(res.data);
      })
      .then(this.props.setRedirect)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='noteForm'>
        <h2>Note</h2>
        <Form onSubmit={e => this.props.handleSubmit(e, this.state)}>
          <Col>
            <Row>
              <Form.Group as={Col}>
                <Col>
                  <Form.Label htmlFor='title'>Title</Form.Label>
                  <Form.Control
                    type='text'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col}>
                <Col>
                  <Form.Label htmlFor='notebook'>Type</Form.Label>
                  <Form.Control
                    as='select'
                    name='notebook'
                    value={this.state.notebook}
                    onChange={this.handleChange}
                  >
                    <option>Vacation</option>
                    <option>In the Lab</option>
                    <option>Business Development</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor='body'>Note</Form.Label>
              <Form.Control
                as='textarea'
                rows='5'
                name='body'
                value={this.state.body}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Col>
              <Button type='submit' variant='primary'>
                Submit
              </Button>
            </Col>
          </Col>
        </Form>
      </div>
    );
  }
}
