import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from '.';

test('renders learn react link', () => {
  const dateYear = "2020"
  const { getByText } = render(<Copyright dateYear={dateYear} />);
  const linkElement = getByText(/Copyright © 2020/i);
  expect(linkElement).toBeInTheDocument();
});