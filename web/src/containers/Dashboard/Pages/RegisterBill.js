import React, { useState } from "react";
import { Button, Row, Col, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import registerbill from "../../../assets/Images/registerbil.jpg";
import { useDispatch } from "react-redux";
import { registerAccount } from "../action/accountRegisterAction";
import axios from "axios";
const { Option } = Select;

export function Registerbill() {
  const [form, setForm] = useState({
    AreaOffice: "",
    accountNo: "",
    mobileNo: "",
    images: "",
  });
  const [imges, setimges] = useState();
  const dispatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("images", imges);
    formData.append("AreaOffice", form.AreaOffice);
    formData.append("accountNo", form.accountNo);
    formData.append("mobileNo", form.mobileNo);

    dispatch(registerAccount(formData));
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name, value) => {
    if (name == "area")
      setForm((prev) => {
        return { ...prev, AreaOffice: value };
      });
  };

  return (
    <div className="registerBillConatiner">
      <div className="registersPageConatiner">
        <div>
          <Row
            className="registerMiddleSection"
            justify="center"
            gutter={[0, 0]}
          >
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div
                className="leftSectionRegister"
                style={{
                  backgroundImage: `url(${registerbill})`,
                }}
              ></div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="rightSection">
                <p className="headingRegisterBill">Register Bill</p>
                <p className="alreadyText">Fill the form with your details.</p>
                <div className="formSection">
                  <form onSubmit={Submit} encType="multipart/form-data">
                    <Row gutter={[20, 0]}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Area Office</p>
                        <Select
                          placeholder="Select Area Office"
                          className="select"
                          onChange={(value) => {
                            handleSelectChange("area", value);
                          }}
                        >
                          <Option value="Negambo">Negambo</Option>
                          <Option value="Gampha">Gampha</Option>
                          <Option value="Colombo">Colombo</Option>
                          <Option value="">Kaluthara</Option>
                        </Select>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Electricity Account Number</p>
                        <Input
                          placeholder="Account Number"
                          className="inputFeild accountNumber"
                          name="accountNo"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Mobile Number</p>
                        <Input
                          placeholder="Mobile Number"
                          className="inputFeild"
                          name="mobileNo"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Upload Image</p>
                        <Input
                          type={"file"}
                          placeholder="image upload"
                          className="inputFeild"
                          name="images"
                          onChange={(e) => setimges(e.target.files[0])}
                        />
                      </Col>
                    </Row>

                    <div className="registerBillSection">
                      <Button className="registerBillBtn" htmlType="submit">
                        Register Bill
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
