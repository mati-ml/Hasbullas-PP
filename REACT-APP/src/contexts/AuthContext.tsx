import React, { createContext, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface User {
  id: string;
  role: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const history = useHistory();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, password: string) => {
    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    const options = {
      method: "POST",
      body: formData,
    };

    fetch("http://127.0.0.1:8000/api/login/", options)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        const { user_id, user_role, token } = data;

        const user: User = {
          id: user_id,
          role: user_role,
          token: token,
        };

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));

        setUser(user);

        // Redirect to dashboard based on user role
        if (user_role === 'admin') {
          history.push('/admin/dashboard');
        } else if (user_role === 'teacher') {
          history.push('/teacher/dashboard');
        } else if (user_role === 'student') {
          history.push('/student/dashboard');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      });
  };

  const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');

    setUser(null);

    // Redirect to login page
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
