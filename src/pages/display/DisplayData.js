import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Space } from "antd";
import axios from "axios";

const DisplayData = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get("http://localhost:8090/api/phone/getAll")
      .then((respone) => {
        var data = respone.data;
        setListProduct(data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const employeesGroup1 = [
    {
      name: "John Doe",
      gender: "Male",
      salary: 55000,
      email: "johndoe@example.com",
    },
    {
      name: "Jane Smith",
      gender: "Female",
      salary: 62000,
      email: "janesmith@example.com",
    },
    {
      name: "Samuel Green",
      gender: "Male",
      salary: 48000,
      email: "samuelgreen@example.com",
    },
  ];
  const antdTable = [
    {
      title: "ProductCode",
      dataIndex: "product_id",
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      render: (item) => {
        return (
          <Space>
            <Button size="middle" danger>
              Delete
            </Button>
            <Button type="primary" size="middle">
              Edit
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="container-fluid bg-light vh-100 vw-100">
      <div className="d-flex justify-content-between">
        <div>
          <h1> Display Data</h1>
        </div>
        <div>
          <Link to="/input">
            <Button type="primary" size="large">
              Insert
            </Button>
          </Link>
        </div>
      </div>
      <hr style={{ color: "GrayText" }}></hr>
      <Table
        dataSource={listProduct}
        columns={antdTable}
        pagination={{
          pageSize: 7,
          onChange: (page) => {
            setIsloading(true);
            setTimeout(() => {
              setIsloading(false);
            }, 300);
          },
        }}
        loading={isLoading}
      />
    </div>
  );
};

export default DisplayData;
