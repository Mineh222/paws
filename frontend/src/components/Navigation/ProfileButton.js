import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { Link } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory('')
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      // (console.log(e.path[0].tagName))
      if (e.path[0].tagName == "I") {
        setShowMenu(false);
      }
      if (e.path[0].tagName !== "I") {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <button className="profile-icon-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="username" >{user.username}</li>
          <li className="email" >{user.email}</li>
          <li className="about-dev">
            <Link id="about-link" to="/about-me">About Developer</Link>
          </li>
          <li>
            <div id="logout-button">
              <button className="logout-button" onClick={logout}>Log Out</button>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
