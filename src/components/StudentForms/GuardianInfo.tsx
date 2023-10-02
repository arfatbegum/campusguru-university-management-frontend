import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const GuardianInfo = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm mt-5">
        <p className="font-semibold text-lg mb-3">
          Guardian Information
        </p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.fatherName"
              label="Father name"
              size="large"
            />
          </Col>

          <Col span={8} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.fatherOccupation"
              label="Father occupation"
              size="large"
            />
          </Col>

          <Col span={8} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.fatherContactNo"
              label="Father contact no."
              size="large"
            />
          </Col>

          <Col span={8} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.motherName"
              label="Mother name"
              size="large"
            />
          </Col>

          <Col span={8} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.motherOccupation"
              label="Mother occupation"
              size="large"
            />
          </Col>

          <Col span={8} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.motherContactNo"
              label="Mother contact no."
              size="large"
            />
          </Col>

          <Col span={24} className="gutter-row mb-4">
            <FormInput
              name="student.guardian.address"
              label="Address"
              size="large"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GuardianInfo;