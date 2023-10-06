"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { IDProps } from '@/types';
import { useAcademicFacultyQuery, useUpdateAcademicFacultyMutation } from '@/redux/api/academic/facultyApi';

const UpdateDepartment = ({ params }: IDProps) => {
    const { id } = params;

    const { data } = useAcademicFacultyQuery(id);
    const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();

    const onSubmit = async (values: { title: string }) => {
        message.loading("Updating.....");
        try {
            await updateAcademicFaculty({ id, body: values });
            message.success("Academic Faculty updated successfully");
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
                        label: "Academic Faculties",
                        link: "/admin/academic/faculty",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update Academic Faculty</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Update Academic Faculty information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24}>
                            <FormInput name="title" label="Title" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Academic Faculty</button>
            </Form>
        </div>
    );
};

export default UpdateDepartment;