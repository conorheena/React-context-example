import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Card } from 'react-bootstrap';

import CartContext from '../context/cart-context';

function ProductCard({ id, title, image, price, description }) {
  const { dispatch } = useContext(CartContext);
  const [itemInCart] = useState(false);

  return (
    <Card style={{ marginTop: '15px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`£${price}`}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="success"
          disabled={itemInCart}
          onClick={() =>
            dispatch({
              type: 'ADD_TO_CART',
              product: { id, title, image, price, description },
            })}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
