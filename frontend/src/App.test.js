import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders the Product Manager heading', () => {
  render(<App />);
  const heading = screen.getByText(/Product Manager/i);
  expect(heading).toBeInTheDocument();
});
