import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ getValue }) => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("worldwide");

  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };

    getCountries();
  }, []);

  const handleCountryChange = async (e) => {
    setValue(e.target.value);
    getValue(e.target.value);
  };

  return (
    <div className="header">
      <Typography variant="h2">Covid 19 Tracker</Typography>
      <FormControl className="header__dropdown">
        <Select variant="outlined" onChange={handleCountryChange} value={value}>
          <MenuItem value="worldwide">WorldWide</MenuItem>
          {countries.map((country) => {
            return <MenuItem value={country.value}>{country.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
