// Projects.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './Projects';

test('renders Projects component', () => {
  render(
    <Router>
      <Projects />
    </Router>
  );

  const heading = screen.getByRole('heading', { name: /projects/i });
  expect(heading).toBeInTheDocument();

  const links = screen.getAllByRole('link', { name: /view project/i });
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveAttribute('href', '/project1');
  expect(links[1]).toHaveAttribute('href', '/project2');
});