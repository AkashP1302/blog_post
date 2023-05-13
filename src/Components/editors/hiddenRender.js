import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const HiddenRender = (props) => {
  const {
    label = "",
    value,
    placeholder,
    style = { fontWeight: 600, fontFamily: "Poppins", marginTop: "20px" },
    onChange,
    name,
    required = false,
    onFocus,
    error,
    labelStyle = {
      top: "-13px",
      color: "#2F4F4F",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontWeight: "600",
    },
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      id="standard-password-input"
      required={required}
      InputLabelProps={{
        shrink: true,
        sx: labelStyle,
      }}
      style={style}
      name={name}
      error={error}
      placeholder={placeholder}
      variant="standard"
      label={label}
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      InputProps={{
        style: {
          fontWeight: 600,
          fontSize: "14px",
          fontFamily: "Poppins",
          opacity: 0.9,
        },
        // <-- This is where the toggle button is added.
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              style={{ padding: 0 }}
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? (
                <VisibilityIcon style={{ color: "rgb(33, 54, 42)" }} />
              ) : (
                <VisibilityOffIcon style={{ color: "rgb(33, 54, 42)" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export default HiddenRender;
