import * as yup from "yup";

export const buildingSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
});
