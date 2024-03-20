import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const authenticate = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername.length === 0) {
      alert('Enter Username');
    } else if (trimmedPassword.length === 0) {
      alert('Enter Password');
    } else {
      alert("Logged in Successfully!!");
      nav('/applicantdashboard')
    }
  };

  return (
    <div id="body">
      <div className="login-container">
        <div className="login-form">
          <div className="containerr">
            <div className="header">
              <h1>Job Application Portal</h1>
              <p>Applicant Login</p>
            </div>

            <form>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <input
                onClick={authenticate}
                className="login-button"
                type="submit"
                value="LOGIN"
              />
            </form>
            <Link to="/applicantsignup">
              <p>Don't have an account? Register</p>
            </Link>
          </div>
        </div>
        <div className="login-info">
        <h2>About Login</h2><br></br><br></br>
      <p>This login page allows registered users to access their accounts securely. If you don't have an account yet, you can easily register by clicking the "Register" link below the login form.</p>
      <p>Forgot your password? No worries! You can reset it by following the instructions provided on the password reset page.</p>
      <p>For any assistance or inquiries, please don't hesitate to contact our support team. We're here to help you!</p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
