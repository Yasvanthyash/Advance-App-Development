import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
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
      nav('/admindashboard');
    }
  };

  return (
    <div id="body">
      <div className="login-container">
        <div className="image-container">
          <img src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709832.jpg?t=st=1710868297~exp=1710871897~hmac=e3800763231f1024130d1246db7d766a892edd81e67c30887ff7bdb7f33cfa13&w=740" alt="Login Image" />
        </div>
        <div className="login-form">
          <div className="containerr">
            <div className="header">
              <h1>Job Application Portal</h1>
              <p>Admin Login</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
