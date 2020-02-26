import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NavItem from './NavItem';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <NavItem to='test'>Test item</NavItem>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
