"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import { Col, Row, message } from "antd";
import { IDProps } from '@/types';
import FormInput from '@/components/Forms/FormInput';
import FormMultiSelectField, { SelectOptions } from '@/components/Forms/FormMultiSelectField';
import { useCourseQuery, useCoursesQuery, useUpdateCourseMutation } from '@/redux/api/courseApi';

const UpdateSemester = ({ params }: IDProps) => {
    const { id } = params;

    const { data } = useCourseQuery(id);
    const [updateCourse] = useUpdateCourseMutation();
    const { data:courseData } = useCoursesQuery({ limit: 10, page: 1 });

    const courses = courseData?.courses;
    const coursesOptions = courses?.map((course) => {
        return {
            label: course?.title,
            value: course?.id,
        };
    });

    const onSubmit = async (values: any) => {
        message.loading("Updating.....");
        try {
            await updateCourse({ id, body: {...values} });
            message.success("Course updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };


    const defaultValues = {
        title: data?.title || "",
        code: data?.code || "",
        credits: data?.credits || "",
        coursePreRequisites: data?.coursePreRequisites?.title || "",
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
                        label: "Courses",
                        link: "/admin/course",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update Course</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Update Course information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                    <Col span={24} className='mb-4'>
                            <FormInput name="title" label="Title" />
                        </Col>
                        <Col span={24} className='mb-4'>
                            <FormInput name="code" label="Course Code" />
                        </Col>
                        <Col span={24} className='mb-4'>
                            <FormInput name="credits" label="Course Credits" />
                        </Col>
                        <Col span={24}>
                            <FormMultiSelectField
                                options={coursesOptions as SelectOptions[]}
                                name="coursePreRequisites"
                                label="Pre Requisite Courses"
                            />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Course</button>
            </Form>
        </div>
    );
};

export default UpdateSemester;