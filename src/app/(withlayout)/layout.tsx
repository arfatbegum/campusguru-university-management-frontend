"use client";
import Contents from "@/components/Ui/Contents";
import SideBar from "@/components/Ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [userLoggedIn, router, isLoading]);

  if (!isLoading) {
    return <Spin tip="Loading" size="large"
      style={{
        minHeight: "100vh",
        color:"#4338ca"
      }}
    >
      <div className="content" />
    </Spin>;
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;