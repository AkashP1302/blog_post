import React from "react";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import * as Yup from "yup";
import HiddenRender from "../editors/hiddenRender";
import FormButton from "../editors/buttonComponent";
import TextInput from "../editors/TextInput";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const navigate = useNavigate();

  let regexMobile = /^[6-9]\d{9}$/gi;

  const formik = useFormik({
    initialValues: {
      userPhone: "",
      password: "",
    },
    validationSchema: Yup.object({
      userPhone: Yup.string()
        .matches(regexMobile, "Invalid email or phone")
        .required("Required"),
      password: Yup.string().min(5, "Required").required("Required"),
    }),
    onSubmit: (values) => {
      if (String(formik.values.userPhone) && formik.values.password) {
        loginHandler();
      } else {
        alert("please enter Invalid Email OR Password");
      }
    },
  });

  const loginHandler = async () => {
    if (
      String(formik.values.userPhone).match(regexMobile) &&
      formik.values.password
    ) {
      try {
        navigate("/otp");
      } catch (error) {
        console.log("password error", error);
      }
    }
  };

  const handleSetOnFocus = (e) => {
    const fieldName = e.target.name;
    formik.setFieldTouched(fieldName, true);
  };

  return (
    <>
      <Grid container sx={{ marginTop: 5 }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            bgcolor="#fff"
            padding="20px"
            borderRadius="20px"
            height={"450px"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // padding: "60px 0px 0 80px",
                flexWrap: "inherit",
              }}
            >
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#2F4F4F",
                  margin: "35px 0px",
                  textAlign: "left",
                }}
              >
                Login,
              </h1>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "24px",
                  color: "#2F4F4F",
                  margin: "-35px 0px 50px 0px",
                  textAlign: "left",
                }}
              >
                Welcome back
              </p>

              <form>
                <TextInput
                  inputLabelStyle={{
                    top: "-13px",
                    color: "#2f4f4f",
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                  }}
                  label="Phone no"
                  placeholder="Enter your phone no"
                  id="userPhone"
                  name="userPhone"
                  type="number"
                  inputStyle={{
                    fontWeight: 500,
                    fontSize: "15px",
                    fontFamily: "Poppins",
                    opacity: "0.75",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                  formStyle={{ width: "100%" }}
                  onChange={formik.handleChange}
                  onFocus={handleSetOnFocus}
                  value={formik.values.userPhone}
                  error={
                    formik.touched.userPhone && Boolean(formik.errors.userPhone)
                  }
                  required={true}
                />
                {formik.touched.userPhone && formik.errors.userPhone ? (
                  <p
                    style={{ color: "red", fontSize: "12px", marginTop: "0px" }}
                  >
                    {formik.errors.userPhone}
                  </p>
                ) : null}
                <HiddenRender
                  label="Password"
                  placeholder={"Enter your password"}
                  style={{ width: "100%", margin: "30px 0px 0px 0" }}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onFocus={handleSetOnFocus}
                  required={true}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p
                    style={{
                      color: "red",
                      marginBottom: "30px",
                      fontSize: "12px",
                      marginTop: "0px",
                    }}
                  >
                    {formik.errors.password}
                  </p>
                ) : null}

                <FormButton
                  label="Login"
                  type="submit"
                  style={{
                    background: "#FFD58E",
                    borderRadius: "35.5px",
                    marginTop: "30px",
                    width: "100%",
                    height: "46px",
                    color: "#2F4F4F",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={formik.handleSubmit}
                />
              </form>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}

export default LoginScreen;
