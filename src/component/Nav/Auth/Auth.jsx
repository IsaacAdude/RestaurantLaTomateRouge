import React from "react";
import { Box } from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./registerForm";


const Auth = ({ formType, onClose, onSwitchToRegister, onSwitchToLogin }) => {
  return (
    <Box sx={{ p: 4 }}>
      {formType === "register" ? (
        <RegisterForm
          onCloseRegister={() => {
            onClose();
            onSwitchToLogin();
          }}
          onOpenLogin={() => {
            onClose();
            onSwitchToLogin();
          }}
        />
      ) : (
        <LoginForm
          onCloseLogin={() => {
            onClose();
            onSwitchToRegister();
          }}
          onOpenRegister={() => {
            onClose();
            onSwitchToRegister();
          }}
        />
      )}
    </Box>
  );
};

export default Auth;
