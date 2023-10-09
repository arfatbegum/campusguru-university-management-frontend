import * as yup from "yup";

export const facultySchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  faculty: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
    }),
    email: yup.string().email().required("Email is required"),
    designation: yup.string().required("Designation is required"),
    contactNo: yup.string().required("Contact No is required"),
    emergencyContactNo: yup
      .string()
      .required("Emergency Contact No is required"),
    academicFaculty: yup.string().required("Academic Faculty is required"),
    academicDepartment: yup
      .string()
      .required("Academic Department is required"),
  }),
  presentAddress: yup.string().required("Present Address of Birth is required"),
  permanentAddress: yup
    .string()
    .required("Permanent Address of Birth is required"),
});
