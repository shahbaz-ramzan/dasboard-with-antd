import { Avatar, Rate, Space, Table, Typography } from "antd";
import React from "react";
import { getCustomers } from "../../API";
import { useState, useEffect } from "react";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataCustomers, setDataCustomers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      // console.log("res11:",res)
      setDataCustomers(res?.users);
      setLoading(false);
      console.log("customers", setDataCustomers);
    });
  }, []);

  // console.log("data Customers",dataCustomers)

  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Customer</Typography.Title>

      <Table
        loading={loading}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },

          {
            title: "FirstName",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Email",
            dataIndex: "email",
          },

          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address},{address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataCustomers}
        //  loading={loading}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Customers;
