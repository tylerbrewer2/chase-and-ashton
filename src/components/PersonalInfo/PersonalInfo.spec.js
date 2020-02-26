import React from 'react';
import renderer from 'react-test-renderer';

import PersonalInfo from './PersonalInfo';

it('renders correctly', () => {
  const tree = renderer.create(
    <PersonalInfo />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
