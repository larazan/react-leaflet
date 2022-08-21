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
import Forgot from "./pages/Forgot";
import Coba from "./pages/Coba";
import Dashboard from "./pages/Dashboard";
import Submit from "./pages/Submit";
import Cabinet from "./pages/Cabinet";
import Filter from "./pages/Filter";
import Pricing from "./pages/Pricing";
import Modal2 from "./components/Modal2";
import Detail from "./pages/Detail";
import Request from "./pages/Request";
import Empat04 from "./pages/Empat04";
import NewsPost from "./components/NewsPost";
import NewsComment from "./components/NewsComment";
import NewsLike from "./components/NewsLike";
import Message from "./pages/Message";
import MessageBox from "./pages/MessageBox";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import SetupProfile from "./pages/SetupProfile";

import Frontend from "./hoc/Frontend";
import Backend from "./hoc/Backend";
import Profile from "./hoc/Profile";

import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [subdomain, setSubdomain] = useState(null)

  useEffect(() => {
    const host = window.location.host;

    const arr = host
        .split(".")
        .splice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubdomain(arr[0])
  }, [])
  
  const location = useLocation();
  const background = location.state && location.state.background;
  // let state = location.state as { backgroundLocation?: Location };

  // if (subdomain === "dashboard") {
  //   return (
  //     <>
  //       <Layout>
  //         <Routes location={background || location}>
  //          <Route path="/" element={<Coba />} />
  //         </Routes>
  //       </Layout>
  //     </>
  //   )
  // }

  return (
      <>
      {/* <AppRoute path="/" component={Content} layout={mainLayout} /> */}
     
        <Routes location={background || location}>
          <Route path="/" element={<Frontend />}>
            <Route index element={<Content />} />
            <Route path="post" element={<Filter />} />
            <Route path="post/:cat" element={<Submit />} />
            <Route path="home" element={<Home />} />
            <Route path="keys" element={<Icons />} />
            <Route path="regions" element={<Regions />} />
            <Route path="maps" element={<Maps />} />
            <Route path="content" element={<Content />} />
            <Route path="login" element={<Login />} />
            <Route path="messages" element={<Message />} />
            <Route path="messages/:id" element={<MessageBox />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="coba" element={<Coba />} />
            <Route path="cabinet" element={<Cabinet />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="change_profile" element={<SetupProfile />} />
            <Route path="profile" element={<Profile />} >
              <Route index element={<NewsPost />} />
              <Route path="with_comments" element={<NewsComment />} />
              <Route path="likes" element={<NewsLike />} />
              <Route path="followers" element={<Followers />} />
              <Route path="following" element={<Following />} />
            </Route>
            <Route path="d" element={<Detail />} />
            <Route path="request" element={<Request />} />
            <Route path="*" element={<Empat04 />} />
          </Route>
          <Route path="/dashboard" element={<Backend />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>

      </>
  );
}

export default App;
