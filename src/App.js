import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import MainNavigation from "./components/Loginnavigation/MainNavigation";
import Profile from "./pages/Profile";
import ForgotPassWord from "./Utilities/ForgotPassWord";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <SignInPage /> },
        { path: "profile", element: <Profile /> },
        { path: "signup", element: <SignUpPage /> },
        { path: "forgotpassword", element: <ForgotPassWord /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
