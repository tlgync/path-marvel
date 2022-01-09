/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import { Link } from 'react-router-dom';

interface IHeader{
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string
  value: string
}

export const ComicsHeader = ({ onChange, placeHolder, value }:IHeader) => (
  <div className="header">
    <div className="col-3">
      <input value={value} onChange={onChange} placeholder={placeHolder} />
      <span className="focus-bg" />
    </div>
    <Link to="/">
      <img src="../img/logo.svg" alt="logo" />
    </Link>
  </div>
);
