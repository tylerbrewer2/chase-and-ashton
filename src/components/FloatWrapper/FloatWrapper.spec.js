import React from 'react';
import renderer from 'react-test-renderer';

import FloatWrapper from './FloatWrapper';

it('renders correctly', () => {
  const tree = renderer.create(
    <FloatWrapper />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
