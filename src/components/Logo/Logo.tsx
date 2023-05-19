import React from 'react';
import './Logo.scss';
import logo from '../../images/logo.png';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <span className="logo-text">inventory</span>
    </div>
  );
};
