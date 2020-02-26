import React from 'react';
import renderer from 'react-test-renderer';

import BodyText from './BodyText'

it('renders correctly', () => {
  const tree = renderer.create(
    <BodyText>
      Hello
    </BodyText>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});