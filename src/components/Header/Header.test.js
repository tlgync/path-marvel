import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '.';

test('Header Render SnapShot', () => {
  const onChange = () => {};
  const handleKeyPress = () => {};
  const handleSearch = () => {};
  const placeHolder = '';
  const value = '';

  const tree = renderer.create((
    <Router>
      <Header
        onChange={onChange}
        handleKeyPress={handleKeyPress}
        handleSearch={handleSearch}
        placeHolder={placeHolder}
        value={value}
      />
    </Router>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
