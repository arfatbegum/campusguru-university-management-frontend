"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import { Col, Row, message } from "antd";
import { useSemesterRegistrationQuery, useUpdateSemesterRegistrationsMutation } from '@/redux/api/semesterRegistrationApi';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import AcademicSemesterField from '@/components/Forms/AcademicSemesterField';
import FormInput from '@/components/Forms/FormInput';
import { IDProps } from '@/types';

const UpdateSemesterRegistration = ({ params }: IDProps) => {
    const { id } = params;

    const { data } = useSemesterRegistrationQuery(id);
    console.log(data)
    const [updateSemesterRegistrations] = useUpdateSemesterRegistrationsMutation();
    const onSubmit = async (values: any) => {
       const minCredit = parseInt(values?.minCredit);
       const maxCredit = parseInt(values?.maxCredit);

        message.loading("Updated.....");
        try {
            const res = await updateSemesterRegistrations(({ id, body: { ...values, minCredit, maxCredit } })).unwrap();
            if (res?.id) {
                message.success("Semester registration successfully updated");
            }
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const defaultValues = {
        startDate: data?.startDate || "",
        endDate: data?.endDate || "",
        academicSemesterId: data?.academicSemester?.title || "",
        minCredit: data?.minCredit || "",
        maxCredit: data?.maxCredit || "",
        status: data?.status || "",
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
            <h1 className="py-5 text-lg font-bold">Update Semestern Registration</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
                        <Col span={12} className='mb-4'>
                            <FormInput name="maxCredit" label="Max Credit" type="number" />
                        </Col>
                        <Col span={24} >
                            <FormInput name="status" label="Status" type="text" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Semester Registration</button>
            </Form>
        </div>
    );
};

export default UpdateSemesterRegistration;