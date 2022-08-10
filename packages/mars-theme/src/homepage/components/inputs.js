import { styled } from "frontity";
import React, { useState } from "react";

// Styling a regular HTML input

const StyledInput = styled("input")`
  display: flex;
  margin: 0px;
  width: 90%;
  border: 1px solid lightblue;
`;
// Creating a custom hook
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}
// Usage in App
function CustomInput({ placeholder, style }) {
  const inputProps = useInput();
  return (
    <div style={{ padding: "0.5rem" }}>
      <StyledInput
        {...inputProps}
        placeholder={placeholder}
        minlength="3"
        maxlength="50"
        style={{ ...style }}
      />
    </div>
  );
}

function TextAreaCustom({ children }) {
  return (
    <div className="ba" style={{ padding: "0.7rem" }}>
      <textarea
        id="aii-2"
        name="comment"
        cols="30"
        rows="4"
        placeholder="Please leaves us feedback"
        style={{
          border: "1px solid lightblue",
          width: "90%",
          padding: "1.2rem",
          fontSize: "1rem",
          margin: "1rem 0",
        }}
      >
        {children}
      </textarea>
    </div>
  );
}

export { CustomInput, TextAreaCustom };
