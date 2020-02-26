import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import RSVPSection from './RSVPSection';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <RSVPSection />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
