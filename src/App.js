import { Route, Routes } from "react-router-dom";
import "../src/styles/index.css";
import "./App.css";
import LoginScreen from "./Components/Login/LoginScreen";
import OtpScreen from "./Components/Otp/OtpScreen";
import BlogWebsite from "./Components/Blog";
import CreateBlog from "./Components/Blog";

function App() {
  return (
    <div style={{ maxHeight: "100vh" }}>
      {/* <LoginScreen /> */}
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/otp" element={<OtpScreen />} />
        {/* <Route path="/blog" element={<BlogWebsite />} /> */}
        <Route path="/blog" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
