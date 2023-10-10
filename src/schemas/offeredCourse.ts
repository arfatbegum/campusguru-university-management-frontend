import * as yup from "yup";

export const offeredCourseSchema = yup.object().shape({
  semesterRegistrationId: yup
    .string()
    .required("Semester Registration is required"),
  courseIds: yup.array().required("Course is required"),
  academicDepartmentId: yup
    .string()
    .required("Academic Department is required"),
});
