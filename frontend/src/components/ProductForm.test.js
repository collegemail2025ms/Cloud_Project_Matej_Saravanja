import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductForm from './ProductForm';

test('renders and submits product form', () => {
  const handleSubmit = jest.fn();

  render(<ProductForm onSubmit={handleSubmit} />);

  // Fill out form fields
  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: 'Test Product' },
  });

  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: 'A great product' },
  });

  fireEvent.change(screen.getByLabelText(/Price/i), {
    target: { value: '49.99' },
  });

  fireEvent.click(screen.getByLabelText(/Available/i));

  // Submit the form
  fireEvent.submit(screen.getByTestId('product-form'));

  expect(handleSubmit).toHaveBeenCalled();
});
