import React, { useState } from "react";
import { Checkbox, Button, Row, Col, Input } from "antd";
import signUpImg from "../../../assets/Images/registration.png";
import { useDispatch } from "react-redux";
import { signUp } from "../action/signupAction";
export default function SignUp() {
const  [form,setForm] = useState({firstName:'',lastName:'',email:'',password:'',checkpassword:''})

const dispatch = useDispatch();
const Submit = (e)=>{
  console.log("call")
  e.preventDefault();
  
   dispatch(signUp(form))
}

const handleChange = (e) => {
 setForm((prev)=> ({...prev, [e.target.name]:e.target.value}))
}
  
  return (
   
    <div className="signUpPageConatiner">
     
      <div>
        <Row className="signUpMiddleSection" justify="center" gutter={[0, 0]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div
              className="leftSectionLogin"
              style={{
                backgroundImage: `url(${signUpImg})`,
              }}
            ></div>
          </Col>
          <Col xs={24} sm={4} md={24} lg={12} xl={12}>
            <div className="rightSection">
              <p className="alreadyText">
                Already have an account?{" "}
                <a href="/login" className="loginLink">
                  Login
                </a>
              </p>
              <p className="headingCreate">Create account</p>
              <form onSubmit={Submit}>
              <div className="formSection">
                <Row gutter={[30, 0]}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="label">First Name</p>
                    <Input className="inputFeild" placeholder="First Name"  name="firstName" onChange={handleChange}/>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="label"> Last Name</p>
                    <Input placeholder="Last Name" className="inputFeild" name="lastName" onChange={handleChange} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p className="label">Email</p>
                    <Input placeholder="Email" className="inputFeild email" name="email" onChange={handleChange} />
                  </Col>
                </Row>

                <Row gutter={[30, 0]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <p className="label">Password</p>
                    <Input placeholder="Password" className="inputFeild"  name="password" onChange={handleChange} />
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <p className="label">Confirm</p>
                    <Input
                      placeholder="Confirm Password"
                      className="inputFeild"
                      name="checkpassword" onChange={handleChange}
                    />
                  </Col>
                </Row>

                <div className="acceptSection">
                  <Button className="createBtn" htmlType="submit">Create Account</Button>
                </div>
                
              </div>
              </form>
            </div>
          </Col>
        </Row>
       
      </div>
    </div>
  );
}
