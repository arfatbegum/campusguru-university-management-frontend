import * as yup from "yup";

export const studentSchema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    admin: yup.object().shape({
        name: yup.object().shape({
            firstName: yup.string().required("First name is required"),
            middleName: yup.string().required("Middle name is required"),
            lastName: yup.string().required("Last name is required"),
        }),
        email: yup.string().email().required("Email is required"),
        dateOfBirth: yup.string().required("Date of Birth is required"),
        contactNo: yup.string().required("Contact No is required"),
        emergencyContactNo: yup.string().required("Emergency Contact No is required"),
        academicFaculty: yup.string().required("Academic Faculty is required"),
        academicDepartment: yup.string().required("Academic Department is required"),
        academicSemester: yup.string().required("Academic Semester is required"),

    })
})