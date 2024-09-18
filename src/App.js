import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputForm from "./pages/baiscs/StateDemo";
import MainHeader from "./components/Header";
import DisplayData from "./pages/display/DisplayData";
import "bootstrap/dist/css/bootstrap.min.css";
import FormAntd from "./pages/form/FormAntd";
import InputAntd from "./pages/baiscs/InputAntd";
import SignupForm from "./pages/form/SignupForm ";
import Icons from "./pages/baiscs/Icons";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayData />} />
        <Route path="/input" element={<InputForm />} />
        <Route path="/form" element={<FormAntd />} />
        <Route path="/antinput" element={<InputAntd />} />
        <Route path="/sign" element={<SignupForm />} />
        <Route path="/icon" element={<Icons />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
