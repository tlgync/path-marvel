import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComicDetailRow } from '.';

test('ComicDetailRow Render SnapShot', () => {
  const title = 'Page Count';
  const content = '32';
  const tree = renderer.create((
    <Router>
      <ComicDetailRow title={title} content={content} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
