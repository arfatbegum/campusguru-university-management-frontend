import * as yup from "yup";

export const courseSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    code: yup.string().required("Code is required"),
    credits: yup.string().required("Credits is required"),
    coursePreRequisites: yup.string().required("Course Pre-Requisites is required"),
});