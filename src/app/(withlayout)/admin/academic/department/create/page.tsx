"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddAcademicDepartmentMutation } from '@/redux/api/academic/departmentApi';
import AcademicFacultyField from '@/components/Forms/AcademicFacultyField';
import { academicDepartmentSchema } from '@/schemas/academicDepartment';

const CreateAcademicDepartment = () => {
    const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            await addAcademicDepartment(data);
            message.success("Academic  Department Created successfully");
        } catch (err: any) {
            message.error(err.message);
        }
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
                        label: "Academic Departments",
                        link: "/admin/academic/department",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Academic Department</h1>

            <Form submitHandler={onSubmit} resolver={yupResolver(academicDepartmentSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Academic Department information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24} className='mb-4'>
                            <FormInput name="title" label="Title" />
                        </Col>
                        <Col span={24} >
                            <AcademicFacultyField
                                name="academicFacultyId"
                                label="Academic Faculty"
                            />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Academic Department</button>
            </Form>
        </div>
    );
};

export default CreateAcademicDepartment;