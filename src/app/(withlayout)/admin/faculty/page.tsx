"use client";
import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import { Input, message } from "antd";
import Link from "next/link";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import UMTable from "@/components/Ui/UMTable";
import { IDepartment } from "@/types";
import dayjs from "dayjs";
import { useDeleteFacultyMutation, useFacultiesQuery } from "@/redux/api/facultyApi";

const Faculty = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteFaculty] = useDeleteFacultyMutation();

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedSearchTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }
    const { data, isLoading } = useFacultiesQuery({ ...query });
    const faculties = data?.faculties;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            await deleteFaculty(id);
            message.success("Admin Deleted successfully");
        } catch (err: any) {
            console.error(err.message);
        }
    };


    const columns = [
        {
            title: "Id",
            dataIndex: "facultyId",
            sorter: true,
        },
        {
            title: "Name",
            render: function (data: Record<string, string>) {
                const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
                return <>{fullName}</>;
            },
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Department",
            dataIndex: "academicDepartment",
            render: function (data: IDepartment) {
                return <>{data?.title}</>;
            },
        },
        {
            title: "Designation",
            dataIndex: "designation",
        },
        {
            title: "Created at",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        },
        {
            title: "Contact no.",
            dataIndex: "contactNo",
        },
        {
            title: "Action",
            render: function (data: any) {
                return (
                    <>
                        <Link href={`/admin/faculty/details/${data.id}`}>
                            <button className="bg-indigo-700 text-white font-bold py-1 px-2 rounded mr-2">
                                <EyeOutlined />
                            </button>
                        </Link>
                        <Link href={`/admin/faculty/update/${data.id}`}>
                            <button className="bg-indigo-700 text-white font-bold py-1 px-2 rounded mr-2">
                                <EditOutlined />
                            </button>
                        </Link>
                        <button onClick={() => deleteHandler(data?.id)} className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
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

    const resetFilters = () => {
        setSortBy("");
        setSortOrder("");
        setSearchTerm("");
    };
    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
            <ActionBar title="Faculty List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search faculty ......"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                {(!!sortBy || !!sortOrder || !!searchTerm) && (
                    <button
                        onClick={resetFilters}
                        className="bg-indigo-700 px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                    >
                        <ReloadOutlined />
                    </button>
                )}
                <Link href="/admin/faculty/create">
                    <button className="bg-indigo-700 px-4 py-2 ml-2 text-white rounded font-semibold float-right">Create</button>
                </Link>
            </ActionBar>
            <UMTable
                loading={isLoading}
                columns={columns}
                dataSource={faculties}
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

export default Faculty;