//CORE
import React, { useState } from "react";
import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

//ICON
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//CUSTOM
import { SignUpWrapper } from "./SignUp.style";


const SIGN_UP_INIT_VALUE = {
  email: "",
  password: "",
  confirmPassword: "",
};

const FORM_VALIDATION = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Please enter valid email id"),
  password: Yup.string().required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please enter your password")
    .oneOf([Yup.ref("password"), null], "Password Do not match"),
});

const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("🚀 ~ file: SignUp.jsx:13 ~ handleSubmit ~ values:", values);
  };

  return (
    <SignUpWrapper className="flex f-v-center f-h-center">
      <Box className="form-card flex f-column ">
        <Typography className="title">Sign up</Typography>
        <Formik
          initialValues={SIGN_UP_INIT_VALUE}
          validationSchema={FORM_VALIDATION}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <>
              <Box className="field-wrapper">
                <TextField
                  name="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                />
                <FormHelperText error>
                  {touched?.email && errors?.email}
                </FormHelperText>
              </Box>
              <Box className="field-wrapper">
                <TextField
                  name="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                  type={passwordVisibility ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
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
              <Box className="field-wrapper">
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="standard"
                  fullWidth
                  type={confirmPasswordVisibility ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setConfirmPasswordVisibility((prev) => !prev)
                          }
                        >
                          {confirmPasswordVisibility ? (
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
                  {touched?.confirmPassword && errors?.confirmPassword}
                </FormHelperText>
              </Box>
              <Button variant="contained" onClick={handleSubmit}>
                Sign Up
              </Button>
            </>
          )}
        </Formik>
        <Box className='flex f-h-center sub-title-wrapper'>
          <Typography className="sub-title">
            Already have an account? 
          </Typography>
          <Typography className="sub-title url">LogIn</Typography>
        </Box>
      </Box>
    </SignUpWrapper>
  );
};

export default SignUp;
