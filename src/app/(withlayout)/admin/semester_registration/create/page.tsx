"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import { Col, Row, message } from "antd";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddSemesterRegistrationsMutation } from '@/redux/api/semesterRegistrationApi';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import AcademicSemesterField from '@/components/Forms/AcademicSemesterField';
import FormInput from '@/components/Forms/FormInput';
import { semesterRegistrationSchema } from '@/schemas/semesterRegistration';

const CreateSemesterRegistration = () => {
    const [addSemesterRegistrations] = useAddSemesterRegistrationsMutation();
    const onSubmit = async (data: any) => {
        data.minCredit = parseInt(data?.minCredit);
        data.maxCredit = parseInt(data?.maxCredit);

        message.loading("Creating.....");
        try {
            const res = await addSemesterRegistrations(data).unwrap();
            if (res?.id) {
                message.success("Semester registration successfully added");
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
                        label: "Semestern Registration",
                        link: "/admin/semester_registration",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Academic Semester</h1>

            <Form submitHandler={onSubmit} resolver={yupResolver(semesterRegistrationSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Semestern Registration information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24} className='mb-4'>
                            <FormDatePicker
                                name="startDate"
                                label="Start Date"
                                size="large"
                            />
                        </Col>
                        <Col span={24} className='mb-4'>
                            <FormDatePicker name="endDate" label="End Date" size="large" />
                        </Col>
                        <Col span={24} className='mb-4'>
                            <AcademicSemesterField
                                name="academicSemesterId"
                                label="Academic Semester"
                            />

                        </Col>
                        <Col span={12} className='mb-4'>
                            <FormInput name="minCredit" label="Min Credit" type="number" />
                        </Col>
                        <Col span={12} >
                            <FormInput name="maxCredit" label="Max Credit" type="number" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Semester Registration</button>
            </Form>
        </div>
    );
};

export default CreateSemesterRegistration;