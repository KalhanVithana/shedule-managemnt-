import React from "react";
import { Checkbox, Button, Row, Col, Input } from "antd";
import loginImg from "../../../assets/Images/signup.png";
export default function Login() {
  return (
    //login
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
              <p className="alreadyText">
                Already have an account?{" "}
                <a href="#" className="loginLink">
                  Login
                </a>
              </p>
              <p className="headingCreate">Create account</p>
              <div className="formSection">
                <Row gutter={[30, 0]}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="label">First Name</p>
                    <Input className="inputFeild" placeholder="First Name" />
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="label"> Last Name</p>
                    <Input placeholder="Last Name" className="inputFeild" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p className="label">Email</p>
                    <Input placeholder="Email" className="inputFeild email" />
                  </Col>
                </Row>

                <Row gutter={[30, 0]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <p className="label">Password</p>
                    <Input placeholder="Password" className="inputFeild" />
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <p className="label">Confirm</p>
                    <Input
                      placeholder="Confirm Password"
                      className="inputFeild"
                    />
                  </Col>
                </Row>

                <div className="acceptSection">
                  <Button className="createBtn">Create Account</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
