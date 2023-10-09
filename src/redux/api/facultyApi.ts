import { IFaculty, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tagTypes";

const BASE_FACULTY_API_URL = "/faculties";

export const facultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    faculties: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_FACULTY_API_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IFaculty[], meta: IMeta) => {
        return {
          faculties: response,
          meta,
        };
      },
      providesTags: [tagTypes.faculty],
    }),
    faculty: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_FACULTY_API_URL}/profile/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.faculty],
    }),
    addFacultyWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
    updateFaculty: build.mutation({
      query: (data) => ({
        url: `${BASE_FACULTY_API_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
    deleteFaculty: build.mutation({
      query: (id) => ({
        url: `${BASE_FACULTY_API_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.faculty],
    }),
  }),
});

export const {
  useAddFacultyWithFormDataMutation,
  useFacultiesQuery,
  useFacultyQuery, 
  useUpdateFacultyMutation,
  useDeleteFacultyMutation, 
} = facultyApi;