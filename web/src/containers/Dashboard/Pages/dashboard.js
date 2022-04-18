import React from "react";
import { Button, Row, Col,Card, Table, Tag, Space  } from "antd";


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
            <Button className="view-dash">View</Button>
            <Button className="delete-dash">Delete</Button>
         
         
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
export function Dashboard() {
  return (
    <div className="dashboardMainConatiner">
      <div className="middleContainer">
          <h2>Dashboard</h2>
        <Row gutter={16}>
          
            <div className="cardSection"></div>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <Card className="card" bordered={true}>
         A
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <Card bordered={true}>
         B
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <Card  bordered={true}>
        C
        </Card>
      </Col>
         
        </Row>
        <Row>
        <Col  xs={24} sm={24} md={24} lg={12} xl={24}>
          <div className="table">
          <Table columns={columns} dataSource={data} />
          </div>
          </Col>

        
        </Row>
      </div>
    </div>
  );
}
