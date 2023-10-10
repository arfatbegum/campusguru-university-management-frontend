"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import { Col, Row, message } from "antd";
import { IDProps } from '@/types';
import { useOfferedCourseQuery, useUpdateOfferedCourseMutation } from '@/redux/api/offeredCourseApi';
import OfferedCoursesField from '@/components/Forms/OfferedCoursesField';
import AcademicDepartmentField from '@/components/Forms/AcademicDepartmentField';
import SemesterRegistrationField from '@/components/Forms/SemesterRegistrationField';

const UpdateOfferedCourse = ({ params }: IDProps) => {
    const { id } = params;
    const { data } = useOfferedCourseQuery(id);
    const [updateOfferedCourse] = useUpdateOfferedCourseMutation();


    const onSubmit = async (values: { title: string }) => {
        message.loading("Updating.....");
        try {
            await updateOfferedCourse({ id, body: values });
            message.success("Offered Course updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };


    const defaultValues = {
        semesterRegistrationId: data?.semesterRegistration?.id || "",
        courseIds: data?.course?.title || "",
        academicDepartmentId: data?.academicDepartment?.title || "",
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
            <h1 className="py-5 text-lg font-bold">Update Offered Course</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Update Offered Course information
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
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Offered Course</button>
            </Form>
        </div>
    );
};

export default UpdateOfferedCourse;