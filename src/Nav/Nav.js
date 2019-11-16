import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <div>
      <h3>Notebooks</h3>
      <ul>
        <li>
          <a id='public' className='menu-item' href='/'>
            Public
          </a>
        </li>
      </ul>
      <h3>Account</h3>
      <ul>
        <li onClick={() => props.display_form('login')}>Log In</li>
        <li onClick={() => props.display_form('signup')}>Sign Up</li>
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
        <li>
          <a id='add' className='menu-item last' href='/'>
            Add New
          </a>
        </li>
      </ul>
      <h3>Account</h3>
      <ul>
        <li>
          <a id='profile' className='menu-item' href='/'>
            Profile
          </a>
        </li>
        <li>
          <a id='groups' className='menu-item' href='/'>
            Groups
          </a>
        </li>
        <li onClick={() => props.display_form('logout')}>Log Out</li>
      </ul>
    </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
