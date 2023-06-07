import './../App.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
const InputField = ({ input, handleInputChange, handleKeyPress, addItem }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} color='gray'  className="icon_bar" />
      <input
        className="inp_field"
        name="task"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      ></input>
      <FontAwesomeIcon icon={faPlus} color='gray' className="icon_arrow" onClick={addItem} />
   
    </div>
  );
};

export default InputField;