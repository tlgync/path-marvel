import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComicTitle } from '.';

test('ComicTitle Render SnapShot', () => {
  const title = 'Avengers: The Initiative (2007) #19';
  const tree = renderer.create((
    <Router>
      <ComicTitle title={title} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
