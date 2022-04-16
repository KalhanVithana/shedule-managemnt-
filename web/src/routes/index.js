import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "../containers/user/forms/login";
import SignUp from "../containers/user/forms/SignupPage";

const userAuth = () => {
  const isAuth = useSelector((state) => state.loginReducer.auth);
  const user = { logged: false };

  return isAuth;
};

export const AuthRoute = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default function AppRoutes() {
  return (
    //routes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="A" element={<Login />} />
        {/* <Route element={<AuthRoute />}>
          <Route path="A" element={<Login />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
