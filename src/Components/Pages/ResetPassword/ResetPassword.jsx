//CORE
import React from "react";
import {
  Box,
  Button,
  Card,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

//CUSTOM
import { ResetPasswordWrapper } from "./ResetPassword.style";
import { Link } from "react-router-dom";
import { URL_LOGIN } from "Components/Helpers/Paths";
import { useAuth } from "Context/AuthContext";

const FORM_INIT_VALUES = {
  email: "",
};

const LOGIN_VALIDATION = Yup.object({
  email: Yup.string()
    .required("Please enter your email id")
    .email("Please enter an valid email id"),
});

const ResetPassword = () => {
  const { resetPasswordHandler } = useAuth();

  const handleFromSubmit = async (values) => {
    try {
      const response = await resetPasswordHandler(values?.email);
      if (response) {
        console.log(
          "resetPassword comp handleFormSubmit func response",
          response
        );
      }
    } catch (error) {
      console.log("resetPassword comp handleFormSubmit func error", error);
    }
  };

  return (
    <ResetPasswordWrapper>
      <Card className="card">
        <Typography className="title">reset password</Typography>
        <Formik
          initialValues={FORM_INIT_VALUES}
          onSubmit={handleFromSubmit}
          validationSchema={LOGIN_VALIDATION}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldValue,
          }) => (
            <Box className="form-wrapper">
              <Box className="field-wrapper">
                <TextField
                  name="email"
                  variant="standard"
                  label="E-mail"
                  fullWidth
                  value={values?.email}
                  onChange={handleChange}
                />
                <FormHelperText error>
                  {touched?.email && errors?.email}
                </FormHelperText>
              </Box>
              <Button
                variant="contained"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
              <Typography className="sign-in-msg">
                Already have an account? <Link to={URL_LOGIN}>login</Link>
              </Typography>
            </Box>
          )}
        </Formik>
      </Card>
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
