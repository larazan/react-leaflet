import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./hoc/layout";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Coba from "./pages/Coba";
import Dashboard from "./pages/Dashboard";
import Submit from "./pages/Submit";
import Cabinet from "./pages/Cabinet";

import "./App.css";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="keys" element={<Icons />} />
          <Route path="regions" element={<Regions />} />
          <Route path="maps" element={<Maps />} />
          <Route path="content" element={<Content />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="submit" element={<Submit />} />
          {/* <Route path="coba" element={<Coba />} /> */}
          <Route path="cabinet" element={<Cabinet />} />
        </Routes>
      </Layout>
  );
}

export default App;
