import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartContext from '../context/cart-context';

function Navigation({ toggleSidePanel }) {
  const { cartProducts } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Ecommerce
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/products">
          products
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link onClick={() => toggleSidePanel()}>
          <FontAwesomeIcon color="#fff" icon={faShoppingCart} />
          <Badge pill variant={cartProducts.length && 'danger'}>
            {cartProducts.length}
          </Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

Navigation.propTypes = {
  toggleSidePanel: PropTypes.func.isRequired
};

export default Navigation;
