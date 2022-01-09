import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoaderScroll } from '.';

test('LoaderScroll Render SnapShot', () => {
  const tree = renderer.create((
    <Router>
      <LoaderScroll />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
