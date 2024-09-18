import React, { useState } from "react";
import { Input, InputNumber, Select, Radio } from "antd";
const { Option } = Select;
const InputAntd = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <Input placeholder="Username" name="username" allowClear={true} />
        </div>
        <div className="col-5">
          <Input.Password placeholder="password" name="password" />
        </div>
        <div className="col-2">
          <InputNumber placeholder="Number" min={2} max={10} />
        </div>
      </div>
      <hr style={{ color: "red" }} />

      <div className="row">
        <div className="col-4">
          <Input.TextArea placeholder="Some message" rows={2} />
        </div>
        <div className="col-4">
          <Input.OTP placeholder="OTP" />
        </div>
      </div>
      <hr style={{ color: "red" }} />

      <div className="row">
        <div className="col-6">
          <Select style={{ width: "100%" }}>
            <Option value={1}>ABA</Option>
            <Option value={2}>WING</Option>
            <Option value={3}>ACLEDA</Option>
          </Select>
        </div>
        <div className="col-6">
          <Radio.Group>
            <Radio value={1}>Actived</Radio>
            <Radio value={0}>Disabiled</Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default InputAntd;
