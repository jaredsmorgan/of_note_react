import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';

import './NotebookForm.css';

export default class NotebookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      typeCat: '',
      description: '',
      owner: '',
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
    let notebook = {
      title: this.state.title,
      typeCat: this.state.typeCat,
      description: this.state.description,
      owner: this.state.owner
    };

    axios
      .post(`http://localhost:8000/api/notebook/`, notebook)
      .then(res => {
        console.log(res.data);
      })
      .then(this.props.setRedirect)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='notebookForm'>
        <h2>Notebooks</h2>
        <Form onSubmit={e => this.props.handleSubmit(e, this.state)}>
          <Form.Group as={Col}>
            <Form.Label htmlFor='title'>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor='description'>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows='5'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Col>
            <Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor='typeCat'>Type</Form.Label>
                <Form.Control
                  as='select'
                  name='typeCat'
                  value={this.state.typeCat}
                  onChange={this.handleChange}
                >
                  <option>private</option>
                  <option>public</option>
                  <option>group</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label htmlFor='owner'>Owner</Form.Label>
                <Form.Control
                  as='select'
                  name='owner'
                  value={this.state.owner}
                  onChange={this.handleChange}
                >
                  <option>William Dixon</option>
                  <option>Jared Morgan</option>
                  <option>Bonnie Peters</option>
                  <option>Melaina Valentine</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Col>
        </Form>
      </div>
    );
  }
}
