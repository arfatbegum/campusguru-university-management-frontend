"use client";

import AcademicDepartmentField from "@/components/Forms/AcademicDepartmentField";
import AcademicFacultyField from "@/components/Forms/AcademicFacultyField";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import UploadImage from "@/components/Ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddFacultyWithFormDataMutation } from "@/redux/api/facultyApi";
import { facultySchema } from "@/schemas/faculty";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";

const CreateFaculty = () => {
    const [addFacultyWithFormData] = useAddFacultyWithFormDataMutation();

    const onSubmit = async (values: any) => {
        console.log(values)
        const obj = { ...values };
        const file = obj["file"];
        delete obj["file"];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("data", data);
        console.log(formData)
        message.loading("Creating...");
        try {
            const res = await addFacultyWithFormData(formData);
            if (!!res) {
                message.success("Faculty created successfully!");
            }
        } catch (err: any) {
            console.error(err.message);
        }
    };

    return (
        <>
            <UMBreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Faculty",
                        link: "/admin/faculty",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Faculty</h1>
            <Form submitHandler={onSubmit} >
                {/* faculty information */}
                <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Faculty information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                name="faculty.name.firstName"
                                label="First name"
                                size="large"
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                name="faculty.name.middleName"
                                label="Middle name"
                                size="large"
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                name="faculty.name.lastName"
                                label="Last name"
                                size="large"
                            />
                        </Col>

                        <Col span={12} className="gutter-row mb-4">
                            <FormInput
                                type="password"
                                name="password"
                                label="Password"
                                size="large"
                            />
                        </Col>

                        <Col span={12} className="gutter-row mb-4">
                            <FormSelectField
                                name="faculty.gender"
                                label="Gender"
                                options={genderOptions}
                            />
                        </Col>

                        <Col span={12} className="gutter-row mb-4">
                            <AcademicFacultyField
                                name="faculty.academicFaculty"
                                label="Academic Faculty"
                            />
                        </Col>
                        <Col span={12} className="gutter-row mb-4">
                            <AcademicDepartmentField
                                name="faculty.academicDepartment"
                                label="Academic Department"
                            />
                        </Col>

                        <Col span={12} className="gutter-row mb-4">
                        <UploadImage name="file" />
                        </Col>
                    </Row>
                </div>
                {/* basic information  */}
                <div
                    className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm"
                >
                    <p className="py-5 text-lg font-semibold">
                        Basic information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                type="email"
                                name="faculty.email"
                                label="Email address"
                                size="large"
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                name="faculty.contactNo"
                                label="Contact no."
                                size="large"
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                name="faculty.emergencyContactNo"
                                label="Emergency contact no."
                                size="large"
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormDatePicker
                                name="faculty.dateOfBirth"
                                label="Date of birth"
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormSelectField
                                name="faculty.bloodGroup"
                                label="Blood group"
                                options={bloodGroupOptions}
                            />
                        </Col>

                        <Col span={8} className="gutter-row mb-4">
                            <FormInput
                                name="faculty.designation"
                                label="Designation"
                                size="large"
                            />
                        </Col>

                        <Col span={12} className="gutter-row mb-4">
                            <FormTextArea
                                name="faculty.presentAddress"
                                label="Present address"
                                rows={3}
                            />
                        </Col>

                        <Col span={12} className="gutter-row mb-4">
                            <FormTextArea
                                name="faculty.permanentAddress"
                                label="Permanent address"
                                rows={3}
                            />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Faculty</button>
            </Form>
        </>
    );
};

export default CreateFaculty;