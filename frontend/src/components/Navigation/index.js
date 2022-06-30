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
      <>
        <ProfileButton className='profile-button' user={sessionUser} />
        <NavLink className='profile-link' to={`/profile/${sessionUser.id}`}>My Profile</NavLink>
      </>
      );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='signup-link' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
        <NavLink className='home-link' exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
        <NavLink className='daycares-link' exact to="/daycares">Doggy Day Cares</NavLink>
    </ul>
  );
}

export default Navigation;
