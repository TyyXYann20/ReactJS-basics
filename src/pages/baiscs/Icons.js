import React from "react";
import { Button, Upload, Pagination } from "antd";
import {
  PieChartFilled,
  AppleFilled,
  FacebookFilled,
  LoginOutlined,
} from "@ant-design/icons";
import { type } from "@testing-library/user-event/dist/type";
const Icons = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-4">
          <PieChartFilled style={{ color: "pink", fontSize: "40px" }} />
        </div>
        <div className="col-4">
          <AppleFilled style={{ color: "green", fontSize: "40px" }} />
        </div>
        <div className="col-4">
          <FacebookFilled style={{ color: "blue", fontSize: "40px" }} />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Button icon={<LoginOutlined />}>Login</Button>
        </div>
        <div className="col-4">
          <Upload.Dragger
            listType="picture"
            multiple
            action="http://localhost:3000/icon"
          >
            Drag files here OR
            <Button>Click here</Button>
          </Upload.Dragger>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-8">
          <Pagination total={30} pageSize={5} defaultCurrent={1} />
          <Pagination simple total={300} pageSize={5} showSizeChanger />
          <Pagination
            total={60}
            pageSize={5}
            showSizeChanger
            itemRender={(page, type) => {
              if (type == "prev") return <a>Prev</a>;
              else if (type == "next") return <a className="btn-primary">Next</a>;
              if (type == "page") return <a>Page#{page}</a>;
            }}
          />
        </div>
      </div> */}

    </div>
  );
};

export default Icons;
