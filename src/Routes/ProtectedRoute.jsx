import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "Context/AuthContext";
import { URL_ROOT } from "Components/Helpers/Paths";

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth();
  return (
    <Box style={{ height: "inherit" }}>
      {!currentUser ? (
        <Navigate replace to={URL_ROOT} />
      ) : (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    </Box>
  );
};

export default ProtectedRoute;
