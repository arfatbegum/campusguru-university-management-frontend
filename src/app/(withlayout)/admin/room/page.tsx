"use client";
import ActionBar from "@/components/Ui/ActionBar";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import UMTable from "@/components/Ui/UMTable";
import {
    DeleteOutlined,
    EditOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import { message, Input } from "antd";
import { useDebounced } from "@/redux/hooks";
import { useAcademicDepartmentsQuery, useDeleteAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useDeleteRoomMutation, useRoomsQuery } from "@/redux/api/roomApi";

const Room = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteRoom] = useDeleteRoomMutation();

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }

    const { data, isLoading } = useRoomsQuery({ ...query });

    const rooms = data?.rooms;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            await deleteRoom(id);
            message.success("Room Deleted successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns = [
        {
            title: "Room no",
            dataIndex: "roomNumber",
            sorter: true,
          },
          {
            title: "Floor",
            dataIndex: "floor",
            sorter: true,
          },
          {
            title: "Building",
            dataIndex: "building",
            render: function (data: any) {
              return <>{data?.title}</>;
            },
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
                        <Link href={`/admin/room/update/${data?.id}`}>
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
                    {
                        label: "Rooms",
                        link: "/admin/room",
                    },
                ]}
            />
            <ActionBar title="Room List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search room ............"
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
                <Link href="/admin/room/create">
                    <button className="bg-indigo-700 px-4 py-2 ml-2 text-white rounded font-semibold float-right">Create</button>
                </Link>
            </ActionBar>
            <UMTable
                loading={isLoading}
                columns={columns}
                dataSource={rooms}
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

export default Room;