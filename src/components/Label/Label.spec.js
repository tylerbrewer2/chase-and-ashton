import React from 'react';
import renderer from 'react-test-renderer';

import Label from './Label';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Label identifier="identifier">
        Test value
      </Label>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
