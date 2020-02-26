import React from 'react';
import renderer from 'react-test-renderer';

import TextArea from './TextArea';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextArea
        identifier="identifier"
        value="test value"
        onChange={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
