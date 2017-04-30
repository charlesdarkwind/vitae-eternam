import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

const NavbarTop = () => (	
	<Navbar className="navBarTop">
    <Navbar.Header>
      <Navbar.Brand>
      	<a href="/">Les Urnes Vitam Aeternam</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
      <NavItem href="/store/">Nos urnes</NavItem>
    </Nav>
    <Nav pullRight>
        <NavItem href="/connexion/">Connexion</NavItem>
        <NavItem href="/panier/"><Glyphicon className="cart" glyph="shopping-cart"/></NavItem>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavbarTop.contextTypes = {
	router: React.PropTypes.object
}

export default NavbarTop;