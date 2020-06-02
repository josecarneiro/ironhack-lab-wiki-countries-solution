import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <ul>
      {props.countries.map((country) => (
        <li>
          <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
