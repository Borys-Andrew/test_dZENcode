import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import avatar from '../../images/avatar.jpg';
import settings from '../../images/settings.png';
import './AsideBar.scss';

export const AsideBar: React.FC = () => {
  return (
    <div className="aside-bar">
      <div className="user-container">
        <img
          className="user-image"
          src={avatar}
          alt="user-avatar"
        />
        <div className="user-btn">
          <img
            src={settings}
            width="15px"
            alt="icon"
          />
        </div>
      </div>
      <div className="navList">
        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/orders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/groups"
        >
          Groups
        </NavLink>
        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => (
            cn('navLink', { navLink__active: isActive })
          )}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};
