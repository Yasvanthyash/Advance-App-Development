import React, { useState } from 'react';
import validator from 'validator';
import './Login.css';
import { Link } from 'react-router-dom';

const UserRegister = () => {
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [role, setRole] = useState('');

  const handleDetails = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedAge = age.trim();
    const trimmedPassword = password.trim();
    const trimmedConPassword = conpassword.trim();

    if (
      trimmedAge.length === 0 ||
      trimmedEmail.length === 0 ||
      trimmedPassword.length === 0 ||
      trimmedUsername.length === 0 ||
      trimmedPhone.length === 0
    ) {
      alert('Please fill in all fields.');
    } else if (!validator.isEmail(trimmedEmail)) {
      alert('Please enter a valid email address.');
    } else if (trimmedPhone.length < 10) {
      alert('Please enter a valid phone number.');
    } else if (trimmedAge < 18 || trimmedAge > 120) {
      alert('Please enter a valid age between 18 and 120.');
    } else if (trimmedPassword !== trimmedConPassword) {
      alert('Passwords do not match. Please re-enter your password.');
    } else {
      alert('Registration successful! You can now login.');

    }
  };

  return (
    <div id="body">
      <div className="login-container">
        <div className="signup-form">
          <div className="containerr">
            <div className="header">
              <h1>Register an Account</h1>
              <p>Get started!</p>
            </div>
            <form>
              <div className="input">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  pattern="[0-9]+"
                  maxLength="10"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                />
              </div>
              <div className="input">
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="applicant">Applicant</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="input">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>

              <input
                className="login-button"
                onClick={handleDetails}
                type="submit"
                value="SIGN UP"
              />
            </form>
            <Link to="/applicantlogin">
              <p>Already have an account? Login</p>
            </Link>
          </div>
        </div>
        <div className="register-info">
  <h2>About Registration</h2><br></br>
  <p>Registering an account with us opens up a world of opportunities in your job search journey.</p>
  <p>Gain access to a vast array of job openings spanning various industries, roles, and experience levels.</p>
  <p>Track the progress of your job applications in real-time, ensuring you stay informed at every step of the hiring process.</p>
  <p>Bookmark interesting job listings for easy reference and revisit them whenever you're ready to apply.</p>
  <p>Receive dedicated support from our customer service team, ready to assist you with any questions or concerns.</p>
  <p>Best of all, registration is quick, simple, and completely free. Sign up today and take the first step towards your dream career!</p>
</div>

      </div>
    </div>
  );
}

export default UserRegister;
