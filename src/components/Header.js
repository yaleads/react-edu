import React from 'react';
import { productsPath, contactsPath, cartPath } from '~/src/helpers/routes'
import { NavLink } from "react-router-dom";
import CartButton from '~/src/components/CartButton';


const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to={productsPath()} className='navbar-brand'>React App</NavLink>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className='nav-item'><NavLink exact to={productsPath()} className='nav-link'>Catalog</NavLink></li>
          <li className='nav-item'><NavLink       to={contactsPath()} className='nav-link'>Contacts</NavLink></li>
          <li className='nav-item'><NavLink       to={cartPath()}     className='nav-link'>Cart</NavLink></li>

        </ul>
        <CartButton />

      </div>
    </nav>
  </>
);

export default Header;