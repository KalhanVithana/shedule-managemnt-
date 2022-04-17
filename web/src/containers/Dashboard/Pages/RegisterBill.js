import React from "react";
import { Button, Row, Col, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import registerbill from "../../../assets/Images/registerbil.jpg";
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export function Registerbill() {
  // area office
  // electricity acc no
  // mobile
  // image upload

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
                  <form>
                    <Row gutter={[20, 0]}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Area Office</p>
                        <Select
                          placeholder="Select Area Office"
                          className="select"
                          onChange={handleChange}
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
                        />
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Mobile Number</p>
                        <Input
                          placeholder="Mobile Number"
                          className="inputFeild"
                          name="Mobile"
                        />
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <p className="label">Upload Image</p>
                        <Upload {...props}>
                          <Button icon={<UploadOutlined />}  className="uploadImage">
                            Click to Upload
                          </Button>
                        </Upload>
                      </Col>
                    </Row>

                    <div className="registerBillSection">
                      <Button className="registerBillBtn">Register Bill</Button>
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
