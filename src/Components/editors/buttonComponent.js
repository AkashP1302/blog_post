import { Button, createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
const FormButton = (props) => {
  const { label = "", style, onClick, type, labelStyle, startIcon } = props;
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "blue",
            "&.Mui-disabled": {
              pointerEvents: "unset",
              cursor: "not-allowed",
            },
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button
          startIcon={startIcon}
          style={style}
          onClick={onClick}
          type={type}
        >
          <span style={labelStyle}>{label || ""}</span>
        </Button>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default FormButton;
