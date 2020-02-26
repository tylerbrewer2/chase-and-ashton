import React from 'react';
import renderer from 'react-test-renderer';

import Flash from './Flash';

describe('component structure', () => {
  it('renders successful flash correctly', () => {
    const tree = renderer.create(
      <Flash status="success">
        Successful request.
      </Flash>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders unsuccessful flash correctly', () => {
    const tree = renderer.create(
      <Flash status="error">
        There as an error during the request.
      </Flash>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

})