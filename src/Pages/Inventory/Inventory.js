import { Avatar, Rate, Space, Table, Typography } from "antd";
import React from "react";
import { getInventory } from "../../API";
import { useState, useEffect } from "react";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataInventory, setDataInventory] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      // console.log("res11:",res)
      setDataInventory(res?.products);
      setLoading(false);
    });
  }, []);

  // console.log("data inventory",dataInventory)

  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Inventory</Typography.Title>

      {dataInventory && (
        <Table
          loading={loading}
          columns={[
            {
              title: "ID",
              dataIndex: "id",
            },
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },

            {
              title: "Category",
              dataIndex: "category",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
          ]}
          dataSource={dataInventory}
          //  loading={loading}
          pagination={{
            pageSize: 5,
          }}
        />
      )}
    </Space>
  );
}

export default Inventory;
