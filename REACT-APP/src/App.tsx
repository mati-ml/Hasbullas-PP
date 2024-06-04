import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import RoleBasedRoute from './components/RoleBasedRoute';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <RoleBasedRoute path="/admin/dashboard" component={AdminDashboard} allowedRoles={['admin']} />
          <RoleBasedRoute path="/teacher/dashboard" component={TeacherDashboard} allowedRoles={['teacher']} />
          <RoleBasedRoute path="/student/dashboard" component={StudentDashboard} allowedRoles={['student']} />
          <Route path="/not-authorized" component={() => <h1>Not Authorized</h1>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

/*
import React, { useState } from "react";
import ListGroup from "./Components/ListGroup";

function App() {
  // Assuming you want to display the English list by default
  const selectedLanguage = "en"; // Change this to 'es' for Spanish

  const items = {
    en: [
      "Internship Regulations",
      "Internship Registration",
      "Guide Professors",
      "Internship Rubric",
      "Evaluations",
    ],
    es: [
      "Reglamento de pasantías",
      "Inscripción de pasantías",
      "Profesores Guía",
      "Rúbrica de pasantías",
      "Evaluaciones",
    ],
  };

  const links = {
    en: [
      "https://alumnosfic.uai.cl/static/media/Reglamentopasantia2023.03a7175a58d5eebf27ea.pdf",
      "https://docs.google.com/forms/d/e/1FAIpQLScXkDBARYmT5ERzqCHP976hSpty2thhmV6WxwI9fKwYpcO94A/viewform?usp=sf_link",
      // ... other links for English items
    ],
    es: [
      "https://example.com/reglamento-de-pasantias-es.pdf",
      "https://example.com/formulario-de-inscripcion-de-pasantias-es.html",
      // ... other links for Spanish items
    ],
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleLogin = () => {
  // Form data
  const formData = new FormData();
  formData.append('email', username); // Assuming username is the email
  formData.append('password', password);

  // Fetch options
  const options = {
    method: 'POST',
    body: formData,
  };

  // Fetch to login endpoint
  fetch('http://127.0.0.1:8000/api/login/', options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      // Setear el estado de autenticación o almacenar el token JWT en localStorage
      //console.log(data);
      document.cookie = `user_role=${data.user_role}; path=/`;
      document.cookie = `user_id=${data.user_id}; path=/`;
      setIsLoggedIn(true); // Esto puede variar según tu implementación
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    });
};

  const handleSelectItem = (item, index) => {
    if (index === 0) {
      // Assuming "Internship Regulations" is at index 0
      window.open(links[selectedLanguage][index], "_blank");
    } else {
      console.log(item); // Handle other items as needed
    }
  };


const handleLogout = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
    });
    if (response.ok) {
      // Clear session data and log out user
      setIsLoggedIn(false);
      setUsername('');
      setPassword('');
      // Remove JWT token from localStorage or cookies
      localStorage.removeItem('csrftoken');
      localStorage.removeItem('user_role');
      localStorage.removeItem('user_id');
      console.log('Logout successful');
    } else {
      // Handle logout error
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
  const createListItem = (text, link) => (
    <li className="dropdown-item" key={text}>
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );

  return (
    <div className="container">
      {!isLoggedIn && (
        <div className="login-form">
          <h2>Inicio de Sesión</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username">Nombre de Usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <ListGroup
            items={items[selectedLanguage]}
            heading="Menu"
            onSelectItem={handleSelectItem}
          />
          <button onClick={handleLogout}>Salir (Logout)</button>
        </div>
      )}
    </div>
  );
}

export default App;
*/