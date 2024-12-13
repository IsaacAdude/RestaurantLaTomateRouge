// RegisterForm.jsx
import React from "react";
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerterUser } from "../State/Authentication/Action";
import { Navigate } from "react-router-dom";


const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};

export default function RegisterForm({ onCloseRegister, onOpenLogin }) {
  const dispatch=useDispatch()

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    dispatch(registerterUser({ userData: values, Navigate }));
    
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 4,
        borderRadius: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>

      {/* Register Form using Formik */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            
            {/* Full Name Field */}
            <Field
              as={TextField}
              name="fullName"
              label="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Email Field */}
            <Field
              as={TextField}
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Password Field */}
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
            />

            {/* Role Select Field */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                name="role"
                value={values.role}
                onChange={handleChange}
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Owner</MenuItem>
              </Select>
            </FormControl>
            
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Register
            </Button>

            {/* Login Button to Switch Modal */}
            <Typography align="center" sx={{ mt: 3 }}>
              Already have an account?{" "}
              <Button
                onClick={() => {
                  onCloseRegister();  // Close the Register modal
                  onOpenLogin();      // Open the Login modal
                }}
                sx={{ color: "#1e88e5" }}
              >
                Login
              </Button>
            </Typography>

          </Form>
        )}
      </Formik>
    </Box>
  );
}
