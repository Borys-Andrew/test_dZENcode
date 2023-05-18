import React from 'react';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src="./images/logo.png" alt="logo" />
      <span className="logo-text">inventory</span>
    </div>
  );
};
