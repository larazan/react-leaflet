import React from "react";

import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widget";

const Dashboard2 = () => {
  return (
    <>
      <main>
          <div className="md:flex md:flex-no-wrap">
            <div className="flex z-0 outline-0 relative w-screen ">
            <Sidebar />
            <Feed />
            <Widgets />

        {/* {isOpen && <Modal />} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard2;
