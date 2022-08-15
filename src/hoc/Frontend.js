import React from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "../components/Header";

function Frontend(props) {
  const location = useLocation();

  console.log(location.pathname);

  const renderHeader = () => {
    if (location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/forgot") {
      return <Header />;
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen max-h-screen">
        {renderHeader()}
        {/* <div>{props.children}</div> */}
        <Outlet />
      </div>
    </>
  );
};

export default Frontend;