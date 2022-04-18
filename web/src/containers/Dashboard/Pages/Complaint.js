import React, { useState } from "react";
import { Button, Row, Col, Input, Select } from "antd";
import complaint from "../../../assets/Images/complaints.svg";
import { useDispatch } from "react-redux";
import { complain } from "../action/complainAction";

const { Option } = Select;

const { TextArea } = Input;
export default function Complaints() {
  const [form, setForm] = useState({
    area: "",
    mobile: "",
    powerTime: "",
    message: "",
  });

  const dispatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();

    dispatch(complain(form));
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (name, value) => {
    if (name == "area")
      setForm((prev) => {
        return { ...prev, area: value };
      });
  };

  return (
    <div className="complaintsPageConatiner">
      <div>
        <Row
          className="complaintsMiddleSection"
          justify="center"
          gutter={[0, 0]}
        >
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div
              className="leftSectionComplaints"
              style={{
                backgroundImage: `url(${complaint})`,
              }}
            ></div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="rightSection">
              <p className="headingComplaint">Customer Complaints</p>
              <p className="alreadyText">
                Fill the form with your complaint massages.
              </p>
              <div className="formSection">
                <form onSubmit={Submit}>
                  <Row gutter={[20, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                      <p className="label">Area</p>
                      <Select
                        placeholder="Select Area"
                        className="select"
                        name="area"
                        onChange={(value) => {
                          handleSelectChange("area", value);
                        }}
                      >
                        <Option value="Negambo">Negambo</Option>
                        <Option value="Gampha">Gampha</Option>
                        <Option value="Colombo">Colombo</Option>
                        <Option value="Kaluthara">Kaluthara</Option>
                      </Select>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                      <p className="label">Mobile Number</p>
                      <Input
                        placeholder="Mobile Number"
                        className="inputFeild email"
                        name="mobile"
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                      <p className="label">Power Cut Time</p>
                      <Input
                        placeholder="Time"
                        className="inputFeild"
                        name="powerTime"
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>

                  <Row gutter={[10, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <p className="label">Message</p>
                      <TextArea
                        rows={4}
                        placeholder="Message"
                        maxLength={100}
                        className="textarea"
                        name="message"
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>

                  <div className="applySection">
                    <Button className="applyBtn" htmlType="submit">
                      Apply
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
