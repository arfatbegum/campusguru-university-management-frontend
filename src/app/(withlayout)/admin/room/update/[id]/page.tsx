"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { IDProps } from '@/types';
import FormSelectField, { SelectOptions } from '@/components/Forms/FormSelectField';
import { useRoomQuery, useUpdateRoomMutation } from '@/redux/api/roomApi';
import { useBuildingsQuery } from '@/redux/api/buildingApi';

const UpdateRoom = ({ params }: IDProps) => {
    const { id } = params;

    const { data } = useRoomQuery(id);
    const [UpdateRoom] = useUpdateRoomMutation();
    const { data: buildingData } = useBuildingsQuery({
        limit: 100,
        page: 1,
    });
    const buildings = buildingData?.buildings;
    const buildingOptions = buildings?.map((building) => {
        return {
            label: building?.title,
            value: building?.id,
        };
    });

    const onSubmit = async (values: any) => {
        message.loading("Updating.....");
        try {
            await UpdateRoom({ id, body: { ...values } });
            message.success("Room updated successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };


    const defaultValues = {
        roomNumber: data?.roomNumber || "",
        floor: data?.floor || "",
        buildingId: data?.buildingId || "",
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
                        label: "Room",
                        link: "/admin/room",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Update Room</h1>

            <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Update Room information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24} className='mb-4'>
                            <FormInput name="roomNumber" label="Room Number" />
                        </Col>
                        <Col span={24} className='mb-4'>
                            <FormInput name="floor" label="Floor" />
                        </Col>
                        <Col span={24}>
                            <FormSelectField
                                size="large"
                                name="buildingId"
                                options={buildingOptions as SelectOptions[]}
                                label="Building"
                                placeholder="Select"
                            />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Update Room</button>
            </Form>
        </div>
    );
};

export default UpdateRoom;