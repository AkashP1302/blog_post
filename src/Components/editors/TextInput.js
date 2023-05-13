import React from "react";
import { FormControl, Input, InputLabel } from "@mui/material";
const TextInput = (props) => {
  const {
    disabled = false,
    required = false,
    label,
    onChange,
    value,
    inputStyle,
    inputLabelStyle,
    formStyle,
    placeholder,
    type,
    id,
    name,
    error,
    onFocus,
  } = props;

  return (
    <React.Fragment>
      <FormControl variant="standard" style={formStyle}>
        <>
          <InputLabel htmlFor="component-simple" style={inputLabelStyle}>
            {required ? (
              <>
                {label} <span style={{ color: "red" }}>*</span>
              </>
            ) : (
              <>{label}</>
            )}
          </InputLabel>
          <Input
            onFocus={onFocus}
            id={id}
            name={name}
            startAdornment={<span></span>}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            sx={inputStyle}
            type={type}
            error={error}
          />
        </>
      </FormControl>
    </React.Fragment>
  );
};

export default TextInput;
