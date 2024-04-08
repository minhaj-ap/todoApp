import React from 'react';
import "../index.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>The page you requested could not be found.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;
