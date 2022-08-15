import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Домашня</Link>
      </li>
      <li>
        <Link to="/login">Логін</Link>
      </li>
      <li>
        <Link to="/posts">Пости</Link>
      </li>
      <li>
        <Link to="/dashboard">Особистий кабінет</Link>
      </li>
    </ul>
  );
};

export default NavBar;
