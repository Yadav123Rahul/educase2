import React from "react";

const CustomInput = ({name,value, type, placeholder, handleInput, required = true }) => {
  return (
    <div className="input-custom">
      <div className="input-above-text">
        {placeholder}{" "}
        <span style={{ color: "red", fontSize: "20px" }}>
          {required && "*"}
        </span>
      </div>
      <br />
      <input
        type={type}
        value={value}
        name={name}
        className="input"
        placeholder={placeholder}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default CustomInput;
