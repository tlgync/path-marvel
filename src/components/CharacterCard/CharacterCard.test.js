import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharacterCard } from '.';

test('CharacterCard SnapShot', () => {
  const name = '3-D Man';
  const image = {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
  };
  const id = 1011334;
  const tree = renderer.create((
    <Router>
      <CharacterCard name={name} image={image} id={id} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
