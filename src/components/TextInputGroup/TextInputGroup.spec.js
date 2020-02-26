import React from 'react';
import renderer from 'react-test-renderer';

import TextInputGroup from './TextInputGroup';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextInputGroup
        identifier="identifier"
        value="test value"
        onChange={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
