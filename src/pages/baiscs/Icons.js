import React from "react";
import {Button} from "antd"
import {PieChartFilled, AppleFilled, FacebookFilled, LoginOutlined} from "@ant-design/icons"
const Icons = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-4">
        <PieChartFilled  style={{color:"pink", fontSize:"40px"}} /> 
        </div>
        <div className="col-4"><AppleFilled style={{color:"green", fontSize:"40px"}} /></div>
        <div className="col-4"><FacebookFilled style={{color:"blue", fontSize:"40px"}} /></div>
      </div>
      <div className="row">
        <div className="col-4">
            <Button icon={<LoginOutlined />}>Login</Button>
       
        </div>
      
      </div>
    </div>
  );
};

export default Icons;
