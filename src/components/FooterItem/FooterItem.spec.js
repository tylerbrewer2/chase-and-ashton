import React from 'react';
import renderer from 'react-test-renderer';

import FooterItem from './FooterItem';

it('renders correctly', () => {
  const tree = renderer.create(
    <FooterItem />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
