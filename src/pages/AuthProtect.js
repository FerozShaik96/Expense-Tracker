import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const AuthProtect = () => {
  const Isloggedin = !!localStorage.getItem("userid");
  console.log(Isloggedin);
  if (Isloggedin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default AuthProtect;
