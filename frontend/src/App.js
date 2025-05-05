import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEdit = (product) => setEditingProduct(product);
  const handleSuccess = () => {
    setEditingProduct(null);
    setRefreshKey(prev => prev + 1); // force refresh product list
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Product Manager</h1>
      <Row>
        <Col md={6}>
          <ProductForm product={editingProduct} onSuccess={handleSuccess} />
        </Col>
        <Col md={6}>
          <ProductList key={refreshKey} onEdit={handleEdit} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
