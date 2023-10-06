import * as yup from "yup";

export const academicSemesterSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    startMonth: yup.string().required("Start Month is required"),
    endMonth: yup.string().required("End Month is required"),
    year: yup.number().required("Year is required"),
});