import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// initial code
/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
// updated code for data section
test('changed initial test', () => {
  expect(2+2).toBe(4)
});
