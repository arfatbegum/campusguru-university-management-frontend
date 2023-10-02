"use client";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../Ui/UploadImage";
import {
  academicDepartmentOptions,
  academicSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";

const StudentInfo = () => {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded mb-4 shadow-sm mt-5">
      <p className="font-semibold text-lg mb-3">
        Student Information
      </p>
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={8} className="gutter-row mb-4">
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col span={8} className="gutter-row mb-4">
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col span={8} className="gutter-row mb-4">
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col span={12} className="gutter-row mb-4">
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col span={12} className="gutter-row mb-4">
          <FormSelectField
            size="large"
            name="student.gender"
            options={genderOptions}
            label="Gender"
            placeholder="Select"
          />
        </Col>
        <Col span={8} className="gutter-row mb-4" >
          <FormSelectField
            size="large"
            name="student.academicDepartment"
            options={academicDepartmentOptions}
            label="Academic Department"
            placeholder="Select"
          />
        </Col>
        <Col span={8} className="gutter-row mb-4" >
          <FormSelectField
            size="large"
            name="student.academicFaculty"
            options={facultyOptions}
            label="Academic Faculty"
            placeholder="Select"
          />
        </Col>
        <Col span={8} className="gutter-row mb-4" >
          <FormSelectField
            size="large"
            name="student.academicSemester"
            options={academicSemesterOptions}
            label="Academic Semester"
            placeholder="Select"
          />
        </Col>
        <Col span={8} className="gutter-row mb-4" >
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;