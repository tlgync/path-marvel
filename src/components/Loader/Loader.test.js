import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loader } from '.';

test('Loader Render SnapShot', () => {
  const tree = renderer.create((
    <Router>
      <Loader />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
