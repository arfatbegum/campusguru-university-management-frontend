"use client";
import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import UMTable from "@/components/Ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import {
    DeleteOutlined,
    EditOutlined,
  } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";

const Department = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const { data, isLoading } = useDepartmentsQuery({ ...query });

    const departments = data?.departments;
    const meta = data?.meta;

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "CreatedAt",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
        {
            title: "Action",
            render: function (data: any) {
                return (
                    <>
                        <Link href={`/super_admin/department/edit/${data?.id}`}>
                            <button className="bg-indigo-700 text-white font-bold py-1 px-2 rounded mr-2">
                                <EditOutlined />
                            </button>
                        </Link>
                        <button className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
                            <DeleteOutlined />
                        </button>
                    </>
                );
            },
        },
    ];

    const onPaginationChange = (page: number, pageSize: number) => {
        console.log("Page:", page, "PageSize:", pageSize);
        setPage(page);
        setSize(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        setSortBy(field as string);
        setSortOrder(order === "ascend" ? "asc" : "desc");
    };

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Department",
                        link: "/super_admin/department",
                    },
                ]}
            />
            <ActionBar title="Department List">
                <Link href="/super_admin/department/create">
                    <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Department</button>
                </Link>
            </ActionBar>
            <UMTable
                loading={isLoading}
                columns={columns}
                dataSource={departments}
                pageSize={size}
                totalPages={meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default Department;