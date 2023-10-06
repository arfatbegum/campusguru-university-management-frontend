"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { academicFacultySchema } from '@/schemas/academicFaculty';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddAcademicFacultyMutation } from '@/redux/api/academic/facultyApi';

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty] = useAddAcademicFacultyMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            await addAcademicFaculty(data);
            message.success("Academic Faculty Created successfully");
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
                        label: "Academic Faculties",
                        link: "/admin/academic/faculty",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Academic Faculty</h1>

            <Form submitHandler={onSubmit} resolver={yupResolver(academicFacultySchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Academic Faculty information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24}>
                            <FormInput name="title" label="Title" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Academic Faculty</button>
            </Form>
        </div>
    );
};

export default CreateAcademicFaculty;