import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('token');

  return auth ? children : <Navigate to="/" />;
};
export default PrivateRoute;
