import React from 'react';
import renderer from 'react-test-renderer';

import FullWidthImage from './FullWidthImage';

it('renders correctly', () => {
  const tree = renderer.create(
    <FullWidthImage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
