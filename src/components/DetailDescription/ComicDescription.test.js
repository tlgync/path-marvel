import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { DetailDescription } from '.';

test('DetailDescription Render SnapShot', () => {
  const description = '-';
  const tree = renderer.create((
    <Router>
      <DetailDescription description={description} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
