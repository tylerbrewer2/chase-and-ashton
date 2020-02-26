import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import LinkButton from './LinkButton';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <LinkButton to="/">Test</LinkButton>
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
