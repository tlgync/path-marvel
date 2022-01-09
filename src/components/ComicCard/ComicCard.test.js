import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComicCard } from '.';

test('ComicCard Render SnapShot', () => {
  const title = 'Avengers: The Initiative (2007) #19';
  const path = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784';
  const pageCount = '32';
  const date = new Date('2008-12-17T00:00:00-0500').toLocaleDateString();
  const price = '2.99';
  const tree = renderer.create((
    <Router>
      <ComicCard title={title} path={path} pageCount={pageCount} date={date} price={price} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
