"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import { Col, Row, message } from "antd";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddOfferedCourseMutation } from '@/redux/api/offeredCourseApi';
import OfferedCoursesField from '@/components/Forms/OfferedCoursesField';
import AcademicDepartmentField from '@/components/Forms/AcademicDepartmentField';
import { offeredCourseSchema } from '@/schemas/offeredCourse';
import SemesterRegistrationField from '@/components/Forms/SemesterRegistrationField';

const CreateOfferedCourse = () => {
    const [addOfferedCourse] = useAddOfferedCourseMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            const res = await addOfferedCourse(data).unwrap();
            if (res?.id) {
                message.success("Offered Course created successfully");
            }
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
                        label: "Offered Course",
                        link: "/admin/offered_course",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Offered Course</h1>

            <Form submitHandler={onSubmit} resolver={yupResolver(offeredCourseSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Offered Course information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24} className='mb-4'>
                            <SemesterRegistrationField
                                name="semesterRegistrationId"
                                label="Semester registration"
                            />
                        </Col>
                        <Col span={24} className='mb-4'>
                            <OfferedCoursesField name="courseIds" label="Courses" />
                        </Col>
                        <Col span={24}>
                            <AcademicDepartmentField
                                name="academicDepartmentId"
                                label="Academic department"
                            />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Offered Course</button>
            </Form>
        </div>
    );
};

export default CreateOfferedCourse;