import React, { useState } from "react";
import {  TextField, Button, InputAdornment, IconButton, Box, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action";
import { Navigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const LoginForm = ({ onCloseLogin, onOpenRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("Login Form Data:", values);
    dispatch(loginUser({ userData: values, Navigate }));
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 4, bgcolor: "#1e1e1e", color: "#fff", borderRadius: 3 }}>
      <Typography variant="h5" align="center">
        Login
      </Typography>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isValid, isSubmitting, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              as={TextField}
              name="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              error={!!<ErrorMessage name="email" />}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!<ErrorMessage name="password" />}
              helperText={<ErrorMessage name="password" />}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!isValid || isSubmitting}
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>

      <Typography align="center" sx={{ mt: 3 }}>
        Don't have an account?{" "}
        <Button
          onClick={() => {
            if (onCloseLogin) onCloseLogin();
            if (onOpenRegister) onOpenRegister();
          }}
          sx={{ color: "#1e88e5" }}
        >
          Register
        </Button>
      </Typography>
    </Box>
  );
};

export default LoginForm;
