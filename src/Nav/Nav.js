import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <div>
      <h3>Notebooks</h3>
      <ul>
        <li className='only'>
          <a id='public' className='menu-item' href='/'>
            Public
          </a>
        </li>
      </ul>
      <h3>Account</h3>
      <ul>
        <li>
          <Link to={'/login'}>Log In</Link>
        </li>
        <li>
          <Link to={'/signup'}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );

  const logged_in_nav = (
    <div>
      <h3>Notebooks</h3>
      <ul>
        <li>
          <a id='personal' className='menu-item' href='/'>
            Personal
          </a>
        </li>
        <li>
          <a id='group' className='menu-item' href='/'>
            Group
          </a>
        </li>
        <li>
          <a id='public' className='menu-item' href='/'>
            Public
          </a>
        </li>
        <li className='last'>
          <a id='add' className='menu-item' href='/'>
            Add New
          </a>
        </li>
      </ul>
      <h3>Account</h3>
      <ul>
        <li>
          <a id='profile' className='menu-item' href='/profile'>
            Profile
          </a>
        </li>
        <li>
          <a id='groups' className='menu-item' href='/'>
            Groups
          </a>
        </li>
        <li
          className='linky menu-item last'
          onClick={() => props.handle_logout()}
        >
          Log Out
        </li>
      </ul>
    </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  //   display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
