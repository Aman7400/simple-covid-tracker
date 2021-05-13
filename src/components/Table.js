import React from "react";
import "./Table.css";

const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map((country, index) => {
        return (
          <tr key={index}>
            <td>{country.country}</td>
            <td>{country.cases}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Table;
