import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './TextInput';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextInput
        status="success"
        identifier="test"
        onChange={jest.fn()}
        value='Test'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
