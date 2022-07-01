import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="loggedin-user">
        <ProfileButton user={sessionUser} />
        <NavLink className='profile-link' to={`/profile/${sessionUser.id}`}>My Profile</NavLink>
      </div>
      );
  } else {
    sessionLinks = (
      <div className='signup'>
        <NavLink className='signup-link' to="/signup">Sign Up</NavLink>
        <LoginFormModal />
      </div>
    );
  }

  return (
    <div className='logo-container'>
      <ul>
          <NavLink className='home-link' exact to="/">Paws</NavLink>
          <img className='paws-logo' src="https://i.postimg.cc/rp5WTVPC/logo.png"></img>
          {isLoaded && sessionLinks}
          <NavLink className='daycares-link' exact to="/daycares">Doggy Daycares</NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
