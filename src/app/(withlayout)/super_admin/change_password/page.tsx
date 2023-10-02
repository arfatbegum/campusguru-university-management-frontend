"use client";

import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col } from "antd";

const ChangedPassword = () => {
    const onSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
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
                        label: "Change Password",
                        link: "/change_password",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Changed Password</h1>
            <Form submitHandler={onSubmit}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <Col className="mb-4">
                        <FormInput name="oldPassword" label="Enter Your Old Password" type="password" />
                    </Col>
                    <Col>
                        <FormInput name="newPassword" label="Enter Your New Password" type="password" />
                    </Col>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Submit</button>
            </Form>
        </div>
    );
};

export default ChangedPassword;