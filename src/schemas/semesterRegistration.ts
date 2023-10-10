import * as yup from "yup";

export const semesterRegistrationSchema = yup.object().shape({
    startDate: yup.date().required("Start Date is required"),
    endDate: yup.date().required("End Date is required"),
    academicSemesterId: yup.string().required("Academic Semester is required"),
    maxCredit: yup.number().required("Max Credit is required"),
    minCredit: yup.number().required("Min Credit is required"),
});