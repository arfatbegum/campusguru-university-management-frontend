import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";
import { bloodGroupOptions } from "@/constants/global";

const StudentBasicInfo = () => {
    return (
        <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm mt-5">
            <p className="font-semibold text-lg mb-3">
                Basic Information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                <Col span={8} className="gutter-row mb-4">
                    <FormInput
                        type="email"
                        name="student.email"
                        label="Email address"
                        size="large"
                    />
                </Col>
                <Col span={8} className="gutter-row mb-4">
                    <FormInput
                        name="student.contactNo"
                        label="Contact no."
                        size="large"
                    />
                </Col>
                <Col span={8} className="gutter-row mb-4">
                    <FormInput
                        name="student.emergencyContactNo"
                        label="Emergency contact no."
                        size="large"
                    />
                </Col>
                <Col span={12} className="gutter-row mb-4">
                    <FormDatePicker
                        name="student.dateOfBirth"
                        label="Date of birth"
                        size="large"
                    />
                </Col>
                <Col span={12} className="gutter-row mb-4">
                    <FormSelectField
                        name="student.bloodGroup"
                        label="Blood group"
                        options={bloodGroupOptions}
                        size="large"
                    />
                </Col>
                <Col span={12} className="gutter-row mb-4">
                    <FormTextArea
                        name="student.presentAddress"
                        label="Present address"
                        rows={3}
                    />
                </Col>
                <Col span={12} className="gutter-row mb-4">
                    <FormTextArea
                        name="student.permanentAddress"
                        label="Permanent address"
                        rows={3}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default StudentBasicInfo;