import React, { useEffect, useState } from "react";
import { BellFilled } from "@ant-design/icons";
import { Comment, Tooltip, List, Row, Col, Input, Modal, Button } from "antd";
import moment from "moment";
import notificationImg from "../../../assets/Images/notifications.png";
import axios from "axios";
import { getToken } from "../../user/sagas/request/api";
import { notification } from "../action/notificationAction";
import { useDispatch } from "react-redux";
const { TextArea } = Input;
export function Notification({role }) {
  const [getNotifications, setNotifications] = useState([]);
  const [sendReply, setsendReply] = useState(false);
  const [replyMessage, setreplyMessage] = useState("");
  const [itemID, setItemID] = useState("");
  const dispatch = useDispatch();
  const tempArr = [];

  useEffect(() => {
    getNotificationApi();
  }, []);

  const handleSubmit = (email) => {
    console.log(replyMessage, email);

    const form = { customerEmail: email, replyMessage: replyMessage };
    dispatch(notification(form));
  };

  const getNotificationApi = async () => {
    let token = localStorage.getItem("x-auth");

    const resData =
      role === "admin"
        ? await axios.get("http://localhost:4000/user/notification/admin", {
            headers: { "x-auth": token },
          })
        : role === "customer"
        ? await axios.get("http://localhost:4000/user/notification", {
            headers: { "x-auth": token },
          })
        : null;

    setNotifications(resData.data);
  };



  return (
    <div>
       <Modal title="Basic Modal" visible={sendReply} onOk={()=>{
         setsendReply(!sendReply)
       }} >
        <div>

        <TextArea
                                rows={4}
                                placeholder="Message"
                                maxLength={20}
                                className="textarea"
                                name="message"
                                hidden={sendReply}
                                value={replyMessage}
                                onChange={(e) => {
                                 
                                  console.log(e)
                                 
                                }}
                              style={{backgroundColor:'red'}}
                               
                              />
        </div>
      </Modal>

    <div className="notificationContainer">

      
      <p className="notifications">
        Notifications
        <BellFilled className="bellIcon" />{" "}
      </p>
      <div className="notificationMiddleConatainer">
        <Row gutter={[50, 0]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <List
              className="comment-list"
              // header={`${2} replies`}
              itemLayout="horizontal"
              dataSource={getNotifications}
              renderItem={(item) => (
                <li>
                  <Comment
                    actions={[
                     
                        <>
                          <span
                            key="comment-list-reply-to-0"
                            onClick={(e) => {
                              setsendReply(!sendReply);
                              setItemID(item._id)

                            }}
                          >
                            {role === 'admin' ? " Reply to" : "answer"}
                          </span>
                          {role  ==='admin' ? (
                            <>
                              <TextArea
                                rows={4}
                                placeholder="Message"
                                maxLength={20}
                                className="textarea"
                                name="message"
                                hidden={sendReply}
                                value={replyMessage}
                                onChange={(e) => {
                                 
                                  console.log(e)
                                 
                                }}
                                
                               
                              />
                              {sendReply ? null : (
                                <button
                                  onClick={() => {
                                    handleSubmit(item.customerEmail);
                                  }}
                                >
                                  send
                                </button>
                              )}
                            </>
                          ) : role  ==='customer' ?  (
                            <TextArea
                              rows={4}
                              placeholder="Message"
                              maxLength={6}
                              className="textarea"
                              name="message"
                              value={item.replyMessage}
                              hidden={sendReply}
                              disabled

                              //onChange={handleChange}
                            />
                          ) :null}
                        </>
                      
                    ]}
                    author={item.customerName}
                    avatar={"https://joeschmoe.io/api/v1/random"}
                    content={item.message}
                    datetime={item.dateTime}
                  />
                </li>
              )}
              pagination={{
                pageSize: sendReply ? 2 : 2,
              }}
            />
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
      </div>
    </div>
    </div>
  );
}
