"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
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
            <div
                style={{
                    color: "white",
                    fontSize: "1.2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}
            >
                CampusGuru University
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
            />
        </Sider>
    );
};

export default SideBar;