import React from "react";
import { BellFilled } from "@ant-design/icons";
import { Comment, Tooltip, List, Row, Col, Pagination } from "antd";
import moment from "moment";
import notificationImg from "../../../assets/Images/notifications.png";



const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(1, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(2, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
];
export function Notification() {
  return (
    <div className="notificationContainer">
      <p className="notifications">
        Notifications
        <BellFilled className="bellIcon" />{" "}
      </p>
      <div className="notificationMiddleConatainer">
        <Row  gutter={[50, 0]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <List
          className="comment-list"
          header={`${data.length} replies`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <li>
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
         
            </li>
            
          )}
        />
   <Pagination defaultCurrent={1} total={50}   className="pagination"/>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>

          <div
              className="rightSection"
              style={{
                backgroundImage: `url(${notificationImg})`,
              }}
            ></div>
          </Col>
       
        </Row>
      
        ,
      </div>
    </div>
  );
}
