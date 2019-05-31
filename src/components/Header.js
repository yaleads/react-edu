import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { productsPath, contactsPath, cartPath } from '~/src/helpers/routes'
import CartButton from '~/src/components/CartButton';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggle = () =>  { this.setState({ isOpen: !this.state.isOpen }); };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={productsPath()}>React App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem><NavLink tag={RRNavLink} exact to={productsPath()} activeClassName="active">Catalog</NavLink></NavItem>
              <NavItem><NavLink tag={RRNavLink}       to={contactsPath()} activeClassName="active">Contacts</NavLink></NavItem>
              <NavItem><NavLink tag={RRNavLink}       to={cartPath()    } activeClassName="active">Cart</NavLink></NavItem>
            </Nav>
          </Collapse>

          <CartButton />
        </Navbar>
      </div>
    );
  }
}

export default Header;