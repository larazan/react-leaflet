import React from "react";
import { useNavigate } from "react-router-dom";


const SidebarLink = ({ Icon, text, active }) => {
    let navigate = useNavigate();

  return (
    <>
      <div
        className={`text-[#15181c] flex items-center justify-center xl:justify-start text-xl space-x-4 hoverAnimation ${
          active && "font-bold"
        } cursor-pointer p-5 hover:rounded-full hover:bg-gray-300`}
        onClick={() => active && navigate("/")}
      >
        <Icon className="h-12" />
        <span className="hidden xl:inline font-bold">{text}</span>
      </div>
    </>
  );
};

export default SidebarLink;
