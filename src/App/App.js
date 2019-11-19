import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import LoginForm from '../Login/Login';
import SignupForm from '../Signup/Signup';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import NotebookForm from '../NotebookForm/NotebookForm';
import NoteForm from '../NoteForm/NoteForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      first_name: '',
      last_name: ''
    };
    this.handle_login = this.handle_login.bind(this);
    this.handle_signup = this.handle_signup.bind(this);
    this.handle_logout = this.handle_logout.bind(this);
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('https://of-note.herokuapp.com/user/auth/user', {
        headers: { Authorization: `JWT ${localStorage.getItem('token')}` }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            username: json.username,
            first_name: json.last_name,
            last_name: json.first_name
          });
        });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.logged_in) {
      fetch('https://of-note.herokuapp.com/user/auth/user', {
        headers: { Authorization: `JWT ${localStorage.getItem('token')}` }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            username: json.username,
            first_name: json.first_name,
            last_name: json.last_name
          });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('https://of-note.herokuapp.com/user/auth/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://of-note.herokuapp.com/user/auth/registration/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.user.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({
      logged_in: false,
      username: '',
      first_name: '',
      last_name: ''
    });
  };

  render() {
    return (
      <div id='outer-container'>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          disableAutoFocus
          logged_in={this.state.logged_in}
          handle_logout={this.handle_logout}
          user={this.state.username}
        />
        <main id='page-wrap' className='wrapper'>
          <Header
            logged_in={this.state.logged_in}
            first={this.state.first_name}
            last={this.state.last_name}
          />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/profile'
              render={props => <Profile logged_in={this.state.logged_in} />}
            />
            <Route path='/add_notebook' component={NotebookForm} />
            <Route path='/add_note' component={NoteForm} />
            )} />
            <Route
              path='/login'
              render={props => (
                <LoginForm
                  handle_login={this.handle_login}
                  logged_in={this.state.logged_in}
                />
              )}
            />
            <Route
              path='/signup/'
              render={props => (
                <SignupForm
                  handle_signup={this.handle_signup}
                  logged_in={this.state.logged_in}
                />
              )}
            />
          </Switch>
          <Footer />
        </main>
      </div>
    );
  }
}
