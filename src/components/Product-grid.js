import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';
import ProductCard from './Product-card';

function ProductGrid({ products }) {
  if (!products) {
    return <p>Loading products... Hopefully</p>;
  }

  return (
    <>
      {products.map(({ id, title, image, price, description }) => (
        <Col xs={12} sm={6} md={6} lg={4} key={`product-card-${id}`}>
          <ProductCard
            data-testid="product-card"
            title={title}
            image={image}
            price={price}
            description={description}
          />
        </Col>
      ))}
    </>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductGrid;
