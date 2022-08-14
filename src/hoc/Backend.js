import React, { useState } from 'react';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

import { Outlet } from "react-router-dom";

function Backend(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="flex h-screen overflow-hidden bg-slate-100 text-slate-600">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <Outlet />
                </div>
            </div>
        </>
    )
};

export default Backend;