"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Col, Row, message } from "antd";
import { roomSchema } from '@/schemas/room';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddRoomMutation } from '@/redux/api/roomApi';
import { useBuildingsQuery } from '@/redux/api/buildingApi';
import FormSelectField, { SelectOptions } from '@/components/Forms/FormSelectField';

const CreateRoom = () => {
    const [addRoom] = useAddRoomMutation();
    const { data } = useBuildingsQuery({
        limit: 100,
        page: 1,
    });
    const buildings = data?.buildings;
    const buildingOptions = buildings?.map((building) => {
        return {
            label: building?.title,
            value: building?.id,
        };
    });

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            await addRoom(data);
            message.success("Room Created successfully");
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
                        label: "Rooms",
                        link: "/admin/room",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Room</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(roomSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Room information
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
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Room</button>
            </Form>
        </div>
    );
};

export default CreateRoom;