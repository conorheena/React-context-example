import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import productData from '../mock_data/products';
import ProductGrid from '../components/Product-grid';

function PLP() {
  const [products] = useState(productData);

  return (
    <Container className="plpPage">
      <Row>
        <h2 data-testid="PLP-header">PLP page</h2>
      </Row>
      <Row>
        <ProductGrid products={products} />
      </Row>
    </Container>
  );
}

export default PLP;
