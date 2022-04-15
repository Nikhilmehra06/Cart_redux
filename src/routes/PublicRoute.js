import React from 'react';
import { Navigate } from 'react-router';

const PublicRoute = ({ children }) => {
  const auth = localStorage.getItem('token');

  return !auth ? children : <Navigate to="/" />;
};

export default PublicRoute;
