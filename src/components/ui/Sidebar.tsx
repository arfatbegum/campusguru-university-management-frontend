"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { role } = getUserInfo() as any;

    return (
        <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="text-indigo-700 font-bold text-lg text-center my-3 uppercase"
            >
                CampusGuru University
            </div>
            <Menu
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems(role)}
            />
        </Sider>
    );
};

export default SideBar;