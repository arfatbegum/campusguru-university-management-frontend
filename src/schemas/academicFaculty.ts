import * as yup from "yup";

export const academicFacultySchema = yup.object().shape({
    title: yup.string().required("Title is required"),
});
