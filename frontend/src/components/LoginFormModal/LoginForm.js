import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';
import { NavLink } from 'react-router-dom';

function LoginForm( {setTrigger} ) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({credential: 'Demo', password: 'password'}))
  }

  const directToSignup = () => {
    setTrigger(false);
  }

  return (
    <div className={errors.length === 0 ? "form-container-login" : "form-container-login-errors"}>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li className="errors-login" key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            className="user-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="password-label">
          Password
          <input
            className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="login-buttons">
          <button className="login-button-form" type="submit">Log In</button>
          <button className="demo-button" onClick={demoSubmit}>Demo</button>
        </div>
        <div className="new-to-paws">
          <div className="new-to-paws-text" >New to Paws?</div>
          <NavLink className="new-to-paws-link" exact to="/signup" onClick={directToSignup}>Sign up</NavLink>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
