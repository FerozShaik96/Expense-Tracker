import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const AuthLogin = () => {
  const Isloggedin = !!localStorage.getItem("userid");
  console.log(Isloggedin);
  if (!Isloggedin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default AuthLogin;
