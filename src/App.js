import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./component/Nav/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { Home } from "./component/Nav/Home/Home";
import RestaurantDetails from "./component/Nav/Restaurant/RestaurantDetails";
import Cart from "./component/Nav/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./component/Nav/Auth/Auth";
import LoginForm from "./component/Nav/Auth/LoginForm";
import RegisterForm from "./component/Nav/Auth/registerForm";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./component/Nav/State/Authentication/Action";

function App() {

  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt]);
  return (
    // Wrapping everything in a single root container
    <ThemeProvider theme={darkTheme}>
      {/* Resetting default browser styles */}
      <CssBaseline />
      
      {/* Wrapping the app in a Router for routing functionality */}
      <Router>
        {/* Static Navbar visible across all routes */}
        <Navbar />

        {/* Define routes to navigate between components */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the Restaurant Details page */}
          <Route path="/restaurant-details" element={<RestaurantDetails />} />

          <Route path="/account/login" element={<LoginForm />} />
        <Route path="/account/register" element={<RegisterForm />} />

          {/* Route for the Cart page */}
          <Route path="/cart" element={<Cart />} />

          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
