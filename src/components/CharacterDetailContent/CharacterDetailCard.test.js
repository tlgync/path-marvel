import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharacterDetailContent } from '.';

test('CharacterDetailContent SnapShot', () => {
  const name = '3-D Manw';
  const path = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784';
  const tree = renderer.create((
    <Router>
      <CharacterDetailContent name={name} path={path} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
