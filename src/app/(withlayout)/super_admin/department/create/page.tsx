"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { departmentSchema } from '@/schemas/department';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddDepartmentMutation } from '@/redux/api/departmentApi';

const CreateDepartment = () => {
    const [addDepartment] = useAddDepartmentMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            await addDepartment(data);
            message.success("Department added successfully");
        } catch (err: any) {
            message.error(err.message);
        }
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
                        link: "/department",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Department</h1>

            <Form submitHandler={onSubmit} resolver={yupResolver(departmentSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Department information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24}>
                            <FormInput name="title" label="Title" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Department</button>
            </Form>
        </div>
    );
};

export default CreateDepartment;