import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import InfoCard from "./components/InfoCard";
import "./App.css";
import Table from "./components/Table";

const App = () => {
  // Hold Country List
  const [countries, setCountries] = useState([]);
  // Hold value of dropbox
  const [value, setValue] = useState("worldwide");
  //  Hold Selected Country Info
  const [countryInfo, setCountryInfo] = useState({});
  // Hold Table Data
  const [tableData, setTableData] = useState([]);

  // Initialize Stats on load

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => setCountryInfo(data));
  }, []);

  // Handle Selection  Change
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setValue(countryCode);

    // Create Url based on Value
    const URL =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  };

  // Get all countries for dropdown
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
          setTableData(data);
        });
    };

    getCountries();
  });

  return (
    <div className="app">
      {/* Header  */}
      <div className="app__header">
        <Typography variant="h3">Covid 19 tracker</Typography>
        <FormControl className="app__dropdown">
          <Select value={value} onChange={onCountryChange} variant="outlined">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country, index) => {
              return (
                <MenuItem key={index + 1} value={country.value}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      {/* Stats */}
      <div className="app__stats">
        <InfoCard
          title="Live Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
        <InfoCard
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
        <InfoCard
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </div>
      {/* Table */}
      <div className="app__table">
        <Card>
          <CardContent>
            <Typography align="center" variant="h4" gutterBottom>
              Live Cases in Countries
            </Typography>
            <Table countries={tableData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
