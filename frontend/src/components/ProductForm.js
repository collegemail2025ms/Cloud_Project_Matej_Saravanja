import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api';
import { Form, Button } from 'react-bootstrap';

const ProductForm = ({ product, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    available: true,
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = product ? updateProduct(product.id, formData) : createProduct(formData);
    action.then(() => {
      setFormData({ name: '', description: '', price: '', available: true });
      onSuccess();
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter product description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAvailable">
        <Form.Check
          type="checkbox"
          label="Available"
          name="available"
          checked={formData.available}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {product ? 'Update' : 'Create'} Product
      </Button>
    </Form>
  );
};

export default ProductForm;
