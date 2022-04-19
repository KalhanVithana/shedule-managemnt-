import React, { useEffect } from "react";
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
import Dashboard from "../containers/Dashboard/dashBoard";
import Complaints from "../containers/Dashboard/Pages/Complaint";
import { Registerbill } from "../containers/Dashboard/Pages/RegisterBill";
import { Notification } from "../containers/Dashboard/Pages/Notification";
import { Customerdashbord } from "../containers/Dashboard/Pages/customerDashbord";
import { Nonpayments } from "../assets/SCSS/Dashboard/Pages/nonPayments";
const UserAuth = () => {
  const isAuth = useSelector((state) => state.loginReducer.auth);


  return isAuth;
};

export const AuthRoute = () => {
  const isAuth = UserAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};


export default function AppRoutes() {
  return (
    //routes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AuthRoute />}>
        <Route path="/dashmenu" element={<Dashboard/>} />
         <Route path="/C" element={<Complaints/>} />
         <Route path="/D" element={<Registerbill/>} />
         <Route path="/E" element={<Notification/>} />
         <Route path="/F" element={<Customerdashbord/>} />
         <Route path="/G" element={<Nonpayments/>} />
         
        </Route>
        

      </Routes>
    </BrowserRouter>
  );
}
