import * as yup from "yup";

export const academicDepartmentSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    academicFacultyId:yup.string().required("Academic Faculty is required"),
});
