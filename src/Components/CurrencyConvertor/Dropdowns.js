import React from "react";

const label = {
  width: "325px",
  color: "white",
  fontSize: "21px",
};

/**
 * Dropdown Menu Component
 * @param {String} labelName - String containing label Name
 * @param {Function} handleChange -Function to handle change whenever currency option is changed
 * @param {String} value- currently selected value
 * @param {Array} language -Array containing all the dropdown options
 * @returns
 */

function Dropdowns({ labelName, handleChange, value, language }) {
  return (
    <>
      <label className="dropdown" style={label}>
        {labelName}
        <select
          className="form-select bg-dark custom-select form-select-lg text-white border-dark shadow"
          value={value}
          onChange={(event) => handleChange(event)}
        >
          {language.map((languages) => (
            <option key={languages.code}>{languages.code.toUpperCase()}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Dropdowns;
