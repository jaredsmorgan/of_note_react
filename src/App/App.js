import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import LoginForm from '../Login/Login';
import SignupForm from '../Signup/Signup';
import Footer from '../Footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
    this.handle_login = this.handle_login.bind(this);
    this.handle_signup = this.handle_signup.bind(this);
    this.handle_logout = this.handle_logout.bind(this);
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('https://of-note.herokuapp.com/api/current_user/', {
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
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('https://of-note.herokuapp.com/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '', redirect: true });
  };

  renderRedirect = () => {
    let url = '/';
    if (this.state.redirect === true) {
      return <Redirect to={url} />;
    }
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
        />
        <main id='page-wrap' className='wrapper'>
          <Header loggedin={this.state.logged_in} user={this.state.username} />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/login'
              render={props => (
                <LoginForm
                  handle_login={this.handle_login}
                  logged_in={this.logged_in}
                />
              )}
            />
            <Route
              path='/signup/'
              render={props => (
                <SignupForm
                  handle_login={this.handle_signup}
                  logged_in={this.logged_in}
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
