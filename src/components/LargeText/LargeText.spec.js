import React from 'react';
import renderer from 'react-test-renderer';

import LargeText from './LargeText';

it('renders correctly', () => {
  const tree = renderer.create(
    <LargeText />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
