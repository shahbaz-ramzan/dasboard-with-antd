import { Space, Table, Typography } from "antd";
import React from "react";
import { getOrders } from "../../API";
import { useState, useEffect } from "react";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataOrders, setDataOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      // console.log("res11:",res)
      setDataOrders(res?.carts[0].products);
      setLoading(false);
    });
  }, []);

  // console.log("data Orders",dataOrders)

  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Orders</Typography.Title>

      <Table
        loading={loading}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Title",
            dataIndex: "title",
            render: (title) => {
              return <span>{title}</span>;
            },
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },

          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataOrders}
        //  loading={loading}
        pagination={false}
      />
    </Space>
  );
}

export default Orders;
