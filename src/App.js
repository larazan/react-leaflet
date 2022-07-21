import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Layout from "./hoc/layout";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Coba from "./pages/Coba";
import Dashboard from "./pages/Dashboard";
import Submit from "./pages/Submit";
import Cabinet from "./pages/Cabinet";
import Filter from "./pages/Filter";
import Pricing from "./pages/Pricing";
import Modal2 from "./components/Modal2";

import "./App.css";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  // let state = location.state as { backgroundLocation?: Location };

  return (
      <>
      <Layout>
        {/* <Routes location={state?.backgroundLocation || location}> */}
        <Routes location={background || location}>
          <Route path="/" element={<Content />} >
            <Route path="detail" element={<Modal2 />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="keys" element={<Icons />} />
          <Route path="regions" element={<Regions />} />
          <Route path="maps" element={<Maps />} />
          <Route path="content" element={<Content />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="submit" element={<Submit />} />
          <Route path="coba" element={<Coba />} />
          <Route path="cabinet" element={<Cabinet />} />
          <Route path="filter" element={<Filter />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>

        {background && (
        <Routes>
          <Route path="detail" element={<Modal2 />} />
        </Routes>
      )}
      </Layout>
     
      </>
  );
}

export default App;
