import React from 'react';
import renderer from 'react-test-renderer';

import Row from './Row';

it('renders correctly', () => {
  const tree = renderer.create(
    <Row middle>
      Test children
    </Row>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
