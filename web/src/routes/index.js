import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../containers/user/forms/login';
import SignUp from '../containers/user/forms/SignupPage';
export default function AppRoutes() {
  return (
    //routes
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/A" element={<Login/>}/>
        
     
    </Routes>
  </BrowserRouter>
  )
}
