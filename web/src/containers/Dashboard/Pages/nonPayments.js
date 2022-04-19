import React from "react";
import { List, Avatar, Row, Col, Button } from "antd";
import nonPayment from "../../../assets/Images/payments.png";


const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const data = [
  {
    title: "Customer 1",
    acc:'25369856'
  },
  {
    title: "Customer 2",
    acc:'10369854'
  },
  {
    title: "Customer 3",
    acc:'50369856'
  },
  {
    title: "Customer 4",
    acc:'50369858'
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
                description={`Account Number: ${item.acc}`}
              />
            </List.Item>
          )}
        />
        <Button href="/dashmenu" className="backBtn">Back</Button>
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
