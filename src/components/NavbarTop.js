import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class NavbarTop extends React.Component {
  render() {
    return (
    	<Navbar className="navBarTop">
        <Navbar.Header>
          <Navbar.Brand>
          	<a href="/">Les Urnes Vitae Aeternam</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem href="/boutique/">Nos urnes</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/connexion/">Mon compte</NavItem>
          <NavItem href="/panier/"><Glyphicon className="cart" glyph="shopping-cart"/></NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarTop;