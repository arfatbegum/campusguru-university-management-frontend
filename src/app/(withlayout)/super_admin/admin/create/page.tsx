"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import UploadImage from "@/components/Ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Row, message } from "antd";

const CreateAdmin = () => {
    const { data } = useDepartmentsQuery({ limit: 100, page: 1 });
    const [addAdminWithFormData] = useAddAdminWithFormDataMutation();
    
    //@ts-ignore
    const departments: IDepartment[] = data?.departments;
  
    const departmentOptions =
      departments &&
      departments?.map((department) => {
        return {
          label: department?.title,
          value: department?.id,
        };
      });
  
    const onSubmit = async (values: any) => {
      const obj = { ...values };
      const file = obj["file"];
      delete obj["file"];
      const data = JSON.stringify(obj);
      const formData = new FormData();
      formData.append("file", file as Blob);
      formData.append("data", data);
        message.loading("Creating...");
      try {
        await addAdminWithFormData(formData);
        message.success("Admin created successfully!");
      } catch (err: any) {
        message.error(err.message);
      }
    };
  

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Admin",
                        link: "/super_admin/admin",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Admin</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
                    <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm"
                    >
                        <p className="font-semibold text-lg mb-3">
                            Admin Information
                        </p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.name.firstName"
                                    size="large"
                                    label="First Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.name.middleName"
                                    size="large"
                                    label="Middle Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.name.lastName"
                                    size="large"
                                    label="Last Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="password"
                                    name="password"
                                    size="large"
                                    label="Password"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormSelectField
                                    size="large"
                                    name="admin.gender"
                                    options={genderOptions}
                                    label="Gender"
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormSelectField
                                    size="large"
                                    name="admin.managementDepartment"
                                    options={departmentOptions}
                                    label="Department"
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                  <UploadImage name="file" />
                            </Col>
                        </Row>
                    </div>
                    {/* basic info */}
                    <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm">
                        <p className="font-semibold text-lg mb-3">
                            Basic Information
                        </p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="email"
                                    name="admin.email"
                                    size="large"
                                    label="Email address"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.contactNo"
                                    size="large"
                                    label="Contact No."
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.emergencyContactNo"
                                    size="large"
                                    label="Emergency Contact No."
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormDatePicker
                                    name="admin.dateOfBirth"
                                    label="Date of birth"
                                    size="large"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormSelectField
                                    size="large"
                                    name="admin.bloodGroup"
                                    options={bloodGroupOptions}
                                    label="Blood group"
                                    placeholder="Select"
                                />
                            </Col>
                            <Col
                                className="gutter-row mb-4"
                                span={8}
                            >
                                <FormInput
                                    type="text"
                                    name="admin.designation"
                                    size="large"
                                    label="Designation"
                                />
                            </Col>
                            <Col span={12} style={{ margin: "10px 0" }}>
                                <FormTextArea
                                    name="admin.presentAddress"
                                    label="Present address"
                                    rows={3}
                                />
                            </Col>

                            <Col span={12} style={{ margin: "10px 0" }}>
                                <FormTextArea
                                    name="admin.permanentAddress"
                                    label="Permanent address"
                                    rows={3}
                                />
                            </Col>
                        </Row>
                    </div>
                    <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Admin</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateAdmin;