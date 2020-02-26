import React from 'react';
import renderer from 'react-test-renderer';

import Form from './Form';

describe('component structure', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Form
        onSubmit={jest.fn()}
        title="Test title"
        submitButtonText="Test message"
        requestResponse={{
          status: 'error',
          message: 'Test message',
        }}
      >
        Test child
      </Form>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
