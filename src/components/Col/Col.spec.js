import React from 'react';
import renderer from 'react-test-renderer';

import Col from './Col';

it('renders correctly', () => {
  const tree = renderer.create(
    <Col desktopWidth={6}>
      <p>Hello</p>
    </Col>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});