import React from "react";
import "./style.state.css";

const InputForm = () => {
  return (
    <div className="App">
      <h1>React Hooks UseState</h1>
      <form>
        <div className="form-group">
          <label> Username</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label> Password</label>
          <input type="password" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
