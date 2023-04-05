import { BellFilled, MailFilled } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getComments, getRecentOrders } from "../../API";

function AppHeader() {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  useEffect(() => {
    setLoading(true);
    getComments().then((res) => {
      setComments(res.comments);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    getRecentOrders().then((res) => {
      setOrders(res.products);
      debugger;
      // setOrders(re);
      // setOrders(res.carts[0].products);
      // console.log("RES", res.carts[0].products.title);
    });
    setLoading(false);
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://img.freepik.com/free-vector/flat-design-data-logo-template_23-2149192863.jpg?w=740&t=st=1680156234~exp=1680156834~hmac=7a14ea062bafc32db7b04c7c37e2cb47854111118f6106a1d01d884769b463e8"
      ></Image>
      <Typography.Title>Shahbaz's Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailFilled
            style={{ fontSize: 30 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders?.length}>
          <BellFilled
            style={{ fontSize: 30 }}
            onClick={() => {
              setNotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="notification"
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return <List.Item>{item.title}</List.Item>;
          }}
        ></List>
      </Drawer>
    </div>
  );
}

export default AppHeader;
