import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const LocalGuardianInfo = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm mt-5">
        <p className="font-semibold text-lg mb-3">
          Guardian information
        </p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={12} className="gutter-row mb-4">
            <FormInput
              name="student.localGuardian.name"
              label="Local guardian name"
            />
          </Col>
          <Col span={12} className="gutter-row mb-4">
            <FormInput
              name="student.localGuardian.occupation"
              label="Local guardian occupation"
            />
          </Col>

          <Col span={12} className="gutter-row mb-4">
            <FormInput
              name="student.localGuardian.contactNo"
              label="Local guardian contact no."
            />
          </Col>
          <Col span={12} className="gutter-row mb-4">
            <FormInput
              name="student.localGuardian.address"
              label="Local guardian address"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LocalGuardianInfo;