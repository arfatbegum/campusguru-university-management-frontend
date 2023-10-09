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
import dayjs from "dayjs";
import { useCoursesQuery, useDeleteCourseMutation } from "@/redux/api/courseApi";

const Course = () => {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteCourse] = useDeleteCourseMutation();

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
    const { data, isLoading } = useCoursesQuery({ ...query });

    const courses = data?.courses;
    const meta = data?.meta;
  
    const deleteHandler = async (id: string) => {
      message.loading("Deleting.....");
      try {
        const res = await deleteCourse(id);
        if (res) {
          message.success("Course Deleted successfully");
        }
      } catch (err: any) {
        message.error(err.message);
      }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            sorter: true,
          },
          {
            title: "Code",
            dataIndex: "code",
            sorter: true,
          },
          {
            title: "Credits",
            dataIndex: "credits",
            sorter: true,
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
                        <Link href={`/admin/course/update/${data.id}`}>
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
            <ActionBar title="Course List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search Course ......"
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
                <Link href="/admin/course/create">
                    <button className="bg-indigo-700 px-4 py-2 ml-2 text-white rounded font-semibold float-right">Create</button>
                </Link>
            </ActionBar>
            <UMTable
                loading={isLoading}
                columns={columns}
                dataSource={courses}
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

export default Course;