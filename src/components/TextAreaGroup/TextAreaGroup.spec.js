import React from 'react';
import renderer from 'react-test-renderer';

import TextAreaGroup from './TextAreaGroup';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TextAreaGroup
        labelText="Test label"
        value="Test value"
        identifier="identifier"
        onChange={jest.fn()}
        required
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
