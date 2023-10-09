import * as yup from "yup";

export const roomSchema = yup.object().shape({
  roomNumber: yup.string().required("Room Number is required"),
  floor: yup.string().required("Floor is required"),
  buildingId: yup.string().required("Building is required"),
});
