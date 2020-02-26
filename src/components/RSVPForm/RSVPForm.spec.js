import React from 'react';
import renderer from 'react-test-renderer';

import RSVPForm from './RSVPForm';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <RSVPForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
