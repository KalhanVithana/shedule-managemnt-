import React, { useState } from 'react'
import { Checkbox, Button, Row, Col, Input } from "antd";
import loginImg from "../../../assets/Images/login.png";
import { login } from '../action/loginAction';
import { useDispatch } from "react-redux";
export default function Login() {
  const  [form,setForm] = useState({email:'',password:''})

const dispatch = useDispatch();
const Submit = (e)=>{
  e.preventDefault();
  
   dispatch(login(form))
}

const handleChange = (e) => {
 setForm((prev)=> ({...prev, [e.target.name]:e.target.value}))
}
  return (
  
    <div className="loginPageConatiner">
    <div>
      <Row className="loginMiddleSection" justify="center" gutter={[0, 0]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div
            className="leftSectionLogin"
            style={{
              backgroundImage: `url(${loginImg})`,
            }}
          ></div>
        </Col>
        <Col xs={24} sm={4} md={24} lg={12} xl={12}>
          <div className="rightSection">
           
            <p className="headingCreate">Login</p>
            <p className="alreadyText">
             Doesn't have an account yet?
              <a href="/" className="loginLink">
                Sign Up
              </a>
            </p>
            <div className="formSection">
           <form onSubmit={Submit}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <p className="label">Email</p>
                  <Input placeholder="Email" className="inputFeild email"  name="email" onChange={handleChange}/>
                </Col>
              </Row>

              <Row gutter={[30, 0]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <p className="label">Password</p>
                  <Input placeholder="Password" className="inputFeild"  name="password" onChange={handleChange} />
                </Col>
              </Row>

              <div className="loginSection">
                <Button className="createBtn" htmlType='submit'>Login</Button>
              </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
  )
}
