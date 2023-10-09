"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { buildingSchema } from '@/schemas/buildingSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddBuildingMutation } from '@/redux/api/buildingApi';

const CreateBuilding = () => {
    const [addBuilding] = useAddBuildingMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            await addBuilding(data);
            message.success("Building Created successfully");
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
                        label: "Buildings",
                        link: "/admin/building",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Building</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(buildingSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                    Building information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24}>
                            <FormInput name="title" label="Title" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Building</button>
            </Form>
        </div>
    );
};

export default CreateBuilding;