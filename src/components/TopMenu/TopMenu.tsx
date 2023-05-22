import React, { useEffect, useState } from 'react';
import moment from 'moment';
import clock from '../../images/clock.png';
import './TopMenu.scss';

export const TopMenu: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="menu-container">
      <div className="menu-item">
        <span className="menu-item__text">Today</span>
      </div>
      <div className="menu-item">
        <p className="menu-item__current-day">
          {moment().format('DD MMM, YYYY')}
        </p>
        <img
          className="menu-item__clock-icon"
          src={clock}
          height="15px"
          alt="clock"
        />
        <p className="menu-item__current-time">
          {moment(time.getTime()).format('LT')}
        </p>
      </div>
    </div>
  );
};
