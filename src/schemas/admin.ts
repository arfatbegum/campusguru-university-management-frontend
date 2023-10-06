import * as yup from "yup";

export const adminSchema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    admin: yup.object().shape({
        name: yup.object().shape({
            firstName: yup.string().required("First name is required"),
            lastName: yup.string().required("Last name is required"),
        }),
        email: yup.string().email().required("Email is required and must be unique"),
        contactNo: yup.string().required("Contact No is required and must be unique"),
        emergencyContactNo: yup.string().required("Emergency Contact No is required"),
        designation: yup.string().required("Designation is required"),
        presentAddress: yup.string().required("Present Address of Birth is required"),
        permanentAddress: yup.string().required("Permanent Address of Birth is required"),
        managementDepartment: yup.string().required("Management Department is required"),
    })
})