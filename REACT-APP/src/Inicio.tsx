import React, { useState } from "react";
import styled from "styled-components"; // Using styled-components for easier styling

const LoginContainer = styled.div`
  display: flex; /* Enable flexible layout for responsiveness */
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center elements horizontally */
  justify-content: center; /* Center elements vertically */
  min-height: 100vh; /* Ensure login form takes up full viewport height */
  width: 100%; /* Ensure form fills available width */
  padding: 20px; /* Add some padding for better visuals */

  @media (min-width: 768px) {
    /* For tablets and desktops */
    width: 400px; /* Limit form width on larger screens */
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Add space between form elements */
`;

const Label = styled.label`
  display: block; /* Display labels on their own line */
  margin-bottom: 5px; /* Add some space below labels */
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Ensure inputs take full width */
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px; /* Add space above error message */
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication (replace with actual authentication logic)
    if (username === "admin" && password === "password123") {
      // Handle successful login (e.g., navigate to a different page)
      console.log("Login successful!");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Login;