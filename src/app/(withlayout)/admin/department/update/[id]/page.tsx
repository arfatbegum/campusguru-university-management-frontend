"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { useDepartmentQuery, useUpdateDepartmentMutation } from '@/redux/api/departmentApi';
import { IDProps } from '@/types';

const UpdateDepartment = ({ params }: IDProps) => {
    const { id } = params;

    const { data } = useDepartmentQuery(id);
    const [updateDepartment] = useUpdateDepartmentMutation();

    const onSubmit = async (values: { title: string }) => {
        message.loading("Updating.....");
        try {
            await updateDepartment({ id , body: values });
            message.success("Department updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };


    const defaultValues = {
        title: data?.title || "",
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
                        label: "Department",
                        link: "/admin/department",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update Department</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Update Department information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24}>
                            <FormInput name="title" label="Title" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Department</button>
            </Form>
        </div>
    );
};

export default UpdateDepartment;