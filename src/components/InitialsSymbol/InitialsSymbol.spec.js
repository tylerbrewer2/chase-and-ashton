import React from 'react';
import renderer from 'react-test-renderer';

import InitialsSymbol from './InitialsSymbol';

it('renders correctly', () => {
  const tree = renderer.create(
    <InitialsSymbol />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
