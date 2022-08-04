import React, { Component } from "react";
import { matchRoutes, useLocation, useParams } from "react-router-dom";

import Header from "../components/Header";

// class Layout extends Component {
//   render() {
//     return (
//       <div className="flex flex-col h-screen max-h-screen">
//           <Header/>
//           <div className="">
//             {this.props.children}
//           </div>
//     </div>
//     )
//   }
// }

// export default Layout

// import React from 'react'

const Layout = (props) => {
  const routeParams = useParams();
  const location = useLocation();

  console.log(location.pathname);

  const renderHeader = () => {
    if (location.pathname !== "/login" && location.pathname !== "/register") {
      return <Header />;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      {renderHeader()}

      <div className="">{props.children}</div>
    </div>
  );
};

export default Layout;
