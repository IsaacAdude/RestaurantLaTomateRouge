import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Modal,
  Box,
  Badge,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Person } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/registerForm";
import { useSelector } from "react-redux";
import { blue } from "@mui/material/colors";


export const Navbar = () => {
  const {auth}=useSelector(store=>store)
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick=()=>{
    if(auth.user?.role==="ROLE_CUSTOMER"){
      navigate("/my-account")
    }
    else{
      navigate("/admin/restaurant")
    }
  }

  // Open Login Modal and redirect to Login Path
  const handleLoginOpen = () => {
    setLoginOpen(true);
    navigate("/account/login");
  };

  const handleLoginClose = () => setLoginOpen(false);

  // Open Register Modal and redirect to Register Path
  const handleRegisterOpen = () => {
    setRegisterOpen(true);
    navigate("/account/register");
  };

  const handleRegisterClose = () => setRegisterOpen(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e90ff" }}>
      <Toolbar>
        {/* Restaurant Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <li onClick={()=>navigate("/")}
            className="logo font-semibold text-gray-300 text-2xl"
            style={{ listStyleType: "none" }}
          >
            La Tomate Rouge
          </li>
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/restaurant-details">
          Restaurant Details
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>

        {/* Icon Section */}
        {/* Icon Section */}
        
        <div className="flex items-center space-x-2 lg:space-x-5">
  {auth.user ? (
    <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: blue.A400 }}>
      {auth.user?.fullName[0].toUpperCase()}
    </Avatar>
  ) : (
    <IconButton color="inherit" onClick={handleLoginOpen}>
      <Person />
    </IconButton>
  )}

  <IconButton color="inherit">
    <Badge color="error" badgeContent={4}>
      <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
    </Badge>
  </IconButton>
</div>


      </Toolbar>

      {/* Login Modal */}
      <Modal open={loginOpen} onClose={handleLoginClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <LoginForm
            onCloseLogin={handleLoginClose}
            onOpenRegister={() => {
              handleLoginClose();
              handleRegisterOpen();
            }}
          />
        </Box>
      </Modal>

      {/* Register Modal */}
      <Modal open={registerOpen} onClose={handleRegisterClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <RegisterForm
            onCloseRegister={handleRegisterClose}
            onOpenLogin={() => {
              handleRegisterClose();
              handleLoginOpen();
            }}
          />
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Navbar;
