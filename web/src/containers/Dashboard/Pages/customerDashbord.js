import React from 'react'
import { Button, Row, Col, } from "antd";
import complaint from "../../../assets/Images/dash7.png";
export function Customerdashbord() {
    

    return (
        <div className='customerConatainer'>
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={24}>
                <div
              className="customerPage"
              style={{
                backgroundImage: `url(${complaint})`,
              }}
            ></div>
                </Col>
            </Row>
        </div>
    )
}
