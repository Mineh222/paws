import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
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

  return (
    <div className="form-container-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
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
      </form>
    </div>
  );
}

export default LoginForm;
