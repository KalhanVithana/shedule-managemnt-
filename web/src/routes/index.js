import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../containers/user/forms/login';
export default function AppRoutes() {
  return (
    //routes
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
