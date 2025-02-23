import React, { useState } from 'react';
import './Login.css'; // Your styles for the login page

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login/signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]); // Mock users array for signup

  // Handle login
  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      alert('Login successful!');
      // Redirect to dashboard after successful login (you could use a `Navigate` here as well)
      window.location.href = '/dashboard'; // Use the React Router navigation here.
    } else {
      alert('Invalid credentials!');
    }
  };

  // Handle signup
  const handleSignup = () => {
    if (users.some((user) => user.username === username)) {
      alert('User already exists!');
    } else {
      setUsers([...users, { username, password }]);
      alert('Signup successful! You can now log in.');
      setIsSignup(false); // After signup, go back to login form
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Login Form */}
        <div className={`form-box ${!isSignup ? 'active' : ''}`} id="login">
          <h2>Login</h2>
          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account? <a href="#" onClick={() => setIsSignup(true)}>Signup</a>
          </p>
        </div>

        {/* Signup Form */}
        <div className={`form-box ${isSignup ? 'active' : ''}`} id="signup">
          <h2>Signup</h2>
          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn" onClick={handleSignup}>
            Signup
          </button>
          <p>
            Already have an account? <a href="#" onClick={() => setIsSignup(false)}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
