/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';

interface IHeader{
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch?: React.MouseEventHandler<HTMLElement>;
  placeHolder: string
  value: string
}

export const Header = ({ onChange, placeHolder, value, handleSearch, handleKeyPress }:IHeader) => (
  <div className="header">
    <div className="col-3">
      <input onKeyPress={handleKeyPress} value={value} onChange={onChange} placeholder={placeHolder} />
      <span className="focus-bg" />
      <button onClick={handleSearch} type="button">Search</button>
    </div>
    <Link to="/" onClick={() => window.location.reload()}>
      <img src="../img/logo.svg" alt="logo" />
    </Link>
  </div>
);
