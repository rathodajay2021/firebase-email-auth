//CORE
import React from "react";

//CUSTOM
import { useAuth } from "Context/AuthContext";
import { Button } from "@mui/material";
import { HomePageWrapper } from "./HomePage.style";

const HomePage = () => {
  const { logoutUser } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await logoutUser();

      if (response) {
        console.log("homePage handleLogout response", response);
      }
    } catch (error) {
      console.log("homePage handleLogout error", error);
    }
  };

  return (
    <HomePageWrapper>
      HomePage
      <Button variant="contained" className="logout-btn" onClick={handleLogout}>
        Logout
      </Button>
    </HomePageWrapper>
  );
};

export default HomePage;
