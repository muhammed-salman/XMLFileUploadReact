import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

export default ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
    </div>
  );
};
