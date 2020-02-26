import React from 'react';
import renderer from 'react-test-renderer';

import SmallHeader from './SmallHeader';

it('renders correctly', () => {
  const tree = renderer.create(
    <SmallHeader>
      Test header
    </SmallHeader>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
