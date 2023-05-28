//CORE
import React, { useState } from "react";
import {
  Card,
  Typography,
  Box,
  TextField,
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

//ICON
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//CUSTOM
import { LoginWrapper } from "./Login.style";
import { useAuth } from "Context/AuthContext";
import { Link } from "react-router-dom";
import { URL_RESET_PASSWORD, URL_SIGN_UP } from "Components/Helpers/Paths";

const LOGIN_VALIDATION = Yup.object({
  email: Yup.string()
    .required("Please enter your email id")
    .email("Please enter an valid email id"),
  password: Yup.string().required("Please enter your password"),
});

const FORM_INIT_VALUES = {
  email: "",
  password: "",
};

const Login = () => {
  const { SignInUser, signInWithGoogle } = useAuth();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleFromSubmit = async (values, { resetForm }) => {
    try {
      const response = await SignInUser(values?.email, values?.password);

      if (response) {
        console.log("login response", response);
      }
    } catch (error) {
      console.log("login comp handleFromSubmit func", error);
      resetForm("");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithGoogle();
      if (response) {
        console.log("login comp handleGoogleLogin", response);
      }
    } catch (error) {
      console.log("login comp handleGoogleLogin func", error);
    }
  };

  return (
    <LoginWrapper>
      <Card className="card">
        <Typography className="title">Login</Typography>
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
              <Box className="field-wrapper">
                <TextField
                  name="password"
                  type={passwordVisibility ? "text" : "password"}
                  variant="standard"
                  label="Password"
                  fullWidth
                  value={values?.password}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      handleSubmit();
                    }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setPasswordVisibility((prev) => !prev)}
                        >
                          {passwordVisibility ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText error>
                  {touched?.password && errors?.password}
                </FormHelperText>
              </Box>

              <Button
                variant="contained"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Link to={URL_RESET_PASSWORD} className="forgot-password">
                Forgot Password?
              </Link>
            </Box>
          )}
        </Formik>
      </Card>
      <Typography className="sign-up-msg">
        Don't have an account? <Link to={URL_SIGN_UP}>Sign Up</Link>
      </Typography>
      <Button onClick={handleGoogleLogin}>Login with google</Button>
    </LoginWrapper>
  );
};

export default Login;
