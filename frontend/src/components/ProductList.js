import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';
import { Table, Button, Form } from 'react-bootstrap';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  const fetchProducts = () => {
    getProducts().then(response => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => fetchProducts());
  };

  const filteredProducts = showAvailable
    ? products.filter(product => product.available)
    : products;

  return (
    <div>
      <Form.Check
        type="checkbox"
        label="Show Available Only"
        checked={showAvailable}
        onChange={() => setShowAvailable(!showAvailable)}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.available ? 'Yes' : 'No'}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(product)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
