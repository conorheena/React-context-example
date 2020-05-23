import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Button, Col } from 'react-bootstrap';

import CartContext from '../context/cart-context';

function SidePanel({ isOpen }) {
  const { cartProducts, dispatch } = useContext(CartContext);

  return (
    <div
      style={{
        width: '500px',
        height: '100%',
        zIndex: 1,
        backgroundColor: 'white',
        position: 'fixed',
        top: '56px',
        right: isOpen ? 0 : '-500px',
        transition: '0.5s',
        padding: '50px',
      }}
    >
      {cartProducts.length ? (
        <h2>Your items are:</h2>
      ) : (
        <h2>You have no items</h2>
      )}

      {cartProducts.map(({ id, title, price }) => (
        <Col xs={12} key={`sidepanel-${id}`}>
          <p style={{ display: 'inline-block' }}>{`${title} - £${price}`}</p>
          <Button
            style={{ display: 'inline-block', margin: '20px' }}
            variant="danger"
            onClick={() => {
              dispatch({
                type: 'REMOVE_FROM_CART',
                product: { id, title, price },
              });
            }}
          >
            Remove
          </Button>
        </Col>
      ))}
    </div>
  );
}

SidePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default SidePanel;
