import {
  DollarCircleOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import {
  getCustomers,
  getInventory,
  getOrders,
  getRecentOrders,
} from "../../API";

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [inventory, setInventory] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.total);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <div>
      <div>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashbaordCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Orders"}
            value={orders}
          />
          <DashbaordCard
            icon={
              <ShopOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Inventory"}
            value={inventory}
          />
          <DashbaordCard
            icon={
              <UserOutlined
                style={{
                  color: "darkgray",
                  backgroundColor: "rgba(55,25,50,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Customers"}
            value={customers}
          />
          <DashbaordCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Revenue"}
            value={revenue}
          />
        </Space>
      </div>
      <Space>
        <RecentOrders />
      </Space>
    </div>
  );
  function DashbaordCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }
  function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
      setloading(true);
      getRecentOrders().then((res) => {
        setDataSource(res.products.slice(0, 3));
        setloading(false);
        // console.log(res.products);
      });
    }, []);

    return (
      <>
        <Typography.Text>Recent Orders</Typography.Text>
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
              key: "title",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              key: "quantity",
            },
            {
              title: "Price",
              dataIndex: "discountedPrice",
              key: "discountedPrice",
            },
          ]}
          dataSource={dataSource}
          loading={loading}
          pagination={false}
        />
      </>
    );
  }
}

export default Dashboard;
