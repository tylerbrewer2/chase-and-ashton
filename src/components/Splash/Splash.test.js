import React from 'react';
import renderer from 'react-test-renderer';
import Splash from './Splash';

describe('component structure', () => {
  it('renders with the correct structure', () => {
    const tree = renderer.create(
      <Splash />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

