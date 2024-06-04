import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface RoleBasedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  allowedRoles: string[]; // Roles permitidos para acceder a la ruta
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ component: Component, allowedRoles, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        // Verifica si el usuario tiene un rol permitido
        if (user && allowedRoles.includes(user.role)) {
          return <Component {...props} />;
        } else {
          // Si el usuario no tiene un rol permitido, redirige a una página de acceso no autorizado
          return <Redirect to="/unauthorized" />;
        }
      }}
    />
  );
};

export default RoleBasedRoute;
