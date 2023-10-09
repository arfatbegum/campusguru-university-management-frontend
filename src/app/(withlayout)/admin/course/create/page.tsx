"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { courseSchema } from '@/schemas/course';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddCourseMutation, useCoursesQuery } from '@/redux/api/courseApi';
import FormMultiSelectField, { SelectOptions } from '@/components/Forms/FormMultiSelectField';

const CreateCourse = () => {
    const [addCourse] = useAddCourseMutation();

    const { data } = useCoursesQuery({ limit: 10, page: 1 });

    const courses = data?.courses;
    const coursesOptions = courses?.map((course) => {
        return {
            label: course?.title,
            value: course?.id,
        };
    });

    const onSubmit = async (data: any) => {
        data.credits = parseInt(data?.credits);

        const coursePreRequisitesOptions = data?.coursePreRequisites?.map(
            (id: string) => {
                return {
                    courseId: id,
                };
            }
        );

        data.coursePreRequisites = coursePreRequisitesOptions;

        message.loading("Creating.....");
        try {
            const res = await addCourse(data).unwrap();
            if (res?.id) {
                message.success("Course created successfully");
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
                        label: "Courses",
                        link: "/admin/course",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Course</h1>
            <Form submitHandler={onSubmit}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Course information
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
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Course</button>
            </Form>
        </div>
    );
};

export default CreateCourse;