import React from "react";
import { List, Avatar, Row, Col } from "antd";
import nonPayment from "../../../Images/payments.png";


const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const data = [
  {
    title: "Customer 1",
  },
  {
    title: "Customer 2",
  },
  {
    title: "Customer 3",
  },
  {
    title: "Customer 4",
  },
];
export function Nonpayments() {
  return (
    <div className="nonPaymentsMainConatiner">
      <div className="middleContainer">
        <h2>Non payment Customers Details</h2>
        <Row gutter={[60, 20]}>
          <Col className="listSection" xs={24} sm={24} md={24} lg={12} xl={12}>
          <List
          className="list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Account Number:2545798936"
              />
            </List.Item>
          )}
        />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div
              className="cardSection"
              style={{
                backgroundImage: `url(${nonPayment})`,
              }}
            ></div>
          </Col>
        </Row>
      
      </div>
    </div>
  );
}
