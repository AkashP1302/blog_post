import * as React from "react";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormButton from "../editors/buttonComponent";

export default function OtpScreen() {
  const [otp, setOtp] = React.useState(new Array(6).fill(""));
  const [currentOTPIndex, setCurrentOTPIndex] = React.useState(0);
  const [otpError, setOtpError] = React.useState(false);

  const handelOtpChange = (e, index) => {
    const { maxLength, value, name, select } = e.target;
    if (isNaN(value)) return false;
    setCurrentOTPIndex(index);
    setOtp([...otp.map((d, idx) => (idx === currentOTPIndex ? value : d))]);

    // ============focus on next field=====================
    if (value.length >= maxLength) {
      if (currentOTPIndex < 6) {
        const nextfield = document.querySelector(
          `input[name=field-${currentOTPIndex + 1}]`
        );
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
    // =================focus on back field====================
    if (value.length === 0) {
      if (currentOTPIndex < 6) {
        const backfield = document.querySelector(
          `input[name=field-${currentOTPIndex - 1}]`
        );
        if (backfield !== null) {
          backfield.focus();
        }
      }
    }
    if (index <= 4) {
      setOtpError(true);
    } else {
      setOtpError(false);
    }
  };

  const handleOnKeyDown = ({ key }, index) => {
    setCurrentOTPIndex(index);
    if (key === "Backspace") {
      const backfield = document.querySelector(
        `input[name=field-${currentOTPIndex - 1}]`
      );
      if (backfield !== null) {
        backfield.focus();
      }
    }
  };

  const navigate = useNavigate();

  const verifyOtpHandler = async () => {
    const num = otp.map((item) => parseInt(item)).join("");

    if (num.length === 6) {
      try {
        navigate("/blog");
      } catch (error) {
        console.log("otp error", error);
      }
    } else {
      setOtpError(true);
    }
  };

  return (
    <div>
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            bgcolor="#fff"
            padding="20px"
            borderRadius="20px"
            height={"400px"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "50px 40px 0 20px",
                flexWrap: "inherit",
                height: "70%",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#2F4F4F",
                  margin: "15px 0px",
                }}
              >
                Almost there,
              </h1>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "23px",
                  color: "#2F4F4F",
                  margin: "10px 0px",
                }}
              >
                Please enter one-time password to verify your account
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "17px",
                  color: "#2F4F4F",
                  margin: "10px 0px",
                }}
              >
                OTP has been sent <br></br>
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {otp.map((item, i) => {
                  return (
                    <div key={i}>
                      <TextField
                        id="standard-basic"
                        variant="standard"
                        sx={{
                          width: "30px",
                          padding: "10px",
                          textAlign: "center",
                        }}
                        inputProps={{
                          maxLength: 1,
                          style: { textAlign: "center" },
                        }}
                        name={`field-${i}`}
                        value={item}
                        onChange={(e) => handelOtpChange(e, i)}
                        onKeyDown={(e) => handleOnKeyDown(e, i)}
                        autoFocus={i === 0}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                  );
                })}
              </div>
              <br></br>
              {otpError ? (
                <p
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "red",
                    marginTop: "-25px",
                    fontSize: "12px",
                  }}
                >
                  {"Please enter correct OTP"}
                </p>
              ) : (
                ""
              )}

              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <FormButton
                  label={"Validate"}
                  type="submit"
                  style={{
                    background: "#FFD58E",
                    borderRadius: "35.5px",
                    width: "100%",
                    height: "36px",
                    color: "#2F4F4F",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={verifyOtpHandler}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <p
                  // onClick={resendOtpHandler}
                  style={{
                    color: "#000000",
                    fontSize: "15px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Resend OTP
                </p>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={4}></Grid>
    </div>
  );
}
