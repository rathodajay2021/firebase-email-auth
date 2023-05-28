import React, { useEffect } from "react";
import { Routes, Route as ReactRoute, useNavigate } from "react-router-dom";
import RoutesList from "./RouteList";
import ProtectedRoute from "./ProtectedRoute";
import {
  URL_HOME_PAGE,
  URL_LOGIN,
  URL_RESET_PASSWORD,
  URL_ROOT,
  URL_SIGN_UP,
} from "Components/Helpers/Paths";
import { SignUp } from "Components/Pages/SignUp";
import { LogIn } from "Components/Pages/LogIn";
import { useAuth } from "Context/AuthContext";
import { ResetPassword } from "Components/Pages/ResetPassword";

const Route = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate(URL_HOME_PAGE);
    }
  }, [currentUser, navigate]);

  return (
    <Routes>
      <ReactRoute path={URL_LOGIN} element={<LogIn />} />
      <ReactRoute path={URL_ROOT} element={<LogIn />} />
      <ReactRoute path={URL_SIGN_UP} element={<SignUp />} />
      <ReactRoute path={URL_RESET_PASSWORD} element={<ResetPassword />} />
      {RoutesList.map((route, index) => (
        <React.Fragment key={index}>
          {route.hasChildren ? (
            <ReactRoute
              path={route.path}
              element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
            >
              {route.children}
            </ReactRoute>
          ) : (
            <ReactRoute
              path={route.path}
              element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
            />
          )}
        </React.Fragment>
      ))}
    </Routes>
  );
};

export default Route;
