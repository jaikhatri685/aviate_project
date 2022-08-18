import React from 'react'

const label = {
  "width": "325px",
  "color": "white",
  "fontSize": "21px"
}
function Dropdowns({ labelName, handleChange, value, language}) {
  return (

    <>
      <label className="dropdown" style={label}>
        {labelName}
        <select
          className='form-select bg-dark custom-select form-select-lg text-white border-dark shadow'
          value={value}
          onChange={event => handleChange(event)}
        >
          {language.map(languages =>
            <option key={languages.code}>{languages.code.toUpperCase()}</option>
          )}
        </select>
      </label>
    </>
  )
}


export default Dropdowns