"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { IDProps } from '@/types';
import AcademicFacultyField from '@/components/Forms/AcademicFacultyField';
import { useAcademicDepartmentQuery,  useUpdateAcademicDepartmentMutation } from '@/redux/api/academic/departmentApi';

const UpdateAcademicDepartment = ({ params }: IDProps) => {
    const { id } = params;

    const { data } = useAcademicDepartmentQuery(id);
    const [updateAcademicDepartment] = useUpdateAcademicDepartmentMutation();

    const onSubmit = async (values: { title: string }) => {
        message.loading("Updating.....");
        try {
            await updateAcademicDepartment({ id, body: values });
            message.success("Academic Department updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };


    const defaultValues = {
        title: data?.title || "",
        academicFacultyId: data?.academicFacultyId || "",
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
            <h1 className="py-5 text-lg font-bold">Update Academic Department</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Update Academic Department information
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
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Academic Department</button>
            </Form>
        </div>
    );
};

export default UpdateAcademicDepartment;