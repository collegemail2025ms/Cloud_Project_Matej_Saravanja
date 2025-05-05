import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

const mockProducts = [
    { id: 1, name: 'Product A', description: 'Desc A', price: 10.0, available: true },
    { id: 2, name: 'Product B', description: 'Desc B', price: 20.0, available: false }
  ];

test('renders product names', () => {
  render(<ProductList products={mockProducts} />);
  expect(screen.getByText('Product A')).toBeInTheDocument();
  expect(screen.getByText('Product B')).toBeInTheDocument();
});
