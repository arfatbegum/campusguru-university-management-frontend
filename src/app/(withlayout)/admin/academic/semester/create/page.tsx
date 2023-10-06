"use client";

import UMBreadCrumb from '@/components/Ui/UMBreadCrumb';
import Form from "@/components/Forms/Form";
import { Col, Row, message } from "antd";
import { yupResolver } from '@hookform/resolvers/yup';
import FormSelectField from '@/components/Forms/FormSelectField';
import { monthOptions, semesterOptions } from '@/constants/global';
import FormYearPicker from '@/components/Forms/FormYearPicker';
import { useAddAcademicSemesterMutation } from '@/redux/api/academic/semesterApi';
import { academicSemesterSchema } from '@/schemas/academicSemester';

const CreateAcademicSemester = () => {
    const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit = async (data: any) => {
      if (data?.title == "Autumn") data["code"] = "01";
      else if (data?.title == "Summer") data["code"] = "02";
      else data["code"] = "03";
  
      data.year = parseInt(data.year);
  
      message.loading("Creating.....");
      try {
        const res = addAcademicSemester(data);
        if (!!res) {
          message.success("Academic Semester Created successfully");
        }
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
                        label: "Academic Semesters",
                        link: "/admin/academic/semester",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold">Create Academic Semester</h1>

            <Form submitHandler={onSubmit} resolver={yupResolver(academicSemesterSchema)}>
                <div className="lg:w-1/2 bg-white border border-gray-200 p-5 pb-6 rounded mb-4 shadow-sm" >
                    <p className="font-semibold text-lg mb-3">
                        Academic Semester information
                    </p>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                        <Col span={24} className='mb-4'>
                            <FormSelectField
                                size="large"
                                name="title"
                                options={semesterOptions}
                                label="Title"
                                placeholder="Select"
                            />
                        </Col>
                        <Col span={12} className='mb-4'>
                        <FormSelectField
                                size="large"
                                name="startMonth"
                                options={monthOptions}
                                label="Start Month"
                                placeholder="Select"
                            />
                        </Col>
                        <Col span={12} className='mb-4'>
                        <FormSelectField
                                size="large"
                                name="endMonth"
                                options={monthOptions}
                                label="End Month"
                                placeholder="Select"
                            />
                        </Col>
                        <Col span={24} >
                        <FormYearPicker name="year" label="Year" picker="year" />
                        </Col>
                    </Row>
                </div>
                <button type="submit" className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold">Create Academic Semester</button>
            </Form>
        </div>
    );
};

export default CreateAcademicSemester;