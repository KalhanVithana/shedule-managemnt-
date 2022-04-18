import React, { useEffect, useState } from "react";
import { Button, Row, Col, Card, Table, Tag, Space, Modal, notification } from "antd";
import axios from "axios";
import NotificationHelper from "../../../middleware/notification";
import dash1 from "../../../assets/Images/dashbord6.png";
import dashnew2 from "../../../assets/Images/dashbored3.png";
import dash3 from "../../../assets/Images/dashbord4.png";
export function Dashboard() {
  const [apiData, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState("");

  const data = [{acc:"4558"}]
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    GetApi();
  }, []);

  const removeUser = async (id) => {
    NotificationHelper.getInstance().success("remove success")
    await axios
      .delete(`http://localhost:4000/user/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      });

    
  };

  const SendMail = async (customerEmail) => {
    NotificationHelper.getInstance().success("send alert success")
    await axios
      .post("http://localhost:4000/user/send/notifacation", {customerEmail})
      .then((res) => {
        console.log(res.data);
       
      });
      
  };
  const columns = [

    {
      title: "accountNo",
      dataIndex: "accountNo",
      key: "accountNo",
      
      render: (text) =>{
        {
          let item=  data.some(res => res.acc === text)
          return <a style={{color:item ?'red':null}}>{text}</a>
        } 
      }
   
    },
    {
      title: "AreaOffice",
      dataIndex: "AreaOffice",
      key: "AreaOffice",
      render: (text) => <a>{text}</a>,
    },
 
    {
      title: "mobileNo",
      dataIndex: "mobileNo",
      key: "mobileNo",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "bill",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => (
        <>
          <img src={text} alt="new" width={40} height={40} />
          <Button
            className="view-dash"
            onClick={() => {
              showModal();
              setImage(text);
            }}
          >
            View
          </Button>
        </>
      ),
    },
  
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="view-dash"
            onClick={() => {
              SendMail(record.customerEmail);
            }}
          >
            send
          </Button>
          <Button
            className="delete-dash"
            onClick={() => {
              removeUser(record._id);
            }}
          >
            remove
          </Button>
        </Space>
      ),
    },
  ];

  const GetApi = async () => {
    let token = localStorage.getItem("x-auth");

    const resData = await axios.get("http://localhost:4000/user/getAll", {
      headers: { "x-auth": token },
    });

    setData(resData.data);

    console.log(resData.data);
  };
  return (
    <div className="dashboardMainConatiner">
      <Modal
      wrapClassName="dashboardModal"
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <img src={image} alt="new" className="dashBoard-img" />
          <h5>bill</h5>
        </div>
      </Modal>
      <div className="middleContainer">
        <h2>Dashboard</h2>
        <Row gutter={[60, 20]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={8}>
            <div
              className="cardSection"
              style={{
                backgroundImage: `url(${dash1})`,
              }}
            ></div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xl={8}>
            <div
              className="cardSection"
              style={{
                backgroundImage: `url(${dash3})`,
              }}
            ></div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={8}>
            <div
              className="cardSection"
              style={{
                backgroundImage: `url(${dashnew2})`,
              }}
            ></div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={24}>
            <div className="table">
              <Table columns={columns} dataSource={apiData} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
