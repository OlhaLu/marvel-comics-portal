import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <div>
    <img src="../../assets/logo.png" alt="logo" />
    <ul>
      <li>
        <NavLink exact to={routes.COMICS_PAGE}>
          Comics
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.CHARACTERS_PAGE}>Characters</NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
