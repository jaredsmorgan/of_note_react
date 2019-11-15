import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div id='outer-container'>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          disableAutoFocus
        />
        <main id='page-wrap' class='wrapper'>
          <Header />
          <div class='content'>
            <h2>Hello World!</h2>
            <p>
              Yr iceland vexillologist scenester, photo booth tote bag four loko
              tumeric authentic. Dreamcatcher fingerstache hell of, schlitz
              retro keffiyeh swag portland kitsch church-key gentrify cliche
              gluten-free. Bushwick whatever messenger bag meh dreamcatcher man
              braid. Knausgaard franzen letterpress tilde brooklyn lumbersexual.
              Hot chicken listicle tumeric yr. Blog mixtape 8-bit glossier
              gastropub taxidermy. Food truck twee bitters wolf, fixie before
              they sold out everyday carry yuccie pabst.
            </p>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
