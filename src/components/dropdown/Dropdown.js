import React, { useState } from "react";
import Style from "./style.module.css";

const MultiSelect = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    let newSelectedOptions = [...selectedOptions];

    if (selectedIndex === -1) {
      newSelectedOptions = [...selectedOptions, option];
    } else {
      newSelectedOptions.splice(selectedIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className={Style.custom_multiselect}>
      <div className={Style.selected_options} onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? (
          selectedOptions.join(", ")
        ) : (
          <span className={Style.placeholder}>Select options...</span>
        )}
        <span className={Style.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className={Style.options}>
          {options.map((option) => (
            <div
              key={option}
              className={`${Style.option} ${
                selectedOptions.includes(option) ? `${Style.selected}` : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
