import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import LoginForm from '../Login/Login';
import SignupForm from '../Signup/Signup';
import Footer from '../Footer/Footer';

import Nav from '../Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('https://of-note.herokuapp.com/current_user/', {
        headers: { Authorization: `JWT ${localStorage.getItem('token')}` }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('https://of-note.herokuapp.com/token-auth/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          display_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('https://of-note.herokuapp.com/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          display_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      display_form: form
    });
  };

  render() {
    let form;
    switch (this.state.display_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div id='outer-container'>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          disableAutoFocus
        />
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        <main id='page-wrap' className='wrapper'>
          <Header />
          <p>
            {this.state.logged_in ? `${this.state.username}` : 'Please Log In'}
          </p>
          {form}

          <Switch>
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
