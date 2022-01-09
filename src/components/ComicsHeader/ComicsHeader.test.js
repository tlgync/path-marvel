import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComicsHeader } from '.';

test('ComicsHeader Render SnapShot', () => {
  const onChange = () => {};
  const placeHolder = 'Search Comics';
  const value = 'spiderman';
  const tree = renderer.create((
    <Router>
      <ComicsHeader onChange={onChange} placeHolder={placeHolder} value={value} />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
